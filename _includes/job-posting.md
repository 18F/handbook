<!-- prettier-ignore-start -->

{% assign conditions = "" | split: "|" %}
{% if post['max applications'] and post['max applications'] > 0 %}
  {% capture content %}
    until {{ post['max applications'] }} applications have been received
  {% endcapture %}
  {% assign content = content | trim %}
  {% assign conditions = conditions | push: content %}
{% endif %}
{% if post['closes when filled'] %}
  {% capture content %}
    until all selections have been made
  {% endcapture %}
  {% assign content = content | trim %}
  {% assign conditions = conditions | push: content %}
{% endif %}

{%- if post.link -%}
  [{{ post.role }}]({{ post.link }})
{%- else -%}
  {{ post.role }}
{%- endif %} - Open {{ post.opens | fullDate }} through {{ post.closes | fullDate }}
{%- if conditions.size > 0 -%}
  {%- for condition in conditions -%}
    {% if condition.size > 1 %}, {% endif %}{% if forloop.last %} or {% endif %}{{ condition }}
  {%- endfor -%}
{%- endif -%}


<!-- prettier-ignore-end -->
