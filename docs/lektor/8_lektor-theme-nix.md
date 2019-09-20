lektor-theme-nix的秘密
===

讓我們來看一下`lektor-theme-nix`如何建立主題的。首先看一下他的架構：

![lektor-theme-nix 架構](../assets/2019092013638.png)

除了前面提到的lektor部分架構：`assets`, `models`, `templates`外，這個主題資料夾中還有一個`theme.ini`檔案。

## assets

首先看到assets資料夾，裡面只放了css檔案，這個檔案裡面設定此主題套用的樣式。

![assets_folder](../assets/image-20190920234206698.png)

## models

再來看檔案第二多的資料夾`models`，裡面共有5個檔案。其中`blog-post.ini`, `blog.ini`及`page.ini`在前面利用quickstart自動產生的專案中就有提到，檔案內容也跟之前的專案內完全一樣。

但如果在這邊有調整的話，套用主題就會使用這邊的model，就不是原本專案的model囉。

![models_folder](../assets/image-models_folder.png)

## templates

templates資料夾中包含`macros`及`partials`資料夾，以及許多html檔案。

![image-20190921005705621](../assets/image-20190921005705621.png)