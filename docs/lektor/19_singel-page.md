# 我不轉彎唱上癮？Lektor可以讓網頁不轉彎！

「我不轉彎我不我不轉彎我不我不轉彎...」來自盛夏光年的歌詞，有時候網站不希望一直點來點去，讓畫面轉來轉去，是否可以不要網頁轉彎呢？Lektor只說一句：「當然。」，話語中的霸氣不言而喻。

Lektor有一個功能叫做`single-page`，可以將網頁以一頁式的方式看到底。你可能會想那有甚麼，寫網頁直接寫到底就可以啦~我只能說NO NO NO，沒有這麼簡單，文章還是一篇一篇新增，但全部會集中到一頁捲動顯示，寫到這邊我突然想到，`Facebook`就是這樣！以下就來說明設定的步驟吧！

## Models

起手式都是先從model開始，將網頁的架構先建立起來，然後才是template，最後是content。

要建立single-page，需要建立3個model：

1. `index.ini`：管理整個single-page的model。
2. `doc-pages.ini`：官網說這是假的model，主要是將底下的所有頁面都藏起來。
3. `doc-page.ini`：每篇文章的架構model。

**index.ini**

```ini
[model]
name = Documentation
label = {{ this.title }}
hidden = yes
protected = yes

[fields.title]
type = string
```

**doc-pages.ini**

```ini
[model]
name = Documentation Pages
label = Documentation Pages
hidden = yes
protected = yes

[children]
model = doc-page
order_by = _id
```

**doc-page.ini**

```ini
[model]
name = Documentation Page
label = {{ this.title }}
hidden = yes

[fields.title]
type = string

[fields.body]
type = markdown
```

## Template

在template設定，只要設定`index.html`即可(廢話，不然怎麼叫`single-page`)

**templates/index.html**

```html
{% extends "layout.html" %}
{% block title %}{{ this.title }}{% endblock %}
{% block body %}
  {% set pages = site.query('/doc').include_undiscoverable(true).all() %}
  <header>
    <h1>{{ this.title }}</h1>
    <nav>
      <ul>
        {% for page in pages %}
        <li><a href="#{{ page._id }}">{{ page.title }}</a></li>
        {% endfor %}
      </ul>
    </nav>
  </header>
  {% for page in pages %}
    <div class="section" id="{{ page._id }}">
      <h1>{{ page.title }}</h1>
      {{ page.body }}
    </div>
  {% endfor %}
{% endblock %}
```

# content

接下來設定`contents`，包含主頁及指定`doc-pages.ini`的頁面。主頁的contents.lr就在contents目錄下，`doc-pages.ini`管理的頁面我們將他設定在`doc`資料夾中，對應template中參照的路徑`set pages = site.query('/doc').include_undiscoverable(true).all()`，兩個檔案都指定對應的model。

**contents.lr**

```ini
_model: index
---
title: My Documentation
```

**doc/contents.lr**

```ini
_model: doc-pages
---
_hidden: yes
```

