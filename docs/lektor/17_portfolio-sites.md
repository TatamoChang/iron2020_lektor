# 網頁創世紀，一篇說完Lektor網頁建置！

**projects.ini**

```ini
[model]
name = Projects
label = Projects
hidden = yes
protected = yes

[children]
model = project
order_by = -date, name
```

**project.ini**
```ini
[model]
name = Project
label = {{ this.name }}
hidden = yes

[attachments]
order_by = _id

[fields.name]
label = Name
type = string
size = large

[fields.date]
label = Date
type = date
size = 1/4

[fields.type]
label = Project type
type = string
size = 1/4

[fields.website]
label = Website
type = url
size = 1/2

[fields.description]
label = Description
type = markdown
```

## Templates

**projects.html**

```html
{% extends "layout.html" %}
{% block title %}Projects{% endblock %}
{% block body %}
  <h1>Projects</h1>
  <div class="projects">
  {% for project in this.children %}
    <div class="project">
      {% set image = project.attachments.images.first() %}
      {% if image %}
        <img src="{{ image.thumbnail(320)|url }}" alt="">
      {% endif %}
      <h2><a href="{{ project|url }}">{{ project.name }}</a>
        <em>({{ project.date.year }})</em></h2>
      <p><strong>{{ project.type }}</strong></p>
    </div>
  {% endfor %}
  </div>
{% endblock %}
```

**project.html**

```html
{% extends "layout.html" %}
{% block title %}{{ this.name }} ({{ this.date.year }}){% endblock %}
{% block body %}
  <h1>{{ this.name }}</h1>
  <dl>
    <dt>Date
    <dd>{{ this.date|dateformat }}
    {% if this.website %}
    <dt>Website
    <dd><a href="{{ this.website }}">{{ this.website.host }}</a>
    {% endif %}
    <dt>Project type
    <dd>{{ this.type }}
  </dl>
  <h2>Description</h2>
  <div class="description">{{ this.description }}</div>
  {% set images = this.attachments.images.all() %}
  {% if images %}
    <h2>Images</h2>
    {% for image in images %}
      <div class="image">
        <img src="{{ image.thumbnail(640)|url }}" alt="">
        {% if image.exif %}
        <p class=meta>
          {{ image.exif.camera }}
          {% if image.exif.created_at %}
            ({{ image.exif.created_at|dateformat }})
          {% endif %}
        {% endif %}
      </div>
    {% endfor %}
  {% endif %}
{% endblock %}
```

# 團隊系列文

CSScoke - [金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2623)
King Tzeng - [IoT沒那麼難！新手用JavaScript入門做自己的玩具～](https://ithelp.ithome.com.tw/users/20103130/ironman/2125)
Hina Hina - [陣列大亂鬥](https://ithelp.ithome.com.tw/users/20120000/ironman/2256) 
阿斬 - [Python 程式交易 30 天新手入門](https://ithelp.ithome.com.tw/users/20120536/ironman/2571)
Clarence - [LINE bot 好好玩 30 天玩轉 LINE API](https://ithelp.ithome.com.tw/users/20117701/ironman/2634)
塔塔默 - [用Python開發的網頁不能放到Github上？Lektor說可以！！](https://ithelp.ithome.com.tw/users/20112552/ironman/2735)
Vita Ora - [好 Js 不學嗎 !? JavaScript 入門中的入門。](https://ithelp.ithome.com.tw/users/20112656/ironman/2782)

