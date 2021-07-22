---
# This file is present to allow the "Last modified on" feature to build properly. TODO find a better way.
---

{%- if site.anchor_js_targets -%}
  {%- assign _anchor_js_targets = site.anchor_js_targets -%}
  {%- assign _prepended_targets = '' | split: '' -%}
  {%- for _target in _anchor_js_targets -%}
    {%- assign _prepended_target = _target | prepend: '.usa-layout-docs ' -%}
    {%- assign _prepended_targets = _prepended_targets | push: _prepended_target -%}
  {%- endfor -%}
// Adding anchor links to headers on docs layouts only
anchors.add('{{ _prepended_targets | join: ', ' }}');
{%- endif -%}
