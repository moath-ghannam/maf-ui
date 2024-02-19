import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--mf-color-primary-50);
    border-color: var(--mf-color-primary-200);
    color: var(--mf-color-primary-800);
  }

  .tag--primary:active > mf-icon-button {
    color: var(--mf-color-primary-600);
  }

  .tag--success {
    background-color: var(--mf-color-success-50);
    border-color: var(--mf-color-success-200);
    color: var(--mf-color-success-800);
  }

  .tag--success:active > mf-icon-button {
    color: var(--mf-color-success-600);
  }

  .tag--neutral {
    background-color: var(--mf-color-neutral-50);
    border-color: var(--mf-color-neutral-200);
    color: var(--mf-color-neutral-800);
  }

  .tag--neutral:active > mf-icon-button {
    color: var(--mf-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--mf-color-warning-50);
    border-color: var(--mf-color-warning-200);
    color: var(--mf-color-warning-800);
  }

  .tag--warning:active > mf-icon-button {
    color: var(--mf-color-warning-600);
  }

  .tag--danger {
    background-color: var(--mf-color-danger-50);
    border-color: var(--mf-color-danger-200);
    color: var(--mf-color-danger-800);
  }

  .tag--danger:active > mf-icon-button {
    color: var(--mf-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--mf-button-font-size-small);
    height: calc(var(--mf-input-height-small) * 0.8);
    line-height: calc(var(--mf-input-height-small) - var(--mf-input-border-width) * 2);
    border-radius: var(--mf-input-border-radius-small);
    padding: 0 var(--mf-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--mf-button-font-size-medium);
    height: calc(var(--mf-input-height-medium) * 0.8);
    line-height: calc(var(--mf-input-height-medium) - var(--mf-input-border-width) * 2);
    border-radius: var(--mf-input-border-radius-medium);
    padding: 0 var(--mf-spacing-small);
  }

  .tag--large {
    font-size: var(--mf-button-font-size-large);
    height: calc(var(--mf-input-height-large) * 0.8);
    line-height: calc(var(--mf-input-height-large) - var(--mf-input-border-width) * 2);
    border-radius: var(--mf-input-border-radius-large);
    padding: 0 var(--mf-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--mf-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--mf-border-radius-pill);
  }
`;
