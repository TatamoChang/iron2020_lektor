(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{253:function(t,e,r){t.exports=r.p+"assets/img/image-20191011023412006.7778cbe0.png"},254:function(t,e,r){t.exports=r.p+"assets/img/image-20191011023910323.b3d47ea9.png"},314:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"沒在用ftp？沒關係，我們還有更厲害的武器！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#沒在用ftp？沒關係，我們還有更厲害的武器！"}},[t._v("#")]),t._v(" 沒在用FTP？沒關係，我們還有更厲害的武器！")]),t._v(" "),a("p",[t._v("FTP相對來說是比較不安全的傳輸方式，而SSH可以提供安全的傳輸管道。")]),t._v(" "),a("p",[t._v("SSH以非對稱加密實現"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4252-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("身分驗證"),a("OutboundLink")],1),t._v("。身分驗證有多種途徑，例如其中一種方法是使用自動生成的公鑰-私鑰對來簡單地加密網路連接，隨後使用密碼認證進行登入；另一種方法是人工生成一對公鑰和私鑰，通過生成的金鑰進行認證，這樣就可以在不輸入密碼的情況下登入。任何人都可以自行生成金鑰。公鑰需要放在待存取的電腦之中，而對應的私鑰需要由用戶自行保管。認證過程基於生成出來的私鑰，但整個認證過程中私鑰本身不會傳輸到網路中。")]),t._v(" "),a("p",[t._v("只要伺服端有ssh server，那就可以利用rsync部署lektor專案生成的靜態網頁。rsync路徑格式為"),a("code",[t._v("rsync://username@server/path/to/folder")]),t._v("，同樣地在"),a("code",[t._v(".lektorproject")]),t._v("中設定路徑：")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[servers.production]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("target")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" rsync://deploy@example.com/var/www/example.com")]),t._v("\n")])])]),a("p",[t._v("以下是我設定的內容：")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[servers.ssh]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Ubuntu_ssh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("target")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" rsync://root@ip/var/www/html/lektor")]),t._v("\n")])])]),a("p",[t._v("設定完在編輯模式上就可以選則rsync的部署方式囉～～～")]),t._v(" "),a("p",[a("img",{attrs:{src:r(253),alt:"image-20191011023412006"}})]),t._v(" "),a("p",[t._v("如果部署的位置是apache或其他伺服器的資料夾路徑，那就可以直接透過網路連線檢視網頁囉～～")]),t._v(" "),a("p",[a("img",{attrs:{src:r(254),alt:"image-20191011023910323"}})]),t._v(" "),a("h1",{attrs:{id:"團隊系列文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#團隊系列文"}},[t._v("#")]),t._v(" 團隊系列文")]),t._v(" "),a("p",[t._v("CSScoke - "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112550/ironman/2623",target:"_blank",rel:"noopener noreferrer"}},[t._v("金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎"),a("OutboundLink")],1),t._v("\nKing Tzeng - "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20103130/ironman/2125",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT沒那麼難！新手用JavaScript入門做自己的玩具～"),a("OutboundLink")],1),t._v("\nHina Hina - "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120000/ironman/2256",target:"_blank",rel:"noopener noreferrer"}},[t._v("陣列大亂鬥"),a("OutboundLink")],1),t._v("\n阿斬 - "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120536/ironman/2571",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 程式交易 30 天新手入門"),a("OutboundLink")],1),t._v("\nClarence - "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20117701/ironman/2634",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE bot 好好玩 30 天玩轉 LINE API"),a("OutboundLink")],1),t._v("\n塔塔默 - "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112552/ironman/2735",target:"_blank",rel:"noopener noreferrer"}},[t._v("用Python開發的網頁不能放到Github上？Lektor說可以！！"),a("OutboundLink")],1),t._v("\nVita Ora - "),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112656/ironman/2782",target:"_blank",rel:"noopener noreferrer"}},[t._v("好 Js 不學嗎 !? JavaScript 入門中的入門。"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);