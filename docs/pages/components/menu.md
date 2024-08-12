---
meta:
  title: Menu
  description: Menus provide a list of options for the user to choose from.
layout: component
---

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item value="undo">Undo</mf-menu-item>
  <mf-menu-item value="redo">Redo</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-item value="cut">Cut</mf-menu-item>
  <mf-menu-item value="copy">Copy</mf-menu-item>
  <mf-menu-item value="paste">Paste</mf-menu-item>
  <mf-menu-item value="delete">Delete</mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem value="undo">Undo</MfMenuItem>
    <MfMenuItem value="redo">Redo</MfMenuItem>
    <MfDivider />
    <MfMenuItem value="cut">Cut</MfMenuItem>
    <MfMenuItem value="copy">Copy</MfMenuItem>
    <MfMenuItem value="paste">Paste</MfMenuItem>
    <MfMenuItem value="delete">Delete</MfMenuItem>
  </MfMenu>
);
```

{% endraw %}

:::tip
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.
:::

## Examples

### In Dropdowns

Menus work really well when used inside [dropdowns](/components/dropdown).

```html:preview
<mf-dropdown>
  <mf-button slot="trigger" caret>Edit</mf-button>
  <mf-menu>
    <mf-menu-item value="cut">Cut</mf-menu-item>
    <mf-menu-item value="copy">Copy</mf-menu-item>
    <mf-menu-item value="paste">Paste</mf-menu-item>
  </mf-menu>
</mf-dropdown>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfDropdown>
    <MfButton slot="trigger" caret>Edit</MfButton>
    <MfMenu>
      <MfMenuItem value="cut">Cut</MfMenuItem>
      <MfMenuItem value="copy">Copy</MfMenuItem>
      <MfMenuItem value="paste">Paste</MfMenuItem>
    </MfMenu>
  </MfDropdown>
);
```

### Submenus

To create a submenu, nest an `<mf-menu slot="submenu">` in any [menu item](/components/menu-item).

```html:preview
<mf-menu style="max-width: 200px;">
  <mf-menu-item value="undo">Undo</mf-menu-item>
  <mf-menu-item value="redo">Redo</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-item value="cut">Cut</mf-menu-item>
  <mf-menu-item value="copy">Copy</mf-menu-item>
  <mf-menu-item value="paste">Paste</mf-menu-item>
  <mf-divider></mf-divider>
  <mf-menu-item>
    Find
    <mf-menu slot="submenu">
      <mf-menu-item value="find">Find…</mf-menu-item>
      <mf-menu-item value="find-previous">Find Next</mf-menu-item>
      <mf-menu-item value="find-next">Find Previous</mf-menu-item>
    </mf-menu>
  </mf-menu-item>
  <mf-menu-item>
    Transformations
    <mf-menu slot="submenu">
      <mf-menu-item value="uppercase">Make uppercase</mf-menu-item>
      <mf-menu-item value="lowercase">Make lowercase</mf-menu-item>
      <mf-menu-item value="capitalize">Capitalize</mf-menu-item>
    </mf-menu>
  </mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfMenu style={{ maxWidth: '200px' }}>
    <MfMenuItem value="undo">Undo</MfMenuItem>
    <MfMenuItem value="redo">Redo</MfMenuItem>
    <MfDivider />
    <MfMenuItem value="cut">Cut</MfMenuItem>
    <MfMenuItem value="copy">Copy</MfMenuItem>
    <MfMenuItem value="paste">Paste</MfMenuItem>
    <MfDivider />
    <MfMenuItem>
      Find
      <MfMenu slot="submenu">
        <MfMenuItem value="find">Find…</MfMenuItem>
        <MfMenuItem value="find-previous">Find Next</MfMenuItem>
        <MfMenuItem value="find-next">Find Previous</MfMenuItem>
      </MfMenu>
    </MfMenuItem>
    <MfMenuItem>
      Transformations
      <MfMenu slot="submenu">
        <MfMenuItem value="uppercase">Make uppercase</MfMenuItem>
        <MfMenuItem value="lowercase">Make lowercase</MfMenuItem>
        <MfMenuItem value="capitalize">Capitalize</MfMenuItem>
      </MfMenu>
    </MfMenuItem>
  </MfMenu>
);
```

:::warning
As a UX best practice, avoid using more than one level of submenus when possible.
:::

{% endraw %}
