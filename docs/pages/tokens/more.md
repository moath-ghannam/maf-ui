---
meta:
  title: More Design Tokens
  description: Additional design tokens can be found here.
---

# More Design Tokens

All of the design tokens described herein are considered relatively stable. However, some changes might occur in future versions to address mission critical bugs or improvements. If such changes occur, they _will not_ be considered breaking changes and will be clearly documented in the [changelog](/resources/changelog).

Most design tokens are consistent across the light and dark theme. Those that vary will show both values.

:::tip
Currently, the source of design tokens is considered to be [`light.css`](https://github.com/maf-ui/blob/next/src/themes/light.css). The dark theme, [dark.css](https://github.com/maf-ui/blob/next/src/themes/dark.css), mirrors all of the same tokens with dark mode-specific values where appropriate. Work is planned to move all design tokens to a single file, perhaps JSON or YAML, in the near future.
:::

## Focus Rings

Focus ring tokens control the appearance of focus rings. Note that form inputs use `--mf-input-focus-ring-*` tokens instead.

| Token                    | Value                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `--mf-focus-ring-color`  | `var(--mf-color-primary-600)` (light theme)<br>`var(--mf-color-primary-700)` (dark theme) |
| `--mf-focus-ring-style`  | `solid`                                                                                   |
| `--mf-focus-ring-width`  | `3px`                                                                                     |
| `--mf-focus-ring`        | `var(--mf-focus-ring-style) var(--mf-focus-ring-width) var(--mf-focus-ring-color)`        |
| `--mf-focus-ring-offset` | `1px`                                                                                     |

## Buttons

Button tokens control the appearance of buttons. In addition, buttons also currently use some form input tokens such as `--mf-input-height-*` and `--mf-input-border-*`. More button tokens may be added in the future to make it easier to style them more independently.

| Token                          | Value                         |
| ------------------------------ | ----------------------------- |
| `--mf-button-font-size-small`  | `var(--mf-font-size-x-small)` |
| `--mf-button-font-size-medium` | `var(--mf-font-size-small)`   |
| `--mf-button-font-size-large`  | `var(--mf-font-size-medium)`  |

## Form Inputs

Form input tokens control the appearance of form controls such as [input](/components/input), [select](/components/select), [textarea](/components/textarea), etc.

| Token                                   | Value                              |
| --------------------------------------- | ---------------------------------- |
| `--mf-input-height-small`               | `1.875rem` (30px @ 16px base)      |
| `--mf-input-height-medium`              | `2.5rem` (40px @ 16px base)        |
| `--mf-input-height-large`               | `3.125rem` (50px @ 16px base)      |
| `--mf-input-background-color`           | `var(--mf-color-neutral-0)`        |
| `--mf-input-background-color-hover`     | `var(--mf-input-background-color)` |
| `--mf-input-background-color-focus`     | `var(--mf-input-background-color)` |
| `--mf-input-background-color-disabled`  | `var(--mf-color-neutral-100)`      |
| `--mf-input-border-color`               | `var(--mf-color-neutral-300)`      |
| `--mf-input-border-color-hover`         | `var(--mf-color-neutral-400)`      |
| `--mf-input-border-color-focus`         | `var(--mf-color-primary-500)`      |
| `--mf-input-border-color-disabled`      | `var(--mf-color-neutral-300)`      |
| `--mf-input-border-width`               | `1px`                              |
| `--mf-input-required-content`           | `*`                                |
| `--mf-input-required-content-offset`    | `-2px`                             |
| `--mf-input-required-content-color`     | `var(--mf-input-label-color)`      |
| `--mf-input-border-radius-small`        | `var(--mf-border-radius-medium)`   |
| `--mf-input-border-radius-medium`       | `var(--mf-border-radius-medium)`   |
| `--mf-input-border-radius-large`        | `var(--mf-border-radius-medium)`   |
| `--mf-input-font-family`                | `var(--mf-font-sans)`              |
| `--mf-input-font-weight`                | `var(--mf-font-weight-normal)`     |
| `--mf-input-font-size-small`            | `var(--mf-font-size-small)`        |
| `--mf-input-font-size-medium`           | `var(--mf-font-size-medium)`       |
| `--mf-input-font-size-large`            | `var(--mf-font-size-large)`        |
| `--mf-input-letter-spacing`             | `var(--mf-letter-spacing-normal)`  |
| `--mf-input-color`                      | `var(--mf-color-neutral-700)`      |
| `--mf-input-color-hover`                | `var(--mf-color-neutral-700)`      |
| `--mf-input-color-focus`                | `var(--mf-color-neutral-700)`      |
| `--mf-input-color-disabled`             | `var(--mf-color-neutral-900)`      |
| `--mf-input-icon-color`                 | `var(--mf-color-neutral-500)`      |
| `--mf-input-icon-color-hover`           | `var(--mf-color-neutral-600)`      |
| `--mf-input-icon-color-focus`           | `var(--mf-color-neutral-600)`      |
| `--mf-input-placeholder-color`          | `var(--mf-color-neutral-500)`      |
| `--mf-input-placeholder-color-disabled` | `var(--mf-color-neutral-600)`      |
| `--mf-input-spacing-small`              | `var(--mf-spacing-small)`          |
| `--mf-input-spacing-medium`             | `var(--mf-spacing-medium)`         |
| `--mf-input-spacing-large`              | `var(--mf-spacing-large)`          |
| `--mf-input-focus-ring-color`           | `hsl(198.6 88.7% 48.4% / 40%)`     |
| `--mf-input-focus-ring-offset`          | `0`                                |

## Filled Form Inputs

Filled form input tokens control the appearance of form controls using the `filled` variant.

| Token                                         | Value                         |
| --------------------------------------------- | ----------------------------- |
| `--mf-input-filled-background-color`          | `var(--mf-color-neutral-100)` |
| `--mf-input-filled-background-color-hover`    | `var(--mf-color-neutral-100)` |
| `--mf-input-filled-background-color-focus`    | `var(--mf-color-neutral-100)` |
| `--mf-input-filled-background-color-disabled` | `var(--mf-color-neutral-100)` |
| `--mf-input-filled-color`                     | `var(--mf-color-neutral-800)` |
| `--mf-input-filled-color-hover`               | `var(--mf-color-neutral-800)` |
| `--mf-input-filled-color-focus`               | `var(--mf-color-neutral-700)` |
| `--mf-input-filled-color-disabled`            | `var(--mf-color-neutral-800)` |

## Form Labels

Form label tokens control the appearance of labels in form controls.

| Token                               | Value                        |
| ----------------------------------- | ---------------------------- |
| `--mf-input-label-font-size-small`  | `var(--mf-font-size-small)`  |
| `--mf-input-label-font-size-medium` | `var(--mf-font-size-medium`) |
| `--mf-input-label-font-size-large`  | `var(--mf-font-size-large)`  |
| `--mf-input-label-color`            | `inherit`                    |

