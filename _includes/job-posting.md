{% if post.link %}[{{ post.role
}}]({{ post.link }}){% else %}{{ post.role }}{% endif %} - Open
{{ post.opens | fullDate }} through
{{ post.closes | fullDate }}{% if post['closes when filled'] %} or until all
selections have been made{% endif %}
