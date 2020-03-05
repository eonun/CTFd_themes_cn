# CTFd_themes_cn

本库是由CTFd v2.3.1中提取的主题文件翻译完成，完成度大概95%，只有少部分没找到内容，或没法直接翻译的内容没有翻译。本翻译仅为机翻加个人理解，仅为个人使用，若有错误请指正！

**本库仅保证与 CTFd v2.3.1兼容，其他版本不保证完全兼容**

# 使用

- 获得CTFd v2.3.1，解压

```bash
wget -O CTFd-2.3.1.tar.gz https://github.com/CTFd/CTFd/archive/2.3.1.tar.gz
tar -zxvf CTFd-2.3.1.tar.gz
```

- 获得汉化文件

```bash
wget -O themes_cn.tar.gz https://github.com/eonun/CTFd_themes_cn/releases/download/v2.3.1_cnv3/themes_cn_v3.tar.gz
tar -zxvf themes_cn.tar.gz
wget -O plugins_cn.tar.gz https://github.com/eonun/CTFd_themes_cn/releases/download/v2.3.1_cn_v3/plugins_cn.tar.gz
tar -zxvg plugins_cn.tar.gz
```

- 备份原文件，替换汉化文件

```bash
mv CTFd-2.3.1/CTFd/themes CTFd-2.3.1/CTFd/themes.backup
mv themes_cn CTFd-2.3.1/CTFd/themes
mv CTFd-2.3.1/CTFd/plugins_cn CTFd-2.3.1/CTFd/plugins.backup
mv plugins_cn CTFd-2.3.1/CTFd/plugins
```

- 部署

```bash
docker build -t CTFd .
docker run -p 8000:8000 -itd CTFd
```


# 预览


![00](./image/00.png)


![01](./image/01.png)


![02](./image/02.png)


![03](./image/03.png)


![04](./image/04.png)



![05](./image/05.png)


![06](./image/06.png)
















