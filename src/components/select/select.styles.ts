import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--mf-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--mf-input-font-family);
    font-weight: var(--mf-input-font-weight);
    letter-spacing: var(--mf-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--mf-transition-fast) color,
      var(--mf-transition-fast) border,
      var(--mf-transition-fast) box-shadow,
      var(--mf-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--mf-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--mf-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--mf-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--mf-spacing-2x-small);
  }

  .select__tags::slotted(mf-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(mf-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--mf-input-background-color);
    border: solid var(--mf-input-border-width) var(--mf-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--mf-input-background-color-disabled);
    border-color: var(--mf-input-border-color-disabled);
    color: var(--mf-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--mf-input-background-color-focus);
    border-color: var(--mf-input-border-color-focus);
    box-shadow: 0 0 0 var(--mf-focus-ring-width) var(--mf-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--mf-input-filled-background-color);
    color: var(--mf-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--mf-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--mf-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--mf-input-filled-background-color-focus);
    outline: var(--mf-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--mf-input-border-radius-small);
    font-size: var(--mf-input-font-size-small);
    min-height: var(--mf-input-height-small);
    padding-block: 0;
    padding-inline: var(--mf-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--mf-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--mf-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--mf-input-border-radius-medium);
    font-size: var(--mf-input-font-size-medium);
    min-height: var(--mf-input-height-medium);
    padding-block: 0;
    padding-inline: var(--mf-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--mf-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--mf-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--mf-input-border-radius-large);
    font-size: var(--mf-input-font-size-large);
    min-height: var(--mf-input-height-large);
    padding-block: 0;
    padding-inline: var(--mf-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--mf-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--mf-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--mf-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--mf-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--mf-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--mf-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--mf-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--mf-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--mf-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--mf-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--mf-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--mf-font-sans);
    font-size: var(--mf-font-size-medium);
    font-weight: var(--mf-font-weight-normal);
    box-shadow: var(--mf-shadow-large);
    background: var(--mf-panel-background-color);
    border: solid var(--mf-panel-border-width) var(--mf-panel-border-color);
    border-radius: var(--mf-border-radius-medium);
    padding-block: var(--mf-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(mf-divider) {
    --spacing: var(--mf-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--mf-font-size-small);
    font-weight: var(--mf-font-weight-semibold);
    color: var(--mf-color-neutral-500);
    padding-block: var(--mf-spacing-x-small);
    padding-inline: var(--mf-spacing-x-large);
  }
`;
