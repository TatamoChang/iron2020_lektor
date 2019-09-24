時尚外衣任你挑，Lektor主題功能介紹
===

接下來要介紹主題(Themes)。此功能是在V3.1之後才出現的，目前似乎還不穩定，尚在實驗階段。

主題的功能就跟其他網站，甚至軟體、手機一樣，事先完成整套的配色及設定，選擇時就可以套用此主題的配色與設定，因此可以使用別人公開的主題，達成快速建立網頁畫面的功能。

Lektor的主題運作方式類似於專案擴充元件，可以輕鬆的選擇外觀、model甚至templates，以下為‘Themes`可以提選擇的項目：

- templates
- models
- flowblocks
- assets

以上除了`flowblocks`以外，其他都有在前篇文章說明過，應該也不陌生。接下來看看要怎麼樣在Lektor中使用主題！

# 安裝主題

主題的檔案固定放在`themes`資料夾，在第4天的文章中有提到專案架構，而主題的資料夾同樣也是在專案架構中，建立主題資料夾的專案架構如下：

```
.
|____LektorTest.lektorproject
|____content
|____models
|____templates
|____assets
|____themes
```

建立資料夾後，就可以將主題放入囉!

這邊有一個範例的主題專案可以測試，在themes資料夾中將此主題抓下來：

```
$ cd themes
$ git clone https://github.com/rlaverde/lektor-theme-nix.git
```
接著在`.lektorproject`中設定主題，才算完成主題設定！！

```ini
[project]
themes = lektor-theme-nix
```

# 安裝多種主題

安裝方式很簡單，將想要加入的主題資料放入themes資料夾中，並在`.lektorproject`完成設定即可，以下為使用`lektor-theme-nix`, `lektor-theme-other-theme`兩種主題的範例：

先在資料夾中加入主題的資料

```
.
|____LektorTest.lektorproject
|____content
|____models
|____templates
|____assets
|____themes
    ├── lektor-theme-other-theme/
    └── lektor-theme-nix/
```

在.lektorproject檔案中完成設定

```ini
[project]
themes = lektor-theme-nix, lektor-theme-other-them
```



# lektor-theme-nix 外觀

既然安裝了`lektor-theme-nix`主題，來看一下安裝後會長甚麼樣子!

在設定`.lektorproject`後迅速使用`$ $lektor serve`開啟，發現......跟原本的長一樣阿!

請先深吸一口氣，然後慢慢往下拉。

![1568701682233](../assets/1568701682233.png)

這是因為Lektor主題都是以page.html為預設檔案，但是原本的專案資料夾中已經有同樣的檔案，刪掉原本專案資料夾中的html檔案後就會出現主題的樣貌!

![lektor-theme-nix](../assets/1568701425260.png)

他的左上角的`@ ~ $`有點詭異，究竟是怎麼回事呢?我們下一篇來看一下`lektor-theme-nix`