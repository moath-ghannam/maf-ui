import { css } from 'lit';

export default css`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--mf-font-sans);
    font-size: var(--mf-font-size-medium);
    font-weight: var(--mf-font-weight-normal);
    line-height: var(--mf-line-height-normal);
    letter-spacing: var(--mf-letter-spacing-normal);
    color: var(--mf-color-neutral-700);
    padding: var(--mf-spacing-x-small) var(--mf-spacing-medium) var(--mf-spacing-x-small) var(--mf-spacing-x-small);
    transition: var(--mf-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--mf-color-neutral-100);
    color: var(--mf-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--mf-color-primary-600);
    color: var(--mf-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--mf-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--mf-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--mf-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--mf-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
