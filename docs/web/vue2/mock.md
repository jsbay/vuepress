# Mock

## 配置

### 新建`mock`目录

```dir
package.json
mock
  |---modules
        |---sys.js
  |---mock-server.js
  |---index.js
  |---utils.js
```

### package.json

```json
// package.json
{
  "devDependencies": {
    "chalk": "2.4.2",
    "mockjs": "1.0.1-beta3"
  }
}
```

### mock/index.js

```js
// mock/index.js
const Mock = require("mockjs");
const { param2Obj } = require("./utils");

const sys = require("./modules/sys");

const mocks = [...sys];

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || "get",
      XHR2ExpressReqWrap(i.response)
    );
  }
}

module.exports = {
  mocks,
  mockXHR,
};
```

### mock/mock-server.js

```js
// mock/mock-server.js
const chokidar = require("chokidar");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const path = require("path");
const Mock = require("mockjs");

const mockDir = path.join(process.cwd(), "mock");

function registerRoutes(app) {
  let mockLastIndex;
  const { mocks } = require("./index.js");
  const mocksForServer = mocks.map((route) => {
    return responseFake(route.url, route.type, route.response);
  });
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response);
    mockLastIndex = app._router.stack.length;
  }
  const mockRoutesLength = Object.keys(mocksForServer).length;
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
  };
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)];
    }
  });
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || "get",
    response(req, res) {
      const { method } = req;
      switch (method) {
        case "GET":
          console.log(
            chalk.rgb(
              0,
              168,
              84
            )(` 🌐 [${req.method}] request invoke: ${req.path}`)
          );
          break;
        case "POST":
          console.log(
            chalk.rgb(
              16,
              142,
              233
            )(` 🌐 [${req.method}] request invoke: ${req.path}`)
          );
          break;
        case "PATCH":
          console.log(
            chalk.rgb(
              255,
              191,
              0
            )(` 🌐 [${req.method}] request invoke: ${req.path}`)
          );
          break;
        case "DELETE":
          console.log(
            chalk.rgb(
              240,
              65,
              52
            )(` 🌐 [${req.method}] request invoke: ${req.path}`)
          );
          break;
        default:
          console.log(
            chalk.rgb(
              0,
              168,
              84
            )(` 🌐 [${req.method}] request invoke: ${req.path}`)
          );
          break;
      }

      // res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))

      // 这里setTimeout 是为了模拟延迟 观察全局loading组件
      setTimeout(function () {
        res.json(
          Mock.mock(respond instanceof Function ? respond(req, res) : respond)
        );
      }, 500);
    },
  };
};

module.exports = (app) => {
  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  const mockRoutes = registerRoutes(app);
  var mockRoutesLength = mockRoutes.mockRoutesLength;
  var mockStartIndex = mockRoutes.mockStartIndex;

  // watch files, hot reload mock server
  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true,
    })
    .on("all", (event, path) => {
      if (event === "change" || event === "add") {
        try {
          // remove mock routes stack
          app._router.stack.splice(mockStartIndex, mockRoutesLength);

          // clear routes cache
          unregisterRoutes();

          const mockRoutes = registerRoutes(app);
          mockRoutesLength = mockRoutes.mockRoutesLength;
          mockStartIndex = mockRoutes.mockStartIndex;

          console.log(
            chalk.magentaBright(
              `\n > Mock Server hot reload success! changed  ${path}`
            )
          );
        } catch (error) {
          console.log(chalk.redBright(error));
        }
      }
    });
};
```

### mock/utils.js

```js
// mock/utils.js
/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ");
  if (!search) {
    return {};
  }
  const obj = {};
  const searchArr = search.split("&");
  searchArr.forEach((v) => {
    const index = v.indexOf("=");
    if (index !== -1) {
      const name = v.substring(0, index);
      const val = v.substring(index + 1, v.length);
      obj[name] = val;
    }
  });
  return obj;
}

module.exports = {
  param2Obj,
};
```

### mock/modules/sys.js

```js
const Mock = require("mockjs");

const menus = [
  { name: "菜单 1", id: "1" },
  { name: "菜单 2", id: "2" },
  { name: "菜单 3", id: "3" },
  { name: "菜单 4", id: "4" },
];

const data = Mock.mock({
  "roles|200": [
    {
      "id|+1": 100000000,
      role: "@cname",
      "state|1": [-1, 0, 1],
      createtime: "@datetime",
      menus: `@shuffle(${JSON.stringify(menus)}, 0, 4)`,
    },
  ],
});

module.exports = [
  // 列表
  {
    url: "/roles",
    type: "get",
    response: (config) => {
      const { query } = config;
      const total = data.roles.length;

      const start = (query.page - 1) * query.limit;
      const end = start + (query.limit - 0);

      const roles = data.roles.slice(start, end);
      return {
        code: 0,
        data: {
          total,
          roles,
        },
      };
    },
  },
  // 新增
  {
    url: "/role",
    type: "post",
    response: (config) => {
      return {
        code: 0,
        data: {},
      };
    },
  },
  // 修改
  {
    url: "/role",
    type: "patch",
    response: (config) => {
      return {
        code: 0,
        data: {},
      };
    },
  },
  // 删除
  {
    url: "/role",
    type: "delete",
    response: (config) => {
      return {
        code: 0,
        data: {},
      };
    },
  },
  // 所有权限
  {
    url: "/role/menus",
    type: "get",
    response: (config) => {
      return {
        code: 0,
        data: {
          menus,
        },
      };
    },
  },
];
```

### vue.config.js

```js
// vue.config.js
const port = process.env.port || process.env.npm_config_port || 9528; // dev port

module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // before: require('./mock/mock-server.js') // mock
  },
};
```

## 示例 mock 数据

```js
const Mock = require("mockjs");

const permissions = [
  { name: "活动管理-审核", id: "1" },
  { name: "活动管理-排号", id: "2" },
  { name: "活动管理-充值", id: "3" },
  { name: "活动管理-放单", id: "4" },
];

const data = Mock.mock({
  "demos|200": [
    {
      // id: '@id',
      "id|+1": 100000001,
      username: /^A\d{4}$/,
      nickname: /^用户 [A-Z]/,
      email: /^[a-z0-9]{2,4}\.?[a-z0-9]{2,4}@autobio\.com\.cn/,
      phone:
        /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
      // permissions: '@shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 9)', // 随机 [1, 2, 3, 4, 5, 6, 7, 8, 9] 中的 0 - 9 个
      permissions: `@shuffle(${JSON.stringify(permissions)}, 0, 4)`, // 随机 permissions 中的 0 - 4 个
      morpBestImage: "https://picsum.photos/200?@date(yyyyMMdd)", // 形态学最优结果
    },
  ],
  "methodologies|10": [
    {
      "id|+1": 10000, // 数据库生成
      name: "方法学 @date(yyyyMMdd)", // 方法学名
    },
  ],
});
```
