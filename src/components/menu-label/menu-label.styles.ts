import { css } from 'lit';
export default css`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--mf-font-sans);
    font-size: var(--mf-font-size-small);
    font-weight: var(--mf-font-weight-semibold);
    line-height: var(--mf-line-height-normal);
    letter-spacing: var(--mf-letter-spacing-normal);
    color: var(--mf-color-neutral-500);
    padding: var(--mf-spacing-2x-small) var(--mf-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;
