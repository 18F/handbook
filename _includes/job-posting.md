<!-- prettier-ignore-start -->

{% if post.url %}
[{{ post.title }}]({{ post.url }})
{%- else -%}
{{ post.title }}
{%- endif -%}&nbsp;- {{ post.text }}

<!-- prettier-ignore-end -->
