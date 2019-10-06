# 裝上強力的武器，Lektor外掛介紹

在前面的文章中有提到兩個外掛：`disqus`及`webpack`。本篇文章將說明如何安裝、讀取、以及開發並上架外掛。

## 安裝外掛

安裝方式有兩種，第一個是直接在`.lektorproject`中輸入外的名稱及版本：

```ini
[packages]
lektor-disqus-comments = 0.4.1
lektor-webpack-support = 0.5
```

另一種則是透過指令新增，最終也會在`.lektorproject`的檔案中加入外掛。

```
$ lektor plugin add lektor-disqus-comments
```

## 讀取外掛

若是有在`.lektorproject`輸入名稱，Lektor就會讀取外掛，但如果是正在開發中的外掛，可以在專案中建立`package`資料夾，並在資料夾中建立放入外掛，1個外掛1個資料夾。

## 開發外掛

在開發前需要先設定`LEKTOR_DEV=1`。

```
$ export LEKTOR_DEV=1
$ lektor server
```

## 建立package

如同前面說明，在`package`資料夾中建立外掛的資料夾，即可開始進行開發。Lektor也有提供指令，幫你建立外掛資料夾，通常命名為`lektor-xxxx`。像是前面提到的disqus，其外掛名稱為`lektor-disqus-comments`。以下用`lektor-hello-world`為例介紹外掛開發流程，首先執行指令，或是在`package`資料夾中建立`lektor-hello-world`資料夾：

```
$ lektor dev new-plugin
```

執行上述命令後，lektor會問你一些問題，並根據的你回答建立外掛資料夾：

![image-20191006163057657](../assets/image-20191006163057657.png)

以下是剛建立的外掛資料夾架構

![image-20191006163150139](../assets/image-20191006163150139.png)

裡面包含README.md，setup.py，及lektor_hello_world.py檔案，並幫你建立.gitignore，避免之後要push時不小心也把執行過程的檔案也上傳上去，真的是非常貼心呢！