# Pagination

```ini
[pagination]
enabled = yes
per_page = 10
```

`templates/file.html`

```jinja2
{% for child in this.pagination.items %}
  ...
{% endfor %}
```



`macros/pagination.html`

```jinja2
{% macro render_pagination(pagination) %}
  <div class="pagination">
    {% if pagination.has_prev %}
      <a href="{{ pagination.prev|url }}">&laquo; Previous</a>
    {% else %}
      <span class="disabled">&laquo; Previous</span>
    {% endif %}
    | <strong>{{ pagination.page }}</strong> |
    {% if pagination.has_next %}
      <a href="{{ pagination.next|url }}">Next &raquo;</a>
    {% else %}
      <span class="disabled">Next &raquo;</span>
    {% endif %}
  </div>
{% endmacro %}
```



## 使用macro

```jinja2
{% from "macros/pagination.html" import render_pagination %}
{% if this.pagination.pages > 1 %}
  {{ render_pagination(this.pagination) }}
{% endif %}
```

