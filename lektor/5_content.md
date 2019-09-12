Content
===

`content`放置網頁內容檔案，透過`models`分析，並渲染到`templates`。其規則說明如下：

- content中的每一個資料夾都只負責一個頁面（等於一個網址）
- content中的每一個資料夾（包含content)中，需至少包含`contents.lr`。如下方範例，content目錄下有一個contents.lr，其他每一個子目錄下也各有一個：
    ```
    content/
        contents.lr
        portfolio/
            contents.lr
            project-a/
                contents.lr
                thumbnail.jpg
            project-b/
                contents.lr
                thumbnail.jpg
        about/
            contents.lr
    ```
- Lektor對每一個contents.lr建立網址，如`content/portfolio/project-a/contents.lr`這個路徑，生成網頁時，其路徑為`/portfolio/project-a/`。

# Page, Model及Template的三角關係

以前學程式的時候有聽過三劍客`MVC`，也就是`Model`, `View`, `Controller`。在Lektor中，重要的三劍客則是`Page, Model及Template`。

## Page與Model

假設`content/portfolio/`中，要建立一個Model。此時model資料夾裡需要建立一個model的檔案，我先叫他`post.ini`，那在`content/portfolio/contents.lr`中可以透過`_model: post`建立與`post.ini`的關係：

```lr
_model: post
---
title: Portfolio
```
## model 與 Template

在建立model的同時，template中也會有一個與model同名稱的html檔。如上述例子，建立`post.ini`，template中也會有一個`post.html`，建立model與template的關係。

# contents.lr格式

項目以`---`區隔，並以`key:value`的形式撰寫檔案。

```
_model: page
---
title: The Page Title
---
body:

The page body goes here
```