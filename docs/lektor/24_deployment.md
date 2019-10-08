# 一條龍的服務，發布專案依舊不馬虎

接下來終於要進入正題了。前面介紹完`Lektor`基本功能後，也需要介紹部署到`github`的方法，不然怎麼符合一開始的目標呢！

在部署的時候有兩個步驟，第一個為`build`，再來才是`deploy`。要注意的是，我們要發佈到伺服器，提供給使用者看的網頁，是經過`build`後的網頁，如果將專案資料直接`deploy`上去，這樣伺服器也無法存取網頁，`只會是專案資料備份而已`。

## build

lektor預設生成的靜態網頁檔案，會存在tmp資料夾中，如果想要知道輸出的位置，可以使用以下指令：

```
$ lektor project-info --output-path
```

或是你也可以在執行指令時，指定生成資料夾位置：

```
$ lektor build --output-path my-folder
```

如此一來生成的網站檔案就會放在同目錄下的`my-folder`中。

## Lektor小幫手

懶得打那麼多字？沒關係，Lektor幫你！！只要在.lektorproject檔案中設定好部署的路徑，接下來便輕輕鬆鬆～

```ini
[servers.production]
name = Production
enabled = yes
default = yes
target = rsync://server/path/to/folder
```

首先設定servers的名稱，也就是`servers.xxxxx`的`xxxxx`，如上範例就是`production`。檔案設定完後就可以直接使用`lektor deploy production`進行部署，是不是很方便啊！甚至作為預設伺服器，可以直接省略名稱，執行`lektor deploy`就行！！

當然，要注意的是，這邊的deploy是不會進行build動作。所以如果你修改的內容沒有完成build，那部署上去的就只會是最後一次執行build的進度而已喔！
```
$ lektor build && lektor deploy
```

## 教練，我想自己來

沒問題，以下為部署到Amazon S3的指令：

```
$ lektor build && s3cmd sync "$(lektor project-info --output-path)"/* "s3://my-bucket/some/path"
```

## 說好的github呢

除了上述的方法以外，lektor也提供了FTP、Github Pages、GitLab Pages、rsync、Travis-CI等部署方法，將在下一篇開始一系列的介紹。

# 團隊系列文

CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)