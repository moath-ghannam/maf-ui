---
meta:
  title: Tab
  description: Tabs are used inside tab groups to represent and activate tab panels.
layout: component
---

```html:preview
<mf-tab>Tab</mf-tab>
<mf-tab active>Active</mf-tab>
<mf-tab closable>Closable</mf-tab>
<mf-tab disabled>Disabled</mf-tab>
```

```jsx:react
import MfTab from 'maf-ui-kit/dist/react/tab';

const App = () => (
  <>
    <MfTab>Tab</MfTab>
    <MfTab active>Active</MfTab>
    <MfTab closable>Closable</MfTab>
    <MfTab disabled>Disabled</MfTab>
  </>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
