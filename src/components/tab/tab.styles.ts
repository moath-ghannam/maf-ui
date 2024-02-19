import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--mf-font-sans);
    font-size: var(--mf-font-size-small);
    font-weight: var(--mf-font-weight-semibold);
    border-radius: var(--mf-border-radius-medium);
    color: var(--mf-color-neutral-600);
    padding: var(--mf-spacing-medium) var(--mf-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--mf-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--mf-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--mf-focus-ring);
    outline-offset: calc(-1 * var(--mf-focus-ring-width) - var(--mf-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--mf-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--mf-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--mf-font-size-small);
    margin-inline-start: var(--mf-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--mf-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
