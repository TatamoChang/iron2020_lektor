# 萬丈高樓平地起，Lektor打地基看這裡

Lektor提供桌面版(only for Mac)及命令列兩種方式安裝，但最新的版本已停止支援桌面版，因此將用`命令列`方式安裝以減少坑的出現。

## 安裝流程

### Python

以Mac為例：

首先要安裝Python

`$ brew install python3`

安裝ImageMagick：

`$ brew install imagemagick`

> Linux系統需安裝以下軟體：<br>
> `$ sudo apt-get install python-dev libssl-dev libffi-dev`<br>
> Windows可透過Anaconda安裝

### Lektor

安裝Lektor套件，有下兩種方式：
1. 官方安裝.sh檔

   `$ curl -sf https://www.getlektor.com/install.sh | sh`

2. 利用pip 安裝，可用在獨立開發環境需求使用。

   `$ pip install Lektor`

如果你想安裝開發版本，也可以：
```
$ git clone https://github.com/lektor/lektor
$ cd lektor
$ make build-js
$ virtualenv venv
$ . venv/bin/activate
$ pip install --editable .
```

# 團隊系列文
CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)