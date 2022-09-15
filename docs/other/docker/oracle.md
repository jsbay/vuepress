# oracle 甲骨文服务器常用命令

## 一些常用的命令

- 进入 docker 容器

```bash
docker exec -it qinglong /bin/bash
```

- 启动所有容器

```bash
docker start $(docker ps -a | awk '{ print $1}' | tail -n +2)
```

- 关闭所有容器

```bash
- docker stop $(docker ps -a | awk '{ print $1}' | tail -n +2)
```

- 删除所有容器

```bash
docker rm $(docker ps -a | awk '{ print $1}' | tail -n +2)
```

- 删除所有镜像

```bash
docker rmi $(docker p_w_picpaths | awk '{print $3}' |tail -n +2)
```

- 重启所有容器

```bash
docker restart $(docker ps -a | awk '{ print $1}' | tail -n +2)
```

## docker 容器自启动

### 方案 1

:::info 在创建容器时设置，添加参数 `--restart=always`
:::

```bash
docker run -d --restart=always --name 设置容器名 使用的镜像
（上面命令  --name后面两个参数根据实际情况自行修改）

# Docker 容器的重启策略如下：
 --restart具体参数值详细信息：
       no　　　　　　　 // 默认策略,容器退出时不重启容器；
       on-failure　　  // 在容器非正常退出时（退出状态非0）才重新启动容器；
       on-failure:3    // 在容器非正常退出时重启容器，最多重启3次；
       always　　　　  // 无论退出状态是如何，都重启容器；
       unless-stopped  // 在容器退出时总是重启容器，但是不考虑在 Docker 守护进程启动时就已经停止了的容器。
```

### 方案 2

:::info 使用 `update` 修改已有容器
:::

```bash
docker update --restart=always 容器ID(或者容器名)
# 容器ID或者容器名根据实际情况修改
```
