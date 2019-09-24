Lektor三劍客
===

上一篇介紹了落落長lektor-theme-nix的祕密後，還是有一些3個檔案是比較不熟的：

1. theme.ini

2. showcase.html

3. showcase-item.html

`theme.ini`會先介紹，然後`showcase.html`及`showcas-item.html`會一起講。

## theme.ini

`theme.ini`在主題建立屬於非必要的檔案，但如果你想要將自訂的主題分享到社群提供其他開發者使用，那`theme.ini`就是必要的檔案囉！來看一下`lektor-theme-nix`的`theme.ini`內容吧：

```ini
[theme]
name = Nix
license = MIT
licenselink = https://github.com/rlaverde/lektor-theme-nix/blob/master/LICENSE.md
description = Simple, minimal theme for Lektor
homepage = https://github.com/rlaverde/lektor-theme-nix
tags = simple, minimal, unix, terminal, blog
features = blog
lektor_required_version = 3.1

[author]
name = rlaverde
homepage = http://rlaverde.github.io/

[original]
author = Matúš Námešný
homepage = https://namesny.com
repo = https://github.com/LordMathis/hugo-theme-nix

[packages]
lektor-disqus-comments = 0.2
```

裡面的資訊基本上就是放入這個主題的基本資訊。`[original]`比較特殊，當你的主題是從其他人分享的主題去改進，那這個項目需要填引用的主題資訊。

## showcase

可以看到`templates`資料夾中有`showcase.html`及`showcas-item.html`；models資料夾中也有`showcase.ini`及`showcas-item.ini`，卻不見`content`資料夾裡有showcase資料夾。所以說在使用quickstart建立基本blog專案，並套入這個主題時，沒有作任何更動，是不會看到showcase出現在網頁中。那這個showcase放在網頁中會長甚麼樣子呢?讓我們來看看！

### model

首先看一下model。model中分別設定了`showcase`及`showcase-item`的model，根據字樣應該是`showcase`為`showcase-item`上層，所以先來看showcase。

```ini
[model]
name = Showcase
label = Showcase
hidden = yes

[fields.title]
label = Title
type = string

[children]
model = showcase-item
order_by = name
```

這邊設定了model的基本屬性`[model]`，資料架構只有一個`title`字串，並指定子層為`showcase-item`，以`showcase-item`的`name`欄位排序。接下來是`showcase-item`：

```ini
[model]
name = Site
label = {{ this.name }}
hidden = yes

[fields.name]
label = Name
type = string
size = large

[fields.url]
label = URL
type = url
width = 1/2

[fields.cover_image]
label = Cover Image
type = select
source = record.attachments.images
width = 1/2

[fields.description]
label = Description
type = markdown
```

`showcase-item`共有`name`, `url`, `cover_image`, `description`這4個欄位，所以之後要建立新的頁面，需注意欄位名稱，或是直接透過網頁來編輯，這就是之後要體驗的lektor強大的地方！

### content

為了要讓lektor讀取到showcase的頁面，contents.lr存在是必要的。因為原本的專案沒有這個資料夾，所以要先建立`showcase`資料夾，並在資料夾中建立contents.lr檔案。
