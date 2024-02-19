import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--mf-input-font-family);
    font-size: var(--mf-input-font-size-medium);
    font-weight: var(--mf-input-font-weight);
    color: var(--mf-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--mf-toggle-size-small);
    font-size: var(--mf-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--mf-toggle-size-medium);
    font-size: var(--mf-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--mf-toggle-size-large);
    font-size: var(--mf-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--mf-input-border-width) var(--mf-input-border-color);
    border-radius: 50%;
    background-color: var(--mf-input-background-color);
    color: transparent;
    transition:
      var(--mf-transition-fast) border-color,
      var(--mf-transition-fast) background-color,
      var(--mf-transition-fast) color,
      var(--mf-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--mf-input-border-color-hover);
    background-color: var(--mf-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--mf-color-neutral-0);
    border-color: var(--mf-color-primary-600);
    background-color: var(--mf-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--mf-color-primary-500);
    background-color: var(--mf-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--mf-focus-ring);
    outline-offset: var(--mf-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--mf-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;
