# 這扇門關了，馬上幫你開另一扇窗！

在Lektor中設定自動導向非常地簡單！一樣從`model `、`template`、`content`依序下手：

## Model

**models/redirect.ini**

在redirect的model中建立`target`這個字串欄位，指定路徑進行導向。

```ini
[model]
name = Redirect

[fields.target]
label = Redirect Target
type = string
description = Target is of type 'string' to allow relative paths. Converted to url in the template.
```

## Template

template很簡單，一句話：

**templates/redirect.html**

```html
<meta http-equiv="refresh" content="0; URL='{{ this.target|url }}'" />
```

## Contents

**content/page-to-redirect/contents.lr**

在你要進行重新導向的網頁路徑中，修改contents內容，指定model為redirect，讓lektor知道這個網頁需要重新導向。

```ini
_model: redirect
---
target: /new/path
---
_discoverable: no
```

## 自行測試

照著說明做，測試將網頁重新導向到blog頁面，名稱為`backToBlog`，target就是`/blog`。

1. 新增redirect.ini model

2. 新增redirect.html template

3. 新增`backToBlog/contents.lr`，並設定`target: /blog`

4. 將`backToBlog`連結加入nav bar中。

   ```html
   <nav>
       <ul class="nav navbar-nav">
           <li{% if this._path == '/' %} class="active"{% endif
                 %}><a href="{{ '/'|url }}">Welcome</a></li>
           {% for href, title in [
           ['/blog', 'Blog'],
           ['/projects', 'Projects'],
           ['/backToBlog', 'backToBlog'],
           ['/about', 'About']
           ] %}
           <li{% if this.is_child_of(href) %} class="active"{% endif
                 %}><a href="{{ href|url }}">{{ title }}</a></li>
           {% endfor %}
       </ul>
   </nav>
   ```

![redirect](../assets/redirect.gif)

# 團隊系列文

CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)