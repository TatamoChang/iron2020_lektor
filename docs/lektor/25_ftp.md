# 古董級的傳輸協定！FTP部署方法

從小時候就存在的FTP，現在依舊還是偶爾會使用到。貼心的Lektor也提供FTP部署的設定：

```ini
[servers.production]
target = ftps://myuser:mypassword@ftp.example.com/var/www/example
```

同時提供了FTP及FTPS兩種模式，設定格式如下：

- `ftp://username:password@server:port/path?passive=yes|no`
- `ftps://username:password@server:port/path?passive=yes|no`

其實兩者就差在開頭而已，格式都是名稱:密碼@IP:port/路徑。最後的`?passive`是設定連結模式是否為被動，預設為否。

以下為我的ftp部署設定，移除了密碼資訊，並設定名稱為`Production`。如果有多個平台需要部署測試，這個設定可以方便辨識。

```ini
[project]
name = LektorTest
[servers.production]
name = Production
target = ftp://tatamo:password@140.127.202.232:25/
```

設定完後利用`lektor serve`啟動後，進入編輯模式，點擊畫面上方一個雲中有向上箭頭的圖示，就是雲端上傳的意思。此時可以看到目標伺服器可以選擇剛剛設定的ftp通道。

![image-20191010020812247](../assets/image-20191010020812247.png)

![image-20191010021019796](../assets/image-20191010021019796.png)

此時會看到下方出現部署的資訊，可以看到lektor將成果轉成靜態網頁檔案後，變更新到ftp上面，所以不需要輸入指令build再sync，真的是超方便的！！

![image-20191010020632924](../assets/image-20191010020632924.png)

此時進入ftp上傳的資料夾，可以看到完整的靜態網頁檔案以及`.lektor`資料夾。`.lektor`裡面只有1個listing檔案，放置所有同步的網頁檔案資料。

ftp部署設定真的超簡單！

# 團隊系列文

CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)