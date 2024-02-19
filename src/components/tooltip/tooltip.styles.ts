import { css } from 'lit';

export default css`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--mf-tooltip-arrow-size);
    --arrow-color: var(--mf-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--mf-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--mf-tooltip-border-radius);
    background-color: var(--mf-tooltip-background-color);
    font-family: var(--mf-tooltip-font-family);
    font-size: var(--mf-tooltip-font-size);
    font-weight: var(--mf-tooltip-font-weight);
    line-height: var(--mf-tooltip-line-height);
    color: var(--mf-tooltip-color);
    padding: var(--mf-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;
