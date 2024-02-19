---
meta:
  title: Color Tokens
  description: Color tokens help maintain consistent use of color throughout your app.
---

# Color Tokens

Color tokens help maintain consistent use of color throughout your app. maf-ui provides palettes for theme colors and primitives that you can use as a foundation for your design system.

Color tokens are referenced using the `--mf-color-{name}-{n}` CSS custom property, where `{name}` is the name of the palette and `{n}` is the numeric value of the desired swatch.

## Theme Tokens

Theme tokens give you a semantic way to reference colors in your app. The primary palette is typically based on a brand color, whereas success, neutral, warning, and danger are used to visualize actions that correspond to their respective meanings.

<div class="color-palette">
  <div class="color-palette__name">
    Primary<br>
    <code>--mf-color-primary-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-primary-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Success<br>
    <code>--mf-color-success-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-success-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Warning<br>
    <code>--mf-color-warning-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-warning-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Danger<br>
    <code>--mf-color-danger-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-danger-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Neutral<br>
    <code>--mf-color-neutral-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-neutral-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Black & White<br>
    <code>--mf-color-neutral-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch color-palette__swatch--border" style="background-color: var(--mf-color-neutral-0);"></div>0</div>
  <div class="color-palette__example"><div class="color-palette__swatch " style="background-color: var(--mf-color-neutral-1000);"></div>1000</div>
</div>

:::tip
Looking for an easy way to customize your theme? [Try the color token generator!](https://codepen.io/claviska/full/QWveRgL)
:::

## Primitives

Additional palettes are provided in the form of color primitives. Use these when you need arbitrary colors that don't have semantic meaning. Color primitives are derived from the fantastic [Tailwind color palette](https://tailwindcss.com/docs/customizing-colors).

<div class="color-palette">
  <div class="color-palette__name">
    Gray<br>
    <code>--mf-color-gray-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-900);"></div>900</div>  
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-gray-950);"></div>950</div>  
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Red<br>
    <code>--mf-color-red-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-red-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Orange<br>
    <code>--mf-color-orange-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-orange-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Amber<br>
    <code>--mf-color-amber-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-amber-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Yellow<br>
    <code>--mf-color-yellow-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-yellow-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Lime<br>
    <code>--mf-color-lime-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-lime-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Green<br>
    <code>--mf-color-green-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-green-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Emerald<br>
    <code>--mf-color-emerald-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-emerald-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Teal<br>
    <code>--mf-color-teal-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-teal-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Cyan<br>
    <code>--mf-color-cyan-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-cyan-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Sky<br>
    <code>--mf-color-sky-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-sky-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Blue<br>
    <code>--mf-color-blue-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-blue-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Indigo<br>
    <code>--mf-color-indigo-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-indigo-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Violet<br>
    <code>--mf-color-violet-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-violet-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Purple<br>
    <code>--mf-color-purple-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-purple-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Fuchsia<br>
    <code>--mf-color-fuchsia-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-fuchsia-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Pink<br>
    <code>--mf-color-pink-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-pink-950);"></div>950</div>
</div>

<div class="color-palette">
  <div class="color-palette__name">
    Rose<br>
    <code>--mf-color-rose-<em>{n}</em></code>
  </div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-50);"></div>50</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-100);"></div>100</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-200);"></div>200</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-300);"></div>300</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-400);"></div>400</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-500);"></div>500</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-600);"></div>600</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-700);"></div>700</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-800);"></div>800</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-900);"></div>900</div>
  <div class="color-palette__example"><div class="color-palette__swatch" style="background-color: var(--mf-color-rose-950);"></div>950</div>
</div>
