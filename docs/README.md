# 30天學習Lektor鐵人賽介紹

[Lektor 官方網站](https://www.getlektor.com/)

# 說明

不知道您有沒有過類似的經驗，興高采烈地學會了Django、Flask等動態框架的網頁後，還要找Heroku、pythonanywhere、或是GCP等平台部署網頁，無法直接在Github平台中提供的Github Pages直接建立網頁，因為Github Pages只支援靜態網頁，在[官方說明網頁](https://help.github.com/en/articles/what-is-github-pages)中也有提到：`GitHub Pages 與Jeklly深度整合，除此之外僅支援靜態網頁，不支援伺服端程式語言如PHP，Ruby或Python`。

也因為這樣的限制，有時候想要開發一個功能較單一的網站，反而要花許多時間在考慮部署的地方，影響開發心情及效率......或許Lektor的開發者聽到了我的心聲，因此接下來這30天，將深度了解Lektor的功能，並嘗試將網頁部署至Github Pages上執行。

> 現在其實不止Lektor能做到，若對Flask有研究的話，也可以參考[Frozen-Flask](https://pythonhosted.org/Frozen-Flask/)，其邏輯跟Flask差不多，也是將程式碼生成靜態網站放到Github上。但如果之後要轉換成動態網站的話，Flask-Frozen開發的專案也可以改用Flask開發。如果接下來30天講完Lektor還有時間（沒梗？）的話，也會稍微研究一下提供大家參考。

值得一提的是，Lektor同時也是Flask的作者。他在[Lektor介紹](https://www.getlektor.com/docs/what/)中提到，`Lektor`與`Drupal`、`Google Web Designer`、`WIX`及`Jekyll`完全不同，這句話激發了我的興趣，這30天就來看看Lektor如何與眾不同。

Lektor 是一個靜態網頁產生工具，可以將專案生成靜態網頁發布。並可以直接在本機端開啟網頁直接編輯內容，因此這個專案在開發完成後提交給管理者使用時，管理者不需要有認何程式開發的基礎，就可以直接在本機端透過網頁編輯更新內容，更新完後直接將修改後的內容上傳到網站中，網站也就直接更新。

在[Lektor · PyPI](https://pypi.org/project/Lektor/)，`Lektor支援Python2.7, 3.5, 3.6, 3.7`，似乎一開始僅支援Python2，幸好現在已有支援我較為熟悉的Python3，因此接下來的文章將使用Python3.7來寫。本系列文章的目標就是利用Lektor開發出一個完整的網站，並將其發佈至github。

以下是根據官網的說明文件所列項目，未來會有18-20天左右在解讀說明文件的內容，同時補充我測試的心得、搜集的資料或是特殊發現作為鐵人賽的文章；剩下的10-12天會用來實際使用Lktor建立網站。希望能夠堅持完成30天的鐵人發文！！
* Installation
* Quickstart
* Project
* Content
* Templates 
* Themes 
* Guides
* Deployment
* Plugins
* Data Modelling
* Command Line
* API



