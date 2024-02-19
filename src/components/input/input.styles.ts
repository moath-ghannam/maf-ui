import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--mf-input-font-family);
    font-weight: var(--mf-input-font-weight);
    letter-spacing: var(--mf-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--mf-transition-fast) color,
      var(--mf-transition-fast) border,
      var(--mf-transition-fast) box-shadow,
      var(--mf-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--mf-input-background-color);
    border: solid var(--mf-input-border-width) var(--mf-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--mf-input-background-color-hover);
    border-color: var(--mf-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--mf-input-background-color-focus);
    border-color: var(--mf-input-border-color-focus);
    box-shadow: 0 0 0 var(--mf-focus-ring-width) var(--mf-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--mf-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--mf-input-background-color-disabled);
    border-color: var(--mf-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--mf-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--mf-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--mf-input-filled-background-color);
    color: var(--mf-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--mf-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--mf-input-filled-background-color-focus);
    outline: var(--mf-focus-ring);
    outline-offset: var(--mf-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--mf-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--mf-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--mf-input-height-large) var(--mf-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--mf-color-primary-500);
    caret-color: var(--mf-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--mf-input-height-large) var(--mf-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--mf-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--mf-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(mf-icon),
  .input__suffix ::slotted(mf-icon) {
    color: var(--mf-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--mf-input-border-radius-small);
    font-size: var(--mf-input-font-size-small);
    height: var(--mf-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--mf-input-height-small) - var(--mf-input-border-width) * 2);
    padding: 0 var(--mf-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--mf-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--mf-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--mf-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--mf-input-border-radius-medium);
    font-size: var(--mf-input-font-size-medium);
    height: var(--mf-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--mf-input-height-medium) - var(--mf-input-border-width) * 2);
    padding: 0 var(--mf-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--mf-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--mf-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--mf-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--mf-input-border-radius-large);
    font-size: var(--mf-input-font-size-large);
    height: var(--mf-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--mf-input-height-large) - var(--mf-input-border-width) * 2);
    padding: 0 var(--mf-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--mf-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--mf-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--mf-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--mf-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--mf-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--mf-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
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

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--mf-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;
