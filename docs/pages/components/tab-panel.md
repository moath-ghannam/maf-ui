---
meta:
  title: Tab Panel
  description: Tab panels are used inside tab groups to display tabbed content.
layout: component
---

```html:preview
<mf-tab-group>
  <mf-tab slot="nav" panel="general">General</mf-tab>
  <mf-tab slot="nav" panel="custom">Custom</mf-tab>
  <mf-tab slot="nav" panel="advanced">Advanced</mf-tab>
  <mf-tab slot="nav" panel="disabled" disabled>Disabled</mf-tab>

  <mf-tab-panel name="general">This is the general tab panel.</mf-tab-panel>
  <mf-tab-panel name="custom">This is the custom tab panel.</mf-tab-panel>
  <mf-tab-panel name="advanced">This is the advanced tab panel.</mf-tab-panel>
  <mf-tab-panel name="disabled">This is a disabled tab panel.</mf-tab-panel>
</mf-tab-group>
```

```jsx:react
import MfTab from 'maf-ui-kit/dist/react/tab';
import MfTabGroup from 'maf-ui-kit/dist/react/tab-group';
import MfTabPanel from 'maf-ui-kit/dist/react/tab-panel';

const App = () => (
  <MfTabGroup>
    <MfTab slot="nav" panel="general">
      General
    </MfTab>
    <MfTab slot="nav" panel="custom">
      Custom
    </MfTab>
    <MfTab slot="nav" panel="advanced">
      Advanced
    </MfTab>
    <MfTab slot="nav" panel="disabled" disabled>
      Disabled
    </MfTab>

    <MfTabPanel name="general">This is the general tab panel.</MfTabPanel>
    <MfTabPanel name="custom">This is the custom tab panel.</MfTabPanel>
    <MfTabPanel name="advanced">This is the advanced tab panel.</MfTabPanel>
    <MfTabPanel name="disabled">This is a disabled tab panel.</MfTabPanel>
  </MfTabGroup>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
