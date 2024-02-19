import { css } from 'lit';

export default css`
  :host {
    --error-color: var(--mf-color-danger-600);
    --success-color: var(--mf-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--mf-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--mf-spacing-x-small);
    cursor: pointer;
    transition: var(--mf-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--mf-focus-ring);
    outline-offset: var(--mf-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;
