(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{244:function(t,s,a){t.exports=a.p+"assets/img/image-20191006163057657.9464b4d8.png"},245:function(t,s,a){t.exports=a.p+"assets/img/image-20191006163150139.bd756c30.png"},246:function(t,s,a){t.exports=a.p+"assets/img/image-20191007010917667.f24214ec.png"},247:function(t,s,a){t.exports=a.p+"assets/img/image-20191007012151308.dd3aa968.png"},305:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"裝上強力的武器，lektor外掛介紹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#裝上強力的武器，lektor外掛介紹","aria-hidden":"true"}},[t._v("#")]),t._v(" 裝上強力的武器，Lektor外掛介紹")]),t._v(" "),n("p",[t._v("在前面的文章中有提到兩個外掛："),n("code",[t._v("disqus")]),t._v("及"),n("code",[t._v("webpack")]),t._v("。本篇文章將說明如何安裝、讀取、以及基本外掛使用。")]),t._v(" "),n("h2",{attrs:{id:"安裝外掛"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝外掛","aria-hidden":"true"}},[t._v("#")]),t._v(" 安裝外掛")]),t._v(" "),n("p",[t._v("安裝方式有兩種，第一個是直接在"),n("code",[t._v(".lektorproject")]),t._v("中輸入外的名稱及版本：")]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[packages]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("lektor-disqus-comments")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0.4.1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("lektor-webpack-support")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" 0.5")]),t._v("\n")])])]),n("p",[t._v("另一種則是透過指令新增，最終也會在"),n("code",[t._v(".lektorproject")]),t._v("的檔案中加入外掛。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ lektor plugin add lektor-disqus-comments\n")])])]),n("h2",{attrs:{id:"讀取外掛"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#讀取外掛","aria-hidden":"true"}},[t._v("#")]),t._v(" 讀取外掛")]),t._v(" "),n("p",[t._v("若是有在"),n("code",[t._v(".lektorproject")]),t._v("輸入名稱，Lektor就會讀取外掛，但如果是正在開發中的外掛，可以在專案中建立"),n("code",[t._v("package")]),t._v("資料夾，並在資料夾中建立放入外掛，1個外掛1個資料夾。")]),t._v(" "),n("h2",{attrs:{id:"開發外掛"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#開發外掛","aria-hidden":"true"}},[t._v("#")]),t._v(" 開發外掛")]),t._v(" "),n("p",[t._v("在開發前需要先設定"),n("code",[t._v("LEKTOR_DEV=1")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ export LEKTOR_DEV=1\n$ lektor server\n")])])]),n("h2",{attrs:{id:"建立package"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建立package","aria-hidden":"true"}},[t._v("#")]),t._v(" 建立package")]),t._v(" "),n("p",[t._v("如同前面說明，在"),n("code",[t._v("package")]),t._v("資料夾中建立外掛的資料夾，即可開始進行開發。Lektor也有提供指令，幫你建立外掛資料夾，通常命名為"),n("code",[t._v("lektor-xxxx")]),t._v("。像是前面提到的disqus，其外掛名稱為"),n("code",[t._v("lektor-disqus-comments")]),t._v("。以下用"),n("code",[t._v("lektor-hello-world")]),t._v("為例介紹外掛開發流程，首先執行指令，或是在"),n("code",[t._v("package")]),t._v("資料夾中建立"),n("code",[t._v("lektor-hello-world")]),t._v("資料夾：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ lektor dev new-plugin\n")])])]),n("p",[t._v("執行上述命令後，lektor會問你一些問題，並根據的你回答建立外掛資料夾：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(244),alt:"image-20191006163057657"}})]),t._v(" "),n("p",[t._v("以下是剛建立的外掛資料夾架構")]),t._v(" "),n("p",[n("img",{attrs:{src:a(245),alt:"image-20191006163150139"}})]),t._v(" "),n("p",[t._v("裡面包含README.md，setup.py，及lektor_hello_world.py檔案，並幫你建立.gitignore，避免之後要push時不小心也把執行過程的檔案也上傳上去，真的是非常貼心呢！")]),t._v(" "),n("h3",{attrs:{id:"setup-py"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-py","aria-hidden":"true"}},[t._v("#")]),t._v(" setup.py")]),t._v(" "),n("p",[t._v("看一下自動建立的setup.py長什麼樣子：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ast\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" setuptools "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" find_packages\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'README.md'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    readme "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n_description_re "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'description\\s+=\\s+(?P<description>.*)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lektor_hello_world.py'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    description "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("literal_eval"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_description_re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsetup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    author"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Chih-Chieh Chang'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    author_email"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'haninfinity530@gmail.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    description"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    keywords"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lektor plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    license"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MIT'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    long_description"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("readme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    long_description_content_type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/markdown'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lektor-hello-world'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    packages"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("find_packages"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    py_modules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lektor_hello_world'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# url='[link to your repository]',")]),t._v("\n    version"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    classifiers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Framework :: Lektor'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Environment :: Plugins'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry_points"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lektor.plugins'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello-world = lektor_hello_world:HelloWorldPlugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("setup.py提供lektor這個外掛要執行的資訊，讓lektor知道要怎麼樣執行這個外掛。再來看自動建立的"),n("code",[t._v("lektor_hello_world.py")]),t._v("裡面長什麼樣子吧！")]),t._v(" "),n("h3",{attrs:{id:"lektor-hello-world-py"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lektor-hello-world-py","aria-hidden":"true"}},[t._v("#")]),t._v(" lektor_hello_world.py")]),t._v(" "),n("p",[t._v("這個文件為外掛的執行程式，外掛的開發程式就是寫在這裡面：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: utf-8 -*-")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lektor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pluginsystem "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Plugin\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lektor-hello-world'")]),t._v("\n    description "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("u'Add your description here.'")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_process_template_context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("extra"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Value from plugin %s'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n        context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test_function'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" test_function\n")])])]),n("p",[t._v("此時執行"),n("code",[t._v("lektor serve")]),t._v("就會看到命令列在幫你安裝外掛，你也可以用"),n("code",[t._v("lektor plugins list")]),t._v("檢視目前已經安裝的外掛資訊：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(246),alt:"image-20191007010917667"}})]),t._v(" "),n("h2",{attrs:{id:"事件監聽"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件監聽","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件監聽")]),t._v(" "),n("p",[t._v("lektor中的外掛執行方式以事件監聽為主，在外掛中設定的事件觸發時，啟動外掛並執行動作。例如上面建立的外掛，有設定"),n("code",[t._v("test_function()")]),t._v("，其動作會回傳一個字串："),n("code",[t._v("'Value from plugin %s' % self.name")]),t._v("，轉換後就是"),n("code",[t._v("Value from plugin lektor-hello-world")]),t._v("。所以當我在網頁的template中加入"),n("code",[t._v("test_function()")]),t._v("，就會在我要的位置收到回傳的資訊。如下，我在layout.html中加入，位置放在page的div區塊中，並在block上方，因此預期"),n("code",[t._v("Value from plugin lektor-hello-world")]),t._v("這一串文字會出現在所有頁面的內容上方的位置。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!doctype html>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ '/static/style.css'|url }}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{% block title %}Welcome{% endblock %} — LektorTest"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("LektorTest"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ test_function() }}\n    {% block body %}{% endblock %}\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token entity",title:"&copy;"}},[t._v("&copy;")]),t._v(" Copyright 2019 by Chih-Chieh Chang.\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(247),alt:"image-20191007012151308"}})]),t._v(" "),n("p",[t._v("成功了！！！")]),t._v(" "),n("h2",{attrs:{id:"外掛還能幹嘛？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外掛還能幹嘛？","aria-hidden":"true"}},[t._v("#")]),t._v(" 外掛還能幹嘛？")]),t._v(" "),n("p",[t._v("lektor中已經建置了一些常用的API，提供外掛開發使用，相關資訊可參考"),n("a",{attrs:{href:"https://www.getlektor.com/docs/api/plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("這裡"),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"團隊系列文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#團隊系列文","aria-hidden":"true"}},[t._v("#")]),t._v(" 團隊系列文")]),t._v(" "),n("p",[t._v("CSScoke - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112550/ironman/2623",target:"_blank",rel:"noopener noreferrer"}},[t._v("金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎"),n("OutboundLink")],1),t._v("\nKing Tzeng - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20103130/ironman/2125",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT沒那麼難！新手用JavaScript入門做自己的玩具～"),n("OutboundLink")],1),t._v("\nHina Hina - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120000/ironman/2256",target:"_blank",rel:"noopener noreferrer"}},[t._v("陣列大亂鬥"),n("OutboundLink")],1),t._v("\n阿斬 - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20120536/ironman/2571",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 程式交易 30 天新手入門"),n("OutboundLink")],1),t._v("\nClarence - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20117701/ironman/2634",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE bot 好好玩 30 天玩轉 LINE API"),n("OutboundLink")],1),t._v("\n塔塔默 - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112552/ironman/2735",target:"_blank",rel:"noopener noreferrer"}},[t._v("用Python開發的網頁不能放到Github上？Lektor說可以！！"),n("OutboundLink")],1),t._v("\nVita Ora - "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/users/20112656/ironman/2782",target:"_blank",rel:"noopener noreferrer"}},[t._v("好 Js 不學嗎 !? JavaScript 入門中的入門。"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);