## Help Text

Help text tokens control the appearance of help text in form controls.

| Token                                   | Value                         |
| --------------------------------------- | ----------------------------- |
| `--mf-input-help-text-font-size-small`  | `var(--mf-font-size-x-small)` |
| `--mf-input-help-text-font-size-medium` | `var(--mf-font-size-small)`   |
| `--mf-input-help-text-font-size-large`  | `var(--mf-font-size-medium)`  |
| `--mf-input-help-text-color`            | `var(--mf-color-neutral-500)` |

## Toggles

Toggle tokens control the appearance of toggles such as [checkbox](/components/checkbox), [radio](/components/radio), [switch](/components/switch), etc.

| Token                     | Value                         |
| ------------------------- | ----------------------------- |
| `--mf-toggle-size-small`  | `0.875rem` (14px @ 16px base) |
| `--mf-toggle-size-medium` | `1.125rem` (18px @ 16px base) |
| `--mf-toggle-size-large`  | `1.375rem` (22px @ 16px base) |

## Overlays

Overlay tokens control the appearance of overlays as used in [dialog](/components/dialog), [drawer](/components/drawer), etc.

| Token                           | Value                       |
| ------------------------------- | --------------------------- |
| `--mf-overlay-background-color` | `hsl(240 3.8% 46.1% / 33%)` |

## Panels

Panel tokens control the appearance of panels such as those used in [dialog](/components/dialog), [drawer](/components/drawer), [menu](/components/menu), etc.

| Token                         | Value                         |
| ----------------------------- | ----------------------------- |
| `--mf-panel-background-color` | `var(--mf-color-neutral-0)`   |
| `--mf-panel-border-color`     | `var(--mf-color-neutral-200)` |
| `--mf-panel-border-width`     | `1px`                         |

## Tooltips

Tooltip tokens control the appearance of tooltips. This includes the [tooltip](/components/tooltip) component as well as other implementations, such [range tooltips](/components/range).

| Token                           | Value                                                  |
| ------------------------------- | ------------------------------------------------------ |
| `--mf-tooltip-border-radius`    | `var(--mf-border-radius-medium)`                       |
| `--mf-tooltip-background-color` | `var(--mf-color-neutral-800)`                          |
| `--mf-tooltip-color`            | `var(--mf-color-neutral-0)`                            |
| `--mf-tooltip-font-family`      | `var(--mf-font-sans)`                                  |
| `--mf-tooltip-font-weight`      | `var(--mf-font-weight-normal)`                         |
| `--mf-tooltip-font-size`        | `var(--mf-font-size-small)`                            |
| `--mf-tooltip-line-height`      | `var(--mf-line-height-dense)`                          |
| `--mf-tooltip-padding`          | `var(--mf-spacing-2x-small) var(--mf-spacing-x-small)` |
| `--mf-tooltip-arrow-size`       | `6px`                                                  |
