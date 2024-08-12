---
meta:
  title: Tooltip
  description: Tooltips display additional information based on a specific action.
layout: component
---

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html:preview
<mf-tooltip content="This is a tooltip">
  <mf-button>Hover Me</mf-button>
</mf-tooltip>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => (
  <MfTooltip content="This is a tooltip">
    <MfButton>Hover Me</MfButton>
  </MfTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html:preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <mf-tooltip content="top-start" placement="top-start">
      <mf-button></mf-button>
    </mf-tooltip>

    <mf-tooltip content="top" placement="top">
      <mf-button></mf-button>
    </mf-tooltip>

    <mf-tooltip content="top-end" placement="top-end">
      <mf-button></mf-button>
    </mf-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <mf-tooltip content="left-start" placement="left-start">
      <mf-button></mf-button>
    </mf-tooltip>

    <mf-tooltip content="right-start" placement="right-start">
      <mf-button></mf-button>
    </mf-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <mf-tooltip content="left" placement="left">
      <mf-button></mf-button>
    </mf-tooltip>

    <mf-tooltip content="right" placement="right">
      <mf-button></mf-button>
    </mf-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <mf-tooltip content="left-end" placement="left-end">
      <mf-button></mf-button>
    </mf-tooltip>

    <mf-tooltip content="right-end" placement="right-end">
      <mf-button></mf-button>
    </mf-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <mf-tooltip content="bottom-start" placement="bottom-start">
      <mf-button></mf-button>
    </mf-tooltip>

    <mf-tooltip content="bottom" placement="bottom">
      <mf-button></mf-button>
    </mf-tooltip>

    <mf-tooltip content="bottom-end" placement="bottom-end">
      <mf-button></mf-button>
    </mf-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example mf-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) mf-tooltip:first-child mf-button,
  .tooltip-placement-example-row:nth-child(5) mf-tooltip:first-child mf-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) mf-tooltip:nth-child(2) mf-button,
  .tooltip-placement-example-row:nth-child(3) mf-tooltip:nth-child(2) mf-button,
  .tooltip-placement-example-row:nth-child(4) mf-tooltip:nth-child(2) mf-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example mf-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) mf-tooltip:first-child mf-button,
  .tooltip-placement-example-row:nth-child(5) mf-tooltip:first-child mf-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) mf-tooltip:nth-child(2) mf-button,
  .tooltip-placement-example-row:nth-child(3) mf-tooltip:nth-child(2) mf-button,
  .tooltip-placement-example-row:nth-child(4) mf-tooltip:nth-child(2) mf-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <MfTooltip content="top-start" placement="top-start">
          <MfButton />
        </MfTooltip>

        <MfTooltip content="top" placement="top">
          <MfButton />
        </MfTooltip>

        <MfTooltip content="top-end" placement="top-end">
          <MfButton />
        </MfTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MfTooltip content="left-start" placement="left-start">
          <MfButton />
        </MfTooltip>

        <MfTooltip content="right-start" placement="right-start">
          <MfButton />
        </MfTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MfTooltip content="left" placement="left">
          <MfButton />
        </MfTooltip>

        <MfTooltip content="right" placement="right">
          <MfButton />
        </MfTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MfTooltip content="left-end" placement="left-end">
          <MfButton />
        </MfTooltip>

        <MfTooltip content="right-end" placement="right-end">
          <MfButton />
        </MfTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <MfTooltip content="bottom-start" placement="bottom-start">
          <MfButton />
        </MfTooltip>

        <MfTooltip content="bottom" placement="bottom">
          <MfButton />
        </MfTooltip>

        <MfTooltip content="bottom-end" placement="bottom-end">
          <MfButton />
        </MfTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html:preview
<mf-tooltip content="Click again to dismiss" trigger="click">
  <mf-button>Click to Toggle</mf-button>
</mf-tooltip>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => (
  <MfTooltip content="Click again to dismiss" trigger="click">
    <MfButton>Click to Toggle</MfButton>
  </MfTooltip>
);
```

### Manual Trigger

Tooltips can be controlled programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html:preview
<mf-button style="margin-right: 4rem;">Toggle Manually</mf-button>

<mf-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <mf-avatar label="User"></mf-avatar>
</mf-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import MfAvatar from 'maf-ui-kit/dist/react/avatar';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MfButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </MfButton>

      <MfTooltip open={open} content="This is an avatar" trigger="manual">
        <MfAvatar />
      </MfTooltip>
    </>
  );
};
```

{% endraw %}

### Removing Arrows

You can control the size of tooltip arrows by overriding the `--mf-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.

```html:preview
<mf-tooltip content="This is a tooltip" style="--mf-tooltip-arrow-size: 0;">
  <mf-button>No Arrow</mf-button>
</mf-tooltip>
```

{% raw %}

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => (
  <div style={{ '--mf-tooltip-arrow-size': '0' }}>
    <MfTooltip content="This is a tooltip">
      <MfButton>Above</MfButton>
    </MfTooltip>

    <MfTooltip content="This is a tooltip" placement="bottom">
      <MfButton>Below</MfButton>
    </MfTooltip>
  </div>
);
```

{% endraw %}

To override it globally, set it in a root block in your stylesheet after the maf-ui stylesheet is loaded.

```css
:root {
  --mf-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html:preview
<mf-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <mf-button>Hover me</mf-button>
</mf-tooltip>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => (
  <MfTooltip>
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <MfButton>Hover Me</MfButton>
  </MfTooltip>
);
```

### Setting a Maximum Width

Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.

```html:preview
<mf-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
  <mf-button>Hover me</mf-button>
</mf-tooltip>
```

{% raw %}

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const App = () => (
  <MfTooltip style={{ '--max-width': '80px' }} content="This tooltip will wrap after only 80 pixels.">
    <MfButton>Hover Me</MfButton>
  </MfTooltip>
);
```

{% endraw %}

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="tooltip-hoist">
  <mf-tooltip content="This is a tooltip">
    <mf-button>No Hoist</mf-button>
  </mf-tooltip>

  <mf-tooltip content="This is a tooltip" hoist>
    <mf-button>Hoist</mf-button>
  </mf-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--mf-panel-border-color);
    overflow: hidden;
    padding: var(--mf-spacing-medium);
  }
</style>
```

```jsx:react
import MfButton from 'maf-ui-kit/dist/react/button';
import MfTooltip from 'maf-ui-kit/dist/react/tooltip';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--mf-panel-border-color);
    overflow: hidden;
    padding: var(--mf-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <MfTooltip content="This is a tooltip">
        <MfButton>No Hoist</MfButton>
      </MfTooltip>

      <MfTooltip content="This is a tooltip" hoist>
        <MfButton>Hoist</MfButton>
      </MfTooltip>
    </div>

    <style>{css}</style>
  </>
);
```
