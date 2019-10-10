# 沒在用FTP？沒關係，我們還有更厲害的武器！

FTP相對來說是比較不安全的傳輸方式，而SSH可以提供安全的傳輸管道。

SSH以非對稱加密實現[身分驗證](https://zh.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4252-2)。身分驗證有多種途徑，例如其中一種方法是使用自動生成的公鑰-私鑰對來簡單地加密網路連接，隨後使用密碼認證進行登入；另一種方法是人工生成一對公鑰和私鑰，通過生成的金鑰進行認證，這樣就可以在不輸入密碼的情況下登入。任何人都可以自行生成金鑰。公鑰需要放在待存取的電腦之中，而對應的私鑰需要由用戶自行保管。認證過程基於生成出來的私鑰，但整個認證過程中私鑰本身不會傳輸到網路中。

只要伺服端有ssh server，那就可以利用rsync部署lektor專案生成的靜態網頁。rsync路徑格式為`rsync://username@server/path/to/folder`，同樣地在`.lektorproject`中設定路徑：

```ini
[servers.production]
target = rsync://deploy@example.com/var/www/example.com
```
以下是我設定的內容：
```ini
[servers.ssh]
name = Ubuntu_ssh
target = rsync://root@ip/var/www/html/lektor
```
設定完在編輯模式上就可以選則rsync的部署方式囉～～～

![image-20191011023412006](../assets/image-20191011023412006.png)

如果部署的位置是apache或其他伺服器的資料夾路徑，那就可以直接透過網路連線檢視網頁囉～～

![image-20191011023910323](../assets/image-20191011023910323.png)

# 團隊系列文

CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)