---
meta:
  title: Dropdown
  description: 'Dropdowns expose additional content that "drops down" in a panel.'
layout: component
---

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker)). The API gives you complete control over showing, hiding, and positioning the panel.

```html:preview
<mf-dropdown>
  <mf-button slot="trigger" caret>Dropdown</mf-button>
  <mf-menu>
    <mf-menu-item>Dropdown Item 1</mf-menu-item>
    <mf-menu-item>Dropdown Item 2</mf-menu-item>
    <mf-menu-item>Dropdown Item 3</mf-menu-item>
    <mf-divider></mf-divider>
    <mf-menu-item type="checkbox" checked>Checkbox</mf-menu-item>
    <mf-menu-item disabled>Disabled</mf-menu-item>
    <mf-divider></mf-divider>
    <mf-menu-item>
      Prefix
      <mf-icon slot="prefix" name="gift"></mf-icon>
    </mf-menu-item>
    <mf-menu-item>
      Suffix Icon
      <mf-icon slot="suffix" name="heart"></mf-icon>
    </mf-menu-item>
  </mf-menu>
</mf-dropdown>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfDropdown>
    <MfButton slot="trigger" caret>
      Dropdown
    </MfButton>
    <MfMenu>
      <MfMenuItem>Dropdown Item 1</MfMenuItem>
      <MfMenuItem>Dropdown Item 2</MfMenuItem>
      <MfMenuItem>Dropdown Item 3</MfMenuItem>
      <MfDivider />
      <MfMenuItem type="checkbox" checked>
        Checkbox
      </MfMenuItem>
      <MfMenuItem disabled>Disabled</MfMenuItem>
      <MfDivider />
      <MfMenuItem>
        Prefix
        <MfIcon slot="prefix" name="gift" />
      </MfMenuItem>
      <MfMenuItem>
        Suffix Icon
        <MfIcon slot="suffix" name="heart" />
      </MfMenuItem>
    </MfMenu>
  </MfDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`mf-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html:preview
<div class="dropdown-selection">
  <mf-dropdown>
    <mf-button slot="trigger" caret>Edit</mf-button>
    <mf-menu>
      <mf-menu-item value="cut">Cut</mf-menu-item>
      <mf-menu-item value="copy">Copy</mf-menu-item>
      <mf-menu-item value="paste">Paste</mf-menu-item>
    </mf-menu>
  </mf-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('mf-dropdown');

  dropdown.addEventListener('mf-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <MfDropdown>
      <MfButton slot="trigger" caret>
        Edit
      </MfButton>
      <MfMenu onMfSelect={handleSelect}>
        <MfMenuItem value="cut">Cut</MfMenuItem>
        <MfMenuItem value="copy">Copy</MfMenuItem>
        <MfMenuItem value="paste">Paste</MfMenuItem>
      </MfMenu>
    </MfDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html:preview
<div class="dropdown-selection-alt">
  <mf-dropdown>
    <mf-button slot="trigger" caret>Edit</mf-button>
    <mf-menu>
      <mf-menu-item value="cut">Cut</mf-menu-item>
      <mf-menu-item value="copy">Copy</mf-menu-item>
      <mf-menu-item value="paste">Paste</mf-menu-item>
    </mf-menu>
  </mf-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('mf-menu-item[value="cut"]');
  const copy = container.querySelector('mf-menu-item[value="copy"]');
  const paste = container.querySelector('mf-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <MfDropdown>
      <MfButton slot="trigger" caret>
        Edit
      </MfButton>
      <MfMenu>
        <MfMenuItem onClick={handleCut}>Cut</MfMenuItem>
        <MfMenuItem onClick={handleCopy}>Copy</MfMenuItem>
        <MfMenuItem onClick={handlePaste}>Paste</MfMenuItem>
      </MfMenu>
    </MfDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html:preview
<mf-dropdown placement="top-start">
  <mf-button slot="trigger" caret>Edit</mf-button>
  <mf-menu>
    <mf-menu-item>Cut</mf-menu-item>
    <mf-menu-item>Copy</mf-menu-item>
    <mf-menu-item>Paste</mf-menu-item>
    <mf-divider></mf-divider>
    <mf-menu-item>Find</mf-menu-item>
    <mf-menu-item>Replace</mf-menu-item>
  </mf-menu>
</mf-dropdown>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfDropdown placement="top-start">
    <MfButton slot="trigger" caret>
      Edit
    </MfButton>
    <MfMenu>
      <MfMenuItem>Cut</MfMenuItem>
      <MfMenuItem>Copy</MfMenuItem>
      <MfMenuItem>Paste</MfMenuItem>
      <MfDivider />
      <MfMenuItem>Find</MfMenuItem>
      <MfMenuItem>Replace</MfMenuItem>
    </MfMenu>
  </MfDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html:preview
<mf-dropdown distance="30">
  <mf-button slot="trigger" caret>Edit</mf-button>
  <mf-menu>
    <mf-menu-item>Cut</mf-menu-item>
    <mf-menu-item>Copy</mf-menu-item>
    <mf-menu-item>Paste</mf-menu-item>
    <mf-divider></mf-divider>
    <mf-menu-item>Find</mf-menu-item>
    <mf-menu-item>Replace</mf-menu-item>
  </mf-menu>
</mf-dropdown>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfDropdown distance={30}>
    <MfButton slot="trigger" caret>
      Edit
    </MfButton>
    <MfMenu>
      <MfMenuItem>Cut</MfMenuItem>
      <MfMenuItem>Copy</MfMenuItem>
      <MfMenuItem>Paste</MfMenuItem>
      <MfDivider />
      <MfMenuItem>Find</MfMenuItem>
      <MfMenuItem>Replace</MfMenuItem>
    </MfMenu>
  </MfDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html:preview
<mf-dropdown skidding="30">
  <mf-button slot="trigger" caret>Edit</mf-button>
  <mf-menu>
    <mf-menu-item>Cut</mf-menu-item>
    <mf-menu-item>Copy</mf-menu-item>
    <mf-menu-item>Paste</mf-menu-item>
    <mf-divider></mf-divider>
    <mf-menu-item>Find</mf-menu-item>
    <mf-menu-item>Replace</mf-menu-item>
  </mf-menu>
</mf-dropdown>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfDropdown skidding={30}>
    <MfButton slot="trigger" caret>
      Edit
    </MfButton>
    <MfMenu>
      <MfMenuItem>Cut</MfMenuItem>
      <MfMenuItem>Copy</MfMenuItem>
      <MfMenuItem>Paste</MfMenuItem>
      <MfDivider />
      <MfMenuItem>Find</MfMenuItem>
      <MfMenuItem>Replace</MfMenuItem>
    </MfMenu>
  </MfDropdown>
);
```

### Submenus

To create a submenu, nest an `<mf-menu slot="submenu">` element in a [menu item](/components/menu-item).

```html:preview
<mf-dropdown>
  <mf-button slot="trigger" caret>Edit</mf-button>

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
</mf-dropdown>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--mf-panel-border-color);
    padding: var(--mf-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <MfDropdown>
      <MfButton slot="trigger" caret>Edit</MfButton>

      <MfMenu style="max-width: 200px;">
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
    </MfDropdown>
  </>
);
```

:::warning
As a UX best practice, avoid using more than one level of submenu when possible.
:::

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="dropdown-hoist">
  <mf-dropdown>
    <mf-button slot="trigger" caret>No Hoist</mf-button>
    <mf-menu>
      <mf-menu-item>Item 1</mf-menu-item>
      <mf-menu-item>Item 2</mf-menu-item>
      <mf-menu-item>Item 3</mf-menu-item>
    </mf-menu>
  </mf-dropdown>

  <mf-dropdown hoist>
    <mf-button slot="trigger" caret>Hoist</mf-button>
    <mf-menu>
      <mf-menu-item>Item 1</mf-menu-item>
      <mf-menu-item>Item 2</mf-menu-item>
      <mf-menu-item>Item 3</mf-menu-item>
    </mf-menu>
  </mf-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--mf-panel-border-color);
    padding: var(--mf-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfDivider from 'maf-ui-kit/dist/react/divider';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--mf-panel-border-color);
    padding: var(--mf-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <MfDropdown>
        <MfButton slot="trigger" caret>
          No Hoist
        </MfButton>
        <MfMenu>
          <MfMenuItem>Item 1</MfMenuItem>
          <MfMenuItem>Item 2</MfMenuItem>
          <MfMenuItem>Item 3</MfMenuItem>
        </MfMenu>
      </MfDropdown>

      <MfDropdown hoist>
        <MfButton slot="trigger" caret>
          Hoist
        </MfButton>
        <MfMenu>
          <MfMenuItem>Item 1</MfMenuItem>
          <MfMenuItem>Item 2</MfMenuItem>
          <MfMenuItem>Item 3</MfMenuItem>
        </MfMenu>
      </MfDropdown>
    </div>

    <style>{css}</style>
  </>
);
```
