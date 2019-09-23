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
