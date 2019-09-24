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
