# 這扇門關了，馬上幫你開另一扇窗

在Lektor中設定自動導向非常地簡單！一樣從`model `、`template`、`content`依序下手：

## Model

**models/redirect.ini**

在redirect的model中建立`target`這個字串欄位，指定路徑進行導向。

```ini
[model]
name = Redirect

[fields.target]
label = Redirect Target
type = string
description = Target is of type 'string' to allow relative paths. Converted to url in the template.
```

## Template

template很簡單，一句話：

**templates/redirect.html**

```html
<meta http-equiv="refresh" content="0; URL='{{ this.target|url }}'" />
```

## Contents

**content/page-to-redirect/contents.lr**

在你要進行重新導向的網頁路徑中，修改contents內容，指定model為redirect，讓lektor知道這個網頁需要重新導向。

```ini
_model: redirect
---
target: /new/path
---
_discoverable: no
```

