---
meta:
  title: Tab Group
  description: Tab groups organize content into a container that shows one section at a time.
layout: component
---

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

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

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html:preview
<mf-tab-group placement="bottom">
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
  <MfTabGroup placement="bottom">
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

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html:preview
<mf-tab-group placement="start">
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
  <MfTabGroup placement="start">
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

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html:preview
<mf-tab-group placement="end">
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
  <MfTabGroup placement="end">
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

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html:preview
<mf-tab-group class="tabs-closable">
  <mf-tab slot="nav" panel="general">General</mf-tab>
  <mf-tab slot="nav" panel="closable-1" closable>Closable 1</mf-tab>
  <mf-tab slot="nav" panel="closable-2" closable>Closable 2</mf-tab>
  <mf-tab slot="nav" panel="closable-3" closable>Closable 3</mf-tab>

  <mf-tab-panel name="general">This is the general tab panel.</mf-tab-panel>
  <mf-tab-panel name="closable-1">This is the first closable tab panel.</mf-tab-panel>
  <mf-tab-panel name="closable-2">This is the second closable tab panel.</mf-tab-panel>
  <mf-tab-panel name="closable-3">This is the third closable tab panel.</mf-tab-panel>
</mf-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('mf-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`mf-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx:react
import MfTab from 'maf-ui-kit/dist/react/tab';
import MfTabGroup from 'maf-ui-kit/dist/react/tab-group';
import MfTabPanel from 'maf-ui-kit/dist/react/tab-panel';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('mf-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <MfTabGroup className="tabs-closable" onMfClose={handleClose}>
      <MfTab slot="nav" panel="general">
        General
      </MfTab>
      <MfTab slot="nav" panel="closable-1" closable onMfClose={handleClose}>
        Closable 1
      </MfTab>
      <MfTab slot="nav" panel="closable-2" closable onMfClose={handleClose}>
        Closable 2
      </MfTab>
      <MfTab slot="nav" panel="closable-3" closable onMfClose={handleClose}>
        Closable 3
      </MfTab>

      <MfTabPanel name="general">This is the general tab panel.</MfTabPanel>
      <MfTabPanel name="closable-1">This is the first closable tab panel.</MfTabPanel>
      <MfTabPanel name="closable-2">This is the second closable tab panel.</MfTabPanel>
      <MfTabPanel name="closable-3">This is the third closable tab panel.</MfTabPanel>
    </MfTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html:preview
<mf-tab-group>
  <mf-tab slot="nav" panel="tab-1">Tab 1</mf-tab>
  <mf-tab slot="nav" panel="tab-2">Tab 2</mf-tab>
  <mf-tab slot="nav" panel="tab-3">Tab 3</mf-tab>
  <mf-tab slot="nav" panel="tab-4">Tab 4</mf-tab>
  <mf-tab slot="nav" panel="tab-5">Tab 5</mf-tab>
  <mf-tab slot="nav" panel="tab-6">Tab 6</mf-tab>
  <mf-tab slot="nav" panel="tab-7">Tab 7</mf-tab>
  <mf-tab slot="nav" panel="tab-8">Tab 8</mf-tab>
  <mf-tab slot="nav" panel="tab-9">Tab 9</mf-tab>
  <mf-tab slot="nav" panel="tab-10">Tab 10</mf-tab>
  <mf-tab slot="nav" panel="tab-11">Tab 11</mf-tab>
  <mf-tab slot="nav" panel="tab-12">Tab 12</mf-tab>
  <mf-tab slot="nav" panel="tab-13">Tab 13</mf-tab>
  <mf-tab slot="nav" panel="tab-14">Tab 14</mf-tab>
  <mf-tab slot="nav" panel="tab-15">Tab 15</mf-tab>
  <mf-tab slot="nav" panel="tab-16">Tab 16</mf-tab>
  <mf-tab slot="nav" panel="tab-17">Tab 17</mf-tab>
  <mf-tab slot="nav" panel="tab-18">Tab 18</mf-tab>
  <mf-tab slot="nav" panel="tab-19">Tab 19</mf-tab>
  <mf-tab slot="nav" panel="tab-20">Tab 20</mf-tab>

  <mf-tab-panel name="tab-1">Tab panel 1</mf-tab-panel>
  <mf-tab-panel name="tab-2">Tab panel 2</mf-tab-panel>
  <mf-tab-panel name="tab-3">Tab panel 3</mf-tab-panel>
  <mf-tab-panel name="tab-4">Tab panel 4</mf-tab-panel>
  <mf-tab-panel name="tab-5">Tab panel 5</mf-tab-panel>
  <mf-tab-panel name="tab-6">Tab panel 6</mf-tab-panel>
  <mf-tab-panel name="tab-7">Tab panel 7</mf-tab-panel>
  <mf-tab-panel name="tab-8">Tab panel 8</mf-tab-panel>
  <mf-tab-panel name="tab-9">Tab panel 9</mf-tab-panel>
  <mf-tab-panel name="tab-10">Tab panel 10</mf-tab-panel>
  <mf-tab-panel name="tab-11">Tab panel 11</mf-tab-panel>
  <mf-tab-panel name="tab-12">Tab panel 12</mf-tab-panel>
  <mf-tab-panel name="tab-13">Tab panel 13</mf-tab-panel>
  <mf-tab-panel name="tab-14">Tab panel 14</mf-tab-panel>
  <mf-tab-panel name="tab-15">Tab panel 15</mf-tab-panel>
  <mf-tab-panel name="tab-16">Tab panel 16</mf-tab-panel>
  <mf-tab-panel name="tab-17">Tab panel 17</mf-tab-panel>
  <mf-tab-panel name="tab-18">Tab panel 18</mf-tab-panel>
  <mf-tab-panel name="tab-19">Tab panel 19</mf-tab-panel>
  <mf-tab-panel name="tab-20">Tab panel 20</mf-tab-panel>
</mf-tab-group>
```

```jsx:react
import MfTab from 'maf-ui-kit/dist/react/tab';
import MfTabGroup from 'maf-ui-kit/dist/react/tab-group';
import MfTabPanel from 'maf-ui-kit/dist/react/tab-panel';

const App = () => (
  <MfTabGroup>
    <MfTab slot="nav" panel="tab-1">
      Tab 1
    </MfTab>
    <MfTab slot="nav" panel="tab-2">
      Tab 2
    </MfTab>
    <MfTab slot="nav" panel="tab-3">
      Tab 3
    </MfTab>
    <MfTab slot="nav" panel="tab-4">
      Tab 4
    </MfTab>
    <MfTab slot="nav" panel="tab-5">
      Tab 5
    </MfTab>
    <MfTab slot="nav" panel="tab-6">
      Tab 6
    </MfTab>
    <MfTab slot="nav" panel="tab-7">
      Tab 7
    </MfTab>
    <MfTab slot="nav" panel="tab-8">
      Tab 8
    </MfTab>
    <MfTab slot="nav" panel="tab-9">
      Tab 9
    </MfTab>
    <MfTab slot="nav" panel="tab-10">
      Tab 10
    </MfTab>
    <MfTab slot="nav" panel="tab-11">
      Tab 11
    </MfTab>
    <MfTab slot="nav" panel="tab-12">
      Tab 12
    </MfTab>
    <MfTab slot="nav" panel="tab-13">
      Tab 13
    </MfTab>
    <MfTab slot="nav" panel="tab-14">
      Tab 14
    </MfTab>
    <MfTab slot="nav" panel="tab-15">
      Tab 15
    </MfTab>
    <MfTab slot="nav" panel="tab-16">
      Tab 16
    </MfTab>
    <MfTab slot="nav" panel="tab-17">
      Tab 17
    </MfTab>
    <MfTab slot="nav" panel="tab-18">
      Tab 18
    </MfTab>
    <MfTab slot="nav" panel="tab-19">
      Tab 19
    </MfTab>
    <MfTab slot="nav" panel="tab-20">
      Tab 20
    </MfTab>

    <MfTabPanel name="tab-1">Tab panel 1</MfTabPanel>
    <MfTabPanel name="tab-2">Tab panel 2</MfTabPanel>
    <MfTabPanel name="tab-3">Tab panel 3</MfTabPanel>
    <MfTabPanel name="tab-4">Tab panel 4</MfTabPanel>
    <MfTabPanel name="tab-5">Tab panel 5</MfTabPanel>
    <MfTabPanel name="tab-6">Tab panel 6</MfTabPanel>
    <MfTabPanel name="tab-7">Tab panel 7</MfTabPanel>
    <MfTabPanel name="tab-8">Tab panel 8</MfTabPanel>
    <MfTabPanel name="tab-9">Tab panel 9</MfTabPanel>
    <MfTabPanel name="tab-10">Tab panel 10</MfTabPanel>
    <MfTabPanel name="tab-11">Tab panel 11</MfTabPanel>
    <MfTabPanel name="tab-12">Tab panel 12</MfTabPanel>
    <MfTabPanel name="tab-13">Tab panel 13</MfTabPanel>
    <MfTabPanel name="tab-14">Tab panel 14</MfTabPanel>
    <MfTabPanel name="tab-15">Tab panel 15</MfTabPanel>
    <MfTabPanel name="tab-16">Tab panel 16</MfTabPanel>
    <MfTabPanel name="tab-17">Tab panel 17</MfTabPanel>
    <MfTabPanel name="tab-18">Tab panel 18</MfTabPanel>
    <MfTabPanel name="tab-19">Tab panel 19</MfTabPanel>
    <MfTabPanel name="tab-20">Tab panel 20</MfTabPanel>
  </MfTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press [[Left]] or [[Right]] to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press [[Space]] or [[Enter]] before showing the tab panel (manual activation).

```html:preview
<mf-tab-group activation="manual">
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
  <MfTabGroup activation="manual">
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
