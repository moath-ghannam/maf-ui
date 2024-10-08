---
meta:
  title: Format Date
  description: Formats a date/time using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html:preview
<!-- maf-ui 2 release date 🎉 -->
<mf-format-date date="2020-07-15T09:17:00-04:00"></mf-format-date>
```

```jsx:react
import MfFormatDate from 'maf-ui-kit/dist/react/format-date';

const App = () => <MfFormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

:::tip
When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.
:::

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html:preview
<!-- Human-readable date -->
<mf-format-date month="long" day="numeric" year="numeric"></mf-format-date><br />

<!-- Time -->
<mf-format-date hour="numeric" minute="numeric"></mf-format-date><br />

<!-- Weekday -->
<mf-format-date weekday="long"></mf-format-date><br />

<!-- Month -->
<mf-format-date month="long"></mf-format-date><br />

<!-- Year -->
<mf-format-date year="numeric"></mf-format-date><br />

<!-- No formatting options -->
<mf-format-date></mf-format-date>
```

```jsx:react
import MfFormatDate from 'maf-ui-kit/dist/react/format-date';

const App = () => (
  <>
    {/* Human-readable date */}
    <MfFormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <MfFormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <MfFormatDate weekday="long" />
    <br />

    {/* Month */}
    <MfFormatDate month="long" />
    <br />

    {/* Year */}
    <MfFormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <MfFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html:preview
<mf-format-date hour="numeric" minute="numeric" hour-format="12"></mf-format-date><br />
<mf-format-date hour="numeric" minute="numeric" hour-format="24"></mf-format-date>
```

```jsx:react
import MfFormatDate from 'maf-ui-kit/dist/react/format-date';

const App = () => (
  <>
    <MfFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <MfFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html:preview
English: <mf-format-date lang="en"></mf-format-date><br />
French: <mf-format-date lang="fr"></mf-format-date><br />
Russian: <mf-format-date lang="ru"></mf-format-date>
```

```jsx:react
import MfFormatDate from 'maf-ui-kit/dist/react/format-date';

const App = () => (
  <>
    English: <MfFormatDate lang="en" />
    <br />
    French: <MfFormatDate lang="fr" />
    <br />
    Russian: <MfFormatDate lang="ru" />
  </>
);
```
