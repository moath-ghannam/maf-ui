---
meta:
  title: Menu Label
  description: Menu labels are used to describe a group of menu items.
layout: component
---

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-label>Fruits</mf-menu-label>
  <mf-menu-item value="apple">Apple</mf-menu-item>
  <mf-menu-item value="banana">Banana</mf-menu-item>
  <mf-menu-item value="orange">Orange</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-label>Vegetables</mf-menu-label>
  <mf-menu-item value="broccoli">Broccoli</mf-menu-item>
  <mf-menu-item value="carrot">Carrot</mf-menu-item>
  <mf-menu-item value="zucchini">Zucchini</mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuLabel from 'maf-ui-kit/dist/react/menu-label';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuLabel>Fruits</MfMenuLabel>
    <MfMenuItem value="apple">Apple</MfMenuItem>
    <MfMenuItem value="banana">Banana</MfMenuItem>
    <MfMenuItem value="orange">Orange</MfMenuItem>
    <MfDivider />
    <MfMenuLabel>Vegetables</MfMenuLabel>
    <MfMenuItem value="broccoli">Broccoli</MfMenuItem>
    <MfMenuItem value="carrot">Carrot</MfMenuItem>
    <MfMenuItem value="zucchini">Zucchini</MfMenuItem>
  </MfMenu>
);
```

{% endraw %}
