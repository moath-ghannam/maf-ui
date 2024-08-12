---
meta:
  title: Menu Item
  description: Menu items provide options for the user to pick from in a menu.
layout: component
---

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item>Option 1</mf-menu-item>
  <mf-menu-item>Option 2</mf-menu-item>
  <mf-menu-item>Option 3</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-item type="checkbox" checked>Checkbox</mf-menu-item>
  <mf-menu-item disabled>Disabled</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-item>
    Prefix Icon
    <mf-icon slot="prefix" name="gift"></mf-icon>
  </mf-menu-item>
  <mf-menu-item>
    Suffix Icon
    <mf-icon slot="suffix" name="heart"></mf-icon>
  </mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem>Option 1</MfMenuItem>
    <MfMenuItem>Option 2</MfMenuItem>
    <MfMenuItem>Option 3</MfMenuItem>
    <MfDivider />
    <MfMenuItem type="checkbox" checked>
      Checkbox
    </MfMenuItem>
    <MfMenuItem disabled>Disabled</MfMenuItem>
    <MfDivider />
    <MfMenuItem>
      Prefix Icon
      <MfIcon slot="prefix" name="gift" />
    </MfMenuItem>
    <MfMenuItem>
      Suffix Icon
      <MfIcon slot="suffix" name="heart" />
    </MfMenuItem>
  </MfMenu>
);
```

{% endraw %}

## Examples

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item>
    <mf-icon slot="prefix" name="house"></mf-icon>
    Home
  </mf-menu-item>

  <mf-menu-item>
    <mf-icon slot="prefix" name="envelope"></mf-icon>
    Messages
    <mf-badge slot="suffix" variant="primary" pill>12</mf-badge>
  </mf-menu-item>

  <mf-divider></mf-divider>

  <mf-menu-item>
    <mf-icon slot="prefix" name="gear"></mf-icon>
    Settings
  </mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfBadge from 'maf-ui-kit/dist/react/badge';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem>
      <MfIcon slot="prefix" name="house" />
      Home
    </MfMenuItem>

    <MfMenuItem>
      <MfIcon slot="prefix" name="envelope" />
      Messages
      <MfBadge slot="suffix" variant="primary" pill>
        12
      </MfBadge>
    </MfMenuItem>

    <MfDivider />

    <MfMenuItem>
      <MfIcon slot="prefix" name="gear" />
      Settings
    </MfMenuItem>
  </MfMenu>
);
```

{% endraw %}

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item>Option 1</mf-menu-item>
  <mf-menu-item disabled>Option 2</mf-menu-item>
  <mf-menu-item>Option 3</mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem>Option 1</MfMenuItem>
    <MfMenuItem disabled>Option 2</MfMenuItem>
    <MfMenuItem>Option 3</MfMenuItem>
  </MfMenu>
);
```

{% endraw %}

### Loading

Use the `loading` attribute to indicate that a menu item is busy. Like a disabled menu item, clicks will be suppressed until the loading state is removed.

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item>Option 1</mf-menu-item>
  <mf-menu-item loading>Option 2</mf-menu-item>
  <mf-menu-item>Option 3</mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem>Option 1</MfMenuItem>
    <MfMenuItem loading>Option 2</MfMenuItem>
    <MfMenuItem>Option 3</MfMenuItem>
  </MfMenu>
);
```

{% endraw %}

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item type="checkbox">Autosave</mf-menu-item>
  <mf-menu-item type="checkbox" checked>Check Spelling</mf-menu-item>
  <mf-menu-item type="checkbox">Word Wrap</mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem type="checkbox">Autosave</MfMenuItem>
    <MfMenuItem type="checkbox" checked>
      Check Spelling
    </MfMenuItem>
    <MfMenuItem type="checkbox">Word Wrap</MfMenuItem>
  </MfMenu>
);
```

{% endraw %}

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `mf-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html:preview
<mf-menu class="menu-value" style="max-width: 200px;">
  <mf-menu-item value="opt-1">Option 1</mf-menu-item>
  <mf-menu-item value="opt-2">Option 2</mf-menu-item>
  <mf-menu-item value="opt-3">Option 3</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-item type="checkbox" value="opt-4">Checkbox 4</mf-menu-item>
  <mf-menu-item type="checkbox" value="opt-5">Checkbox 5</mf-menu-item>
  <mf-menu-item type="checkbox" value="opt-6">Checkbox 6</mf-menu-item>
</mf-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('mf-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

{% raw %}

```jsx:react
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <MfMenu style={{ maxWidth: '200px' }} onMfSelect={handleSelect}>
      <MfMenuItem value="opt-1">Option 1</MfMenuItem>
      <MfMenuItem value="opt-2">Option 2</MfMenuItem>
      <MfMenuItem value="opt-3">Option 3</MfMenuItem>
    </MfMenu>
  );
};
```

{% endraw %}
