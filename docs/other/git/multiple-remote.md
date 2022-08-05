# 添加多个 remote

```bash
# 初始化
git init
# 添加远程仓库
git remote add origin git@gitxxxx.com
# 添加第二个仓库
git remote set-url --add origin ssh@gitxx2.com
# 添加所有文件至本地暂存
git add .
# 添加提交信息并提交至本地仓库
git commit -m 'init'
# 推送至 远程仓库
git push -u origin master
```
