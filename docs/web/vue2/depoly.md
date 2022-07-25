# vue2 部署 

## 部署到 nginx
```nginx
# nginx.conf
http {
  server {
    # 监听的端口号
    listen       80;

    # 服务名称 生产环境要修改成 公网ip 如 47.105.134.120
    server_name  localhost;

    # 配置根目录的地址是以 nginx 下的 html 文件夹为根目录来查找的
    root html;

    # 配置默认的主页显示 比如 47.105.134.120:8080 显示的 index 页面
    location / {
        try_files $uri $uri/ /index.html;	    
    }
    # 配置我们的 admin 的前台服务 比如 47.105.134.120:8080/admin/index.html
    location ^~ /admin {
        # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
        try_files $uri $uri/ /admin/index.html;
    }
    # 如果你想配置多个项目的话，可以复制上面的，修改一下就可以同时部署多个前端项目了
    # 比如
    # location ^~ /blog {
        # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
        # try_files $uri $uri/ /blog/index.html;
    # }
    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

		# 转发 api 请求至 server 服务器 
    location /api {
      proxy_pass http://api.server.host;
    }

		# 转发 api 请求至 server 服务器 
    location /websocket/ {
      proxy_pass http://ws.server.host;

      proxy_http_version 1.1;
      proxy_read_timeout 360s;   
      proxy_redirect off;   
      proxy_set_header Upgrade $http_upgrade; 
      proxy_set_header Connection "upgrade";    #配置连接为升级连接
      proxy_set_header Host $host:$server_port;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header REMOTE-HOST $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    
    # 去除 ishsdocument
    # http://ip/ishsdocument/abc -> http://ishsfileservice/abc
    location ^~/ishsdocument/ {
      proxy_pass http://ishsfileservice/;
    }
  }
  
  # 导入 servers 下的所有配置文件
  include servers/*;
}

```