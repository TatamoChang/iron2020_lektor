(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{228:function(t,e,a){t.exports=a.p+"assets/img/image-20190929024958223.12f0ec9b.png"},304:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_404自己做，美到人人想犯錯"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_404自己做，美到人人想犯錯"}},[t._v("#")]),t._v(" 404自己做，美到人人想犯錯")]),t._v(" "),r("p",[t._v("我說的是你們不是我!抱歉我的美學不太能見人，但是看完這篇，你就可以做出美到讓人想犯錯，只為求一見的404頁面XD。")]),t._v(" "),r("h2",{attrs:{id:"設定url-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#設定url-style"}},[t._v("#")]),t._v(" 設定url_style")]),t._v(" "),r("p",[t._v("首先在"),r("code",[t._v(".lektorproject")]),t._v("檔案中設定url_style為絕對路徑"),r("code",[t._v("absolute")]),t._v("，這樣網址在導向到404的時候才不會出現錯誤的路徑而看不到404畫面。所以"),r("code",[t._v(".lektorproject")]),t._v("在沒有其他設定的時候會長這個樣子：")]),t._v(" "),r("p",[r("strong",[t._v(".lektorproject")])]),t._v(" "),r("div",{staticClass:"language-ini extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ini"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[project]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("name")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" LektorTest")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("url_style")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" absolute")]),t._v("\n")])])]),r("h2",{attrs:{id:"建立404頁面的連線"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#建立404頁面的連線"}},[t._v("#")]),t._v(" 建立404頁面的連線")]),t._v(" "),r("p",[t._v("要想網站可以連到404畫面，須先設定contents.lr建立連線：")]),t._v(" "),r("p",[t._v("因為預設的model是page.ini，如果沒有特別設定404的model的話，建議將model指向none。")]),t._v(" "),r("p",[r("strong",[t._v("404.html/contens.lr")])]),t._v(" "),r("div",{staticClass:"language-ini extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ini"}},[r("code",[t._v("_model: none\n---\n_template: 404.html\n")])])]),r("p",[t._v("接著只要在template中建立404.html頁面就可以了，是不是很簡單？！！以下為建立簡單404.html參考，你可以考慮沿用layout的版面，或是直接做一個新的頁面。")]),t._v(" "),r("p",[r("strong",[t._v("404.html")])]),t._v(" "),r("div",{staticClass:"language-html extra-class"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[t._v('{% extends "layout.html" %}\n{% block title %}404 page{% endblock %}\n{% block body %}\nThis is 404 error page.\n{% endblock %}\n')])])]),r("p",[t._v("如此一來404畫面就可以順利出現，來犯個錯吧！")]),t._v(" "),r("p",[r("img",{attrs:{src:a(228),alt:"image-20190929024958223"}})]),t._v(" "),r("h2",{attrs:{id:"伺服器設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#伺服器設定"}},[t._v("#")]),t._v(" 伺服器設定")]),t._v(" "),r("p",[t._v("若你要將網頁掛在伺服器上，以下有幾個常見的伺服器設定方式可以做參考：")]),t._v(" "),r("h3",{attrs:{id:"apache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),r("p",[t._v("若Apache伺服器有開放"),r("code",[t._v(".htaccess")]),t._v("功能，可以在"),r("code",[t._v("assets")]),t._v("資料夾裡加入"),r("code",[t._v(".htaccess")]),t._v("並輸入下列文字，讓伺服器找到404.html位置。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("ErrorDocument 404 /404.html\n")])])]),r("h3",{attrs:{id:"nginx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" nginx")]),t._v(" "),r("p",[t._v("在nginx config 檔案中，server項目裡加上：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("error_page 404 /404.html;\n")])])]),r("h3",{attrs:{id:"lighttpd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lighttpd"}},[t._v("#")]),t._v(" Lighttpd")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('server.error-handler-404 = "/404.html"\n')])])]),r("h1",{attrs:{id:"團隊系列文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#團隊系列文"}},[t._v("#")]),t._v(" 團隊系列文")]),t._v(" "),r("p",[t._v("CSScoke - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112550/ironman/2623",target:"_blank",rel:"noopener noreferrer"}},[t._v("金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎"),r("OutboundLink")],1),t._v("\nKing Tzeng - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20103130/ironman/2125",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT沒那麼難！新手用JavaScript入門做自己的玩具～"),r("OutboundLink")],1),t._v("\nHina Hina - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120000/ironman/2256",target:"_blank",rel:"noopener noreferrer"}},[t._v("陣列大亂鬥"),r("OutboundLink")],1),t._v("\n阿斬 - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120536/ironman/2571",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 程式交易 30 天新手入門"),r("OutboundLink")],1),t._v("\nClarence - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20117701/ironman/2634",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE bot 好好玩 30 天玩轉 LINE API"),r("OutboundLink")],1),t._v("\n塔塔默 - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112552/ironman/2735",target:"_blank",rel:"noopener noreferrer"}},[t._v("用Python開發的網頁不能放到Github上？Lektor說可以！！"),r("OutboundLink")],1),t._v("\nVita Ora - "),r("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112656/ironman/2782",target:"_blank",rel:"noopener noreferrer"}},[t._v("好 Js 不學嗎 !? JavaScript 入門中的入門。"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);