---
meta:
  title: Divider
  description: Dividers are used to visually separate or group elements.
layout: component
---

```html:preview
<mf-divider></mf-divider>
```

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';

const App = () => <MfDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<mf-divider style="--width: 4px;"></mf-divider>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';

const App = () => <MfDivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<mf-divider style="--color: tomato;"></mf-divider>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';

const App = () => <MfDivider style={{ '--color': 'tomato' }} />;
```

{% endraw %}

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html:preview
<div style="text-align: center;">
  Above
  <mf-divider style="--spacing: 2rem;"></mf-divider>
  Below
</div>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';

const App = () => (
  <>
    Above
    <MfDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <mf-divider vertical></mf-divider>
  Middle
  <mf-divider vertical></mf-divider>
  Last
</div>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <MfDivider vertical />
    Middle
    <MfDivider vertical />
    Last
  </div>
);
```

{% endraw %}

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item value="1">Option 1</mf-menu-item>
  <mf-menu-item value="2">Option 2</mf-menu-item>
  <mf-menu-item value="3">Option 3</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-item value="4">Option 4</mf-menu-item>
  <mf-menu-item value="5">Option 5</mf-menu-item>
  <mf-menu-item value="6">Option 6</mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem value="1">Option 1</MfMenuItem>
    <MfMenuItem value="2">Option 2</MfMenuItem>
    <MfMenuItem value="3">Option 3</MfMenuItem>
    <mf-divider />
    <MfMenuItem value="4">Option 4</MfMenuItem>
    <MfMenuItem value="5">Option 5</MfMenuItem>
    <MfMenuItem value="6">Option 6</MfMenuItem>
  </MfMenu>
);
```

{% endraw %}
