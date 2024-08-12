---
meta:
  title: Badge
  description: Badges are used to draw attention and display statuses or counts.
layout: component
---

```html:preview
<mf-badge>Badge</mf-badge>
```

```jsx:react
import MfBadge from 'maf-ui-kit/dist/react/badge';

const App = () => <MfBadge>Badge</MfBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html:preview
<mf-badge variant="primary">Primary</mf-badge>
<mf-badge variant="success">Success</mf-badge>
<mf-badge variant="neutral">Neutral</mf-badge>
<mf-badge variant="warning">Warning</mf-badge>
<mf-badge variant="danger">Danger</mf-badge>
```

```jsx:react
import MfBadge from 'maf-ui-kit/dist/react/badge';

const App = () => (
  <>
    <MfBadge variant="primary">Primary</MfBadge>
    <MfBadge variant="success">Success</MfBadge>
    <MfBadge variant="neutral">Neutral</MfBadge>
    <MfBadge variant="warning">Warning</MfBadge>
    <MfBadge variant="danger">Danger</MfBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html:preview
<mf-badge variant="primary" pill>Primary</mf-badge>
<mf-badge variant="success" pill>Success</mf-badge>
<mf-badge variant="neutral" pill>Neutral</mf-badge>
<mf-badge variant="warning" pill>Warning</mf-badge>
<mf-badge variant="danger" pill>Danger</mf-badge>
```

```jsx:react
import MfBadge from 'maf-ui-kit/dist/react/badge';

const App = () => (
  <>
    <MfBadge variant="primary" pill>
      Primary
    </MfBadge>
    <MfBadge variant="success" pill>
      Success
    </MfBadge>
    <MfBadge variant="neutral" pill>
      Neutral
    </MfBadge>
    <MfBadge variant="warning" pill>
      Warning
    </MfBadge>
    <MfBadge variant="danger" pill>
      Danger
    </MfBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html:preview
<div class="badge-pulse">
  <mf-badge variant="primary" pill pulse>1</mf-badge>
  <mf-badge variant="success" pill pulse>1</mf-badge>
  <mf-badge variant="neutral" pill pulse>1</mf-badge>
  <mf-badge variant="warning" pill pulse>1</mf-badge>
  <mf-badge variant="danger" pill pulse>1</mf-badge>
</div>

<style>
  .badge-pulse mf-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx:react
import MfBadge from 'maf-ui-kit/dist/react/badge';

const css = `
  .badge-pulse mf-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <MfBadge variant="primary" pill pulse>
        1
      </MfBadge>
      <MfBadge variant="success" pill pulse>
        1
      </MfBadge>
      <MfBadge variant="neutral" pill pulse>
        1
      </MfBadge>
      <MfBadge variant="warning" pill pulse>
        1
      </MfBadge>
      <MfBadge variant="danger" pill pulse>
        1
      </MfBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html:preview
<mf-button>
  Requests
  <mf-badge pill>30</mf-badge>
</mf-button>

<mf-button style="margin-inline-start: 1rem;">
  Warnings
  <mf-badge variant="warning" pill>8</mf-badge>
</mf-button>

<mf-button style="margin-inline-start: 1rem;">
  Errors
  <mf-badge variant="danger" pill>6</mf-badge>
</mf-button>
```

{% raw %}

```jsx:react
import MfBadge from 'maf-ui-kit/dist/react/badge';
import MfButton from 'maf-ui-kit/dist/react/button';

const App = () => (
  <>
    <MfButton>
      Requests
      <MfBadge pill>30</MfBadge>
    </MfButton>

    <MfButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <MfBadge variant="warning" pill>
        8
      </MfBadge>
    </MfButton>

    <MfButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <MfBadge variant="danger" pill>
        6
      </MfBadge>
    </MfButton>
  </>
);
```

{% endraw %}

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html:preview
<mf-menu style="max-width: 240px;">
  <mf-menu-label>Messages</mf-menu-label>
  <mf-menu-item>Comments <mf-badge slot="suffix" variant="neutral" pill>4</mf-badge></mf-menu-item>
  <mf-menu-item>Replies <mf-badge slot="suffix" variant="neutral" pill>12</mf-badge></mf-menu-item>
</mf-menu>
```

{% raw %}

```jsx:react
import MfBadge from 'maf-ui-kit/dist/react/badge';
import MfButton from 'maf-ui-kit/dist/react/button';
import MfMenu from 'maf-ui-kit/dist/react/menu';
import MfMenuItem from 'maf-ui-kit/dist/react/menu-item';
import MfMenuLabel from 'maf-ui-kit/dist/react/menu-label';

const App = () => (
  <MfMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--mf-panel-border-color)',
      borderRadius: 'var(--mf-border-radius-medium)'
    }}
  >
    <MfMenuLabel>Messages</MfMenuLabel>
    <MfMenuItem>
      Comments
      <MfBadge slot="suffix" variant="neutral" pill>
        4
      </MfBadge>
    </MfMenuItem>
    <MfMenuItem>
      Replies
      <MfBadge slot="suffix" variant="neutral" pill>
        12
      </MfBadge>
    </MfMenuItem>
  </MfMenu>
);
```

{% endraw %}
