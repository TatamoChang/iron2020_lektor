# Model架構說明

在lektor中，model扮演著很重要的角色(當然content及template也是)。接下來會以`models/page.ini`檔案作為範例，說明model的各項特性：

```ini
[model]
name = Page
label = {{ this.title }}

[fields.title]
label = Title
type = string
size = large

[fields.body]
label = Body
type = markdown
```

==當lektor專案資料夾中，models裡有`page.ini`，會發生甚麼事？==

model項目中，設定了name及label。label設定為`this.title`，其title為其設定的欄位，因此每一個page顯示的label會依其title欄位的內容而定。

## models

在`[model]`下可設定以下資訊：

- name：model名稱，通常跟檔名相同。
- label：設定於template中使用的表達式。
- hidden：選擇是否於新增頁面中隱藏，選是的話，新增頁面無法指定此model。主要應用於特定的頁面中，像是blog或是project等等。
- protected：選擇是否被保護，選是，以此model生成的頁面無法在編輯模式中刪除。
- inherits：這邊可以選擇要繼承的model名稱 ，繼承後會擁有所有該model的設定與欄位。

## fields

model中可設定各種不同類型的欄位，每個欄位裡可以設定該欄位的資訊，欄位設定為`[fields.name]`：

- label：該欄位的標籤名稱。
- description：非必要資訊，可放置更詳細資訊，顯示於編輯模式中。
- addon_label：算是label的附屬標籤資訊，顯示在填入欄位的右邊，讓填寫的使用者可以更了解此欄位的狀態，如單位等。
- width：設定在編輯模式中的欄位大小，如1/4，1/2等。
- size：顯示在編輯模式上的大小，分為`normal`, `small`, `large`。
- type：欄位的類型，可參考[field types](https://www.getlektor.com/docs/api/db/types/)。

## attachments

在model設定中，可額外設定附件，只要在model.ini中加入`[attachments]`即可，以下為attachments底下的設定資訊：

- enabled：若設定`no`，則此頁面將不會有附件，就算原本的資料夾中有檔案，也不會顯示在編輯模式中。
- model：可設定所有附件套用的model。
- order_by：設定排列方式。
- hidden：預設為false。

## children

若有設定子頁面，可在model中設定`[children]`。相關設定可參考[Children & Pagination](https://www.getlektor.com/docs/models/children/)

## model擇定方式

lektor中會設定許多model, template, content，並且互相都有關聯。有時候單一model會對到不同的content，為了避免系統出現混淆，lektor定下了model擇定的步驟。

1. 如果model已經被其它model指定為子層，那就會以此設定執行，包含頁面設定等等。
2. content資料夾與model名稱一樣，該content將以此model設定去運作。
3. 如果都沒有找到對應的model，會使用page.ini。
4. 如果連page.ini都沒有，那就會以none為設定，就像在contents.lr中設定`_model: none`。

## 實際操作

來實際操作一下！

首先我在`page.ini`中調整內容：

```ini
[model]
name = Page
label = {{ this.title }}

[fields.title]
label = 標題
description = 請輸入標題名稱
width = 1/2
type = string

[fields.loading]
label = 進度
description = 請輸入項目進度
addon_label = %
width = 1/2

[fields.body]
label = Body
type = markdown
```



依照以上的內容，標題跟進度會在同一列，各分一半的欄位空間，並且都有描述資訊，告知使用者要怎麼填。而進度的部分，右邊有設定`%`讓填寫的人知道使用單位，以下是運行的顯示成果畫面。

![1570431533203](../assets/1570431533203.png)

# 團隊系列文

CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)