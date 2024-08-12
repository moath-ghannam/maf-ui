---
meta:
  title: Button Group
  description: Button groups can be used to group related buttons into sections.
layout: component
---

```html:preview
<mf-button-group label="Alignment">
  <mf-button>Left</mf-button>
  <mf-button>Center</mf-button>
  <mf-button>Right</mf-button>
</mf-button-group>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';

const App = () => (
  <MfButtonGroup label="Alignment">
    <MfButton>Left</MfButton>
    <MfButton>Center</MfButton>
    <MfButton>Right</MfButton>
  </MfButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html:preview
<mf-button-group label="Alignment">
  <mf-button size="small">Left</mf-button>
  <mf-button size="small">Center</mf-button>
  <mf-button size="small">Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button size="medium">Left</mf-button>
  <mf-button size="medium">Center</mf-button>
  <mf-button size="medium">Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button size="large">Left</mf-button>
  <mf-button size="large">Center</mf-button>
  <mf-button size="large">Right</mf-button>
</mf-button-group>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';

const App = () => (
  <>
    <MfButtonGroup label="Alignment">
      <MfButton size="small">Left</MfButton>
      <MfButton size="small">Center</MfButton>
      <MfButton size="small">Right</MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton size="medium">Left</MfButton>
      <MfButton size="medium">Center</MfButton>
      <MfButton size="medium">Right</MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton size="large">Left</MfButton>
      <MfButton size="large">Center</MfButton>
      <MfButton size="large">Right</MfButton>
    </MfButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html:preview
<mf-button-group label="Alignment">
  <mf-button variant="primary">Left</mf-button>
  <mf-button variant="primary">Center</mf-button>
  <mf-button variant="primary">Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button variant="success">Left</mf-button>
  <mf-button variant="success">Center</mf-button>
  <mf-button variant="success">Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button variant="neutral">Left</mf-button>
  <mf-button variant="neutral">Center</mf-button>
  <mf-button variant="neutral">Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button variant="warning">Left</mf-button>
  <mf-button variant="warning">Center</mf-button>
  <mf-button variant="warning">Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button variant="danger">Left</mf-button>
  <mf-button variant="danger">Center</mf-button>
  <mf-button variant="danger">Right</mf-button>
</mf-button-group>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';

const App = () => (
  <>
    <MfButtonGroup label="Alignment">
      <MfButton variant="primary">Left</MfButton>
      <MfButton variant="primary">Center</MfButton>
      <MfButton variant="primary">Right</MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton variant="success">Left</MfButton>
      <MfButton variant="success">Center</MfButton>
      <MfButton variant="success">Right</MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton variant="neutral">Left</MfButton>
      <MfButton variant="neutral">Center</MfButton>
      <MfButton variant="neutral">Right</MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton variant="warning">Left</MfButton>
      <MfButton variant="warning">Center</MfButton>
      <MfButton variant="warning">Right</MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton variant="danger">Left</MfButton>
      <MfButton variant="danger">Center</MfButton>
      <MfButton variant="danger">Right</MfButton>
    </MfButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html:preview
<mf-button-group label="Alignment">
  <mf-button size="small" pill>Left</mf-button>
  <mf-button size="small" pill>Center</mf-button>
  <mf-button size="small" pill>Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button size="medium" pill>Left</mf-button>
  <mf-button size="medium" pill>Center</mf-button>
  <mf-button size="medium" pill>Right</mf-button>
</mf-button-group>

<br /><br />

<mf-button-group label="Alignment">
  <mf-button size="large" pill>Left</mf-button>
  <mf-button size="large" pill>Center</mf-button>
  <mf-button size="large" pill>Right</mf-button>
</mf-button-group>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';

const App = () => (
  <>
    <MfButtonGroup label="Alignment">
      <MfButton size="small" pill>
        Left
      </MfButton>
      <MfButton size="small" pill>
        Center
      </MfButton>
      <MfButton size="small" pill>
        Right
      </MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton size="medium" pill>
        Left
      </MfButton>
      <MfButton size="medium" pill>
        Center
      </MfButton>
      <MfButton size="medium" pill>
        Right
      </MfButton>
    </MfButtonGroup>

    <br />
    <br />

    <MfButtonGroup label="Alignment">
      <MfButton size="large" pill>
        Left
      </MfButton>
      <MfButton size="large" pill>
        Center
      </MfButton>
      <MfButton size="large" pill>
        Right
      </MfButton>
    </MfButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<mf-button>` element.

```html:preview
<mf-button-group label="Example Button Group">
  <mf-button>Button</mf-button>
  <mf-button>Button</mf-button>
  <mf-dropdown>
    <mf-button slot="trigger" caret>Dropdown</mf-button>
    <mf-menu>
      <mf-menu-item>Item 1</mf-menu-item>
      <mf-menu-item>Item 2</mf-menu-item>
      <mf-menu-item>Item 3</mf-menu-item>
    </mf-menu>
  </mf-dropdown>
</mf-button-group>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfButtonGroup label="Example Button Group">
    <MfButton>Button</MfButton>
    <MfButton>Button</MfButton>
    <MfDropdown>
      <MfButton slot="trigger" caret>
        Dropdown
      </MfButton>
      <MfMenu>
        <MfMenuItem>Item 1</MfMenuItem>
        <MfMenuItem>Item 2</MfMenuItem>
        <MfMenuItem>Item 3</MfMenuItem>
      </MfMenu>
    </MfDropdown>
  </MfButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html:preview
<mf-button-group label="Example Button Group">
  <mf-button variant="primary">Save</mf-button>
  <mf-dropdown placement="bottom-end">
    <mf-button slot="trigger" variant="primary" caret>
      <mf-visually-hidden>More options</mf-visually-hidden>
    </mf-button>
    <mf-menu>
      <mf-menu-item>Save</mf-menu-item>
      <mf-menu-item>Save as&hellip;</mf-menu-item>
      <mf-menu-item>Save all</mf-menu-item>
    </mf-menu>
  </mf-dropdown>
</mf-button-group>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';
import MfDropdown from 'maf-ui-kit/dist/react/dropdown';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';

const App = () => (
  <MfButtonGroup label="Example Button Group">
    <MfButton variant="primary">Save</MfButton>
    <MfDropdown placement="bottom-end">
      <MfButton slot="trigger" variant="primary" caret></MfButton>
      <MfMenu>
        <MfMenuItem>Save</MfMenuItem>
        <MfMenuItem>Save as&hellip;</MfMenuItem>
        <MfMenuItem>Save all</MfMenuItem>
      </MfMenu>
    </MfDropdown>
  </MfButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html:preview
<mf-button-group label="Alignment">
  <mf-tooltip content="I'm on the left">
    <mf-button>Left</mf-button>
  </mf-tooltip>

  <mf-tooltip content="I'm in the middle">
    <mf-button>Center</mf-button>
  </mf-tooltip>

  <mf-tooltip content="I'm on the right">
    <mf-button>Right</mf-button>
  </mf-tooltip>
</mf-button-group>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => (
  <>
    <MfButtonGroup label="Alignment">
      <MfTooltip content="I'm on the left">
        <MfButton>Left</MfButton>
      </MfTooltip>

      <MfTooltip content="I'm in the middle">
        <MfButton>Center</MfButton>
      </MfTooltip>

      <MfTooltip content="I'm on the right">
        <MfButton>Right</MfButton>
      </MfTooltip>
    </MfButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html:preview
<div class="button-group-toolbar">
  <mf-button-group label="History">
    <mf-tooltip content="Undo">
      <mf-button><mf-icon name="arrow-counterclockwise" label="Undo"></mf-icon></mf-button>
    </mf-tooltip>
    <mf-tooltip content="Redo">
      <mf-button><mf-icon name="arrow-clockwise" label="Redo"></mf-icon></mf-button>
    </mf-tooltip>
  </mf-button-group>

  <mf-button-group label="Formatting">
    <mf-tooltip content="Bold">
      <mf-button><mf-icon name="type-bold" label="Bold"></mf-icon></mf-button>
    </mf-tooltip>
    <mf-tooltip content="Italic">
      <mf-button><mf-icon name="type-italic" label="Italic"></mf-icon></mf-button>
    </mf-tooltip>
    <mf-tooltip content="Underline">
      <mf-button><mf-icon name="type-underline" label="Underline"></mf-icon></mf-button>
    </mf-tooltip>
  </mf-button-group>

  <mf-button-group label="Alignment">
    <mf-tooltip content="Align Left">
      <mf-button><mf-icon name="justify-left" label="Align Left"></mf-icon></mf-button>
    </mf-tooltip>
    <mf-tooltip content="Align Center">
      <mf-button><mf-icon name="justify" label="Align Center"></mf-icon></mf-button>
    </mf-tooltip>
    <mf-tooltip content="Align Right">
      <mf-button><mf-icon name="justify-right" label="Align Right"></mf-icon></mf-button>
    </mf-tooltip>
  </mf-button-group>
</div>

<style>
  .button-group-toolbar mf-button-group:not(:last-of-type) {
    margin-right: var(--mf-spacing-x-small);
  }
</style>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfButtonGroup from 'maf-ui-kit/dist/react/button-group';
import MfIcon from 'maf-ui-kit/dist/react/icon';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const css = `
  .button-group-toolbar mf-button-group:not(:last-of-type) {
    margin-right: var(--mf-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <MfButtonGroup label="History">
        <MfTooltip content="Undo">
          <MfButton>
            <MfIcon name="arrow-counterclockwise"></MfIcon>
          </MfButton>
        </MfTooltip>
        <MfTooltip content="Redo">
          <MfButton>
            <MfIcon name="arrow-clockwise"></MfIcon>
          </MfButton>
        </MfTooltip>
      </MfButtonGroup>

      <MfButtonGroup label="Formatting">
        <MfTooltip content="Bold">
          <MfButton>
            <MfIcon name="type-bold"></MfIcon>
          </MfButton>
        </MfTooltip>
        <MfTooltip content="Italic">
          <MfButton>
            <MfIcon name="type-italic"></MfIcon>
          </MfButton>
        </MfTooltip>
        <MfTooltip content="Underline">
          <MfButton>
            <MfIcon name="type-underline"></MfIcon>
          </MfButton>
        </MfTooltip>
      </MfButtonGroup>

      <MfButtonGroup label="Alignment">
        <MfTooltip content="Align Left">
          <MfButton>
            <MfIcon name="justify-left"></MfIcon>
          </MfButton>
        </MfTooltip>
        <MfTooltip content="Align Center">
          <MfButton>
            <MfIcon name="justify"></MfIcon>
          </MfButton>
        </MfTooltip>
        <MfTooltip content="Align Right">
          <MfButton>
            <MfIcon name="justify-right"></MfIcon>
          </MfButton>
        </MfTooltip>
      </MfButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```
