# CRLF 与 LF

> CRLF 是 carriage return line feed 的缩写，中文意思是回车换行。
>
> LF 是 line feed 的缩写，中文意思也是换行。
>
> 它们都是文本换行的方式。

## 区别

- `CRLF`: `"\r\n"`: windows 系统环境下的换行方式

- `LF`: `"\n"`: Linux/Mac OS 系统环境下的换行方式

## git config core.autocrlf

在 widnows 环境下, `git config --global core.autocrlf` 默认为`true`

- `true` : 上传代码时转换成 `LF`, 下载代码时 转换成 `CRLF`;
- `false` : 上传代码和下载代码时, 都不会转换;
- `input` : 仅在上传代码时转换成 `LF`;
