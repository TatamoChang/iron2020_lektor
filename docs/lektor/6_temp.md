---
typora-root-url: ../
---

Templates
===

接下來介紹一下Templates。Lektor使用`Jinja2`的格式產生網頁，若有興趣的話可以參考[Jinja2官網](http://jinja.pocoo.org/docs)。

前一篇有提到model與template的關係，`model與template的檔名相同`，可以輕易建立起關聯。

# Template暗號

Template中有一些特定的變數要先了解一下：

|變數名稱|說明|
|:---:|:---|
|this|現在取得的`Record`，像是從資料庫中取得的資料，可以用`this`抓到，拿來做後續的處理|
|site|可以獲取其他頁面的資料|
|alt|定義網頁語言的值，類型為文字|
|config|處理專案的配置資訊|

# Template基本用法

先來看一下之前用quickstart產生的範例檔案，開啟`template/page.html`，可以看到以下程式碼：

```html
{% extends "layout.html" %}
{% block title %}{{ this.title }}{% endblock %}
{% block body %}
  <h2>{{ this.title }}</h2>
  {{ this.body }}
{% endblock %}
```

上面的程式碼，除了熟悉的`<h2></h2>`標籤之外，其他都是jinja2的語法。在`page.html`中，包含`1個extends`及`2個block`，將於下面繼續說明。

## Extends

在第一行出現的```{% extends "layout.html" %}```，代表這個檔案會參照`layout.html`的內容。以下是`layout.html`的內容：

```html
<!doctype html>
<meta charset="utf-8">
<link rel="stylesheet" href="{{ '/static/style.css'|url }}">
<title>{% block title %}Welcome{% endblock %} — LektorTest</title>
<body>
  <header>
    <h1>LektorTest</h1>
    <nav>
        <!-- 省略 -->
    </nav>
  </header>
  <div class="page">
    {% block body %}{% endblock %}
  </div>
  <footer>
    &copy; Copyright 2019 by Chih-Chieh Chang.
  </footer>
</body>
```

從程式碼中可以看到，`<title>`及`<div class="page">`2個標籤中，都有一個`{% block  %}{% endblock %}`的樣式的程式碼，所以當`page.html`中使用`{% extends "layout.html" %}`，`page.html`就可以使用`layout.html`的版面，並設定這2個block裡面的內容。也就是說，當Lektor產生靜態網頁時，在page的這個頁面中，會使用`layout.html`設定的畫面，並根據`page.html`設定的block，使頁面中指定的位置出現我們要的資訊，可以想像是`layout.html`有title這個凹槽，而page.html設定這個凹槽要放的東西。

## Block

在知道`page.html`使用`layout.html`的版面後，下面將說明block的用法。

### block title

首先看到`page.html`第2行：
```html
{% block title %}{{ this.title }}{% endblock %}
```
這行程式碼就會取代`layout.html`裡面的`{% block title %}Welcome{% endblock %}`。

要了解`{{ this.title }}`的意義，就要回去看`page.ini`。
```ini
[model]
name = Page
label = {{ this.title }}

[fields.title]
label = Title
type = string

[fields.body]
label = Body
type = markdown
```

在page.ini設定的資訊中，有包含title及body兩個欄位，正好符合`page.html`中使用的變數名稱，所以新產生的網頁，`<title></title>`裡面顯示的內容會變為`{{ this.title }} - LektorTest`，而`{{ this.title }}`會是什麼，就會依照他抓到的資訊內容去顯示。

### block body

`page.html`剩下的程式碼長這樣：
```html
{% block body %}
  <h2>{{ this.title }}</h2>
  {{ this.body }}
{% endblock %}
```

跟上面提到的一樣，這裡的部分是設定`layout.html`裡的`{% block body %}{% endblock %}`凹槽。除了設定內容以外，還有加上了`<h2>`標籤，多設定了內容顯示的樣式。

由於`page.html`是預設的頁面樣式，若content中沒有指定model，就會指定預設`_model: page`。下面用quickstart中，about的頁面來說明：

# About頁面產生邏輯

以下將Lektor顯示about的邏輯簡要說明一遍，當使用Lektor在本機運行`lektor serve`，連線到`127.0.0.1:5000/about`，網站會作下列事情:

1. 首先在`content`資料夾中找到`about/contents.lr`檔案，
    ![tree view on about](/assets/螢幕快照 2019-09-14 下午3.15.16.png)

    `about/contents.lr`內容如下：

    ```
    title: About this Website
    ---
    body:

    This is a website that was made with the Lektor quickstart.

    And it does not contain a lot of information.
    ```
2. 因為檔案中沒有指定model，使用`page.ini`及`page.html`產生網頁。
3. `page.html`中使用`{% extends "layout.html" %}`，將以`layout.html`為框架建立網頁。
4. 從`page.html`設定block title及block body。
5. `title`為`About this Website`。
6. `body`
    ```
    This is a website that was made with the Lektor quickstart.

    And it does not contain a lot of information.
    ```
7. 生成網頁原始碼如下：
    ```html
    <!doctype html>
    <meta charset="utf-8">
    <link rel="stylesheet" href="{{ '/static/style.css'|url }}">
    <title>About this Website — LektorTest</title>
    <body>
    <header>
        <h1>LektorTest</h1>
        <nav>
            <!-- 省略 -->
        </nav>
    </header>
    <div class="page">
        <h2>About this Website</h2>
           This is a website that was made with the Lektor quickstart.

            And it does not contain a lot of information.
    </div>
    <footer>
        &copy; Copyright 2019 by Chih-Chieh Chang.
    </footer>
    </body>
    ```
8. 生成畫面如下：
    ![about page](/assets/螢幕快照 2019-09-14 下午3.30.23.png)