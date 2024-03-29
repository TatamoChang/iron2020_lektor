Lektor的肉，還有看得見與看不見的戀情
===

`content`放置網頁內容檔案，透過`models`分析，並渲染到`templates`。其規則說明如下：

- content中的每一個資料夾都只負責一個頁面（等於一個網址）
- content中的每一個資料夾（包含content)中，需至少包含`contents.lr`。如下方範例，content目錄下有一個contents.lr，其他每一個子目錄下也各有一個：
    ```ini
    content/
    |___contents.lr
    |___portfolio/
    |   |___contents.lr
    |   |___project-a/
    |   |   |___contents.lr
    |   |   |___thumbnail.jpg
    |   |___project-b/
    |       |___contents.lr
    |       |___thumbnail.jpg
    |___about/
        |___contents.lr
    ```

- Lektor對每一個contents.lr建立網址，如`content/portfolio/project-a/contents.lr`這個路徑，生成網頁時，其路徑為`/portfolio/project-a/`。

# Content, Model及Template與瀏覽器的戀情(?)

以前學程式的時候有聽過三劍客`MVC`，也就是`Model`, `View`, `Controller`。在Lektor中，重要的三劍客則是`Content, Model及Template`。以下是我接觸Lektor後，心中模擬的互動關係：

![CMT戀情](../assets/1569313331889.png)

看起來瀏覽器與`Content`、`Template`形成了三角戀情，但是在這段關係裡，model的付出是不可或缺的(大誤)

## Content與Model

假設`content/portfolio/`中，要建立一個Model。此時model資料夾裡需要建立一個model的檔案，我先叫他`post.ini`，那在`content/portfolio/contents.lr`中可以透過`_model: post`建立與`post.ini`的關係：

```ini
_model: post
---
title: Portfolio
```

在這邊要注意的是，Lektor規則，會先看`contents.lr`裡是否有指定model（`_model:`），若沒有的話，將會轉向指定預設`_model: post`。

## model 與 Template

在建立model的同時，template中也會有一個與model同名稱的html檔。如上述例子，建立`post.ini`，template中也會有一個`post.html`，建立model與template的關係。

# contents.lr格式

項目以`---`區隔，並以`key:value`的形式撰寫檔案。

```ini
_model: page
---
title: The Page Title
---
body:

The page body goes here
```

# 團隊系列文
CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)