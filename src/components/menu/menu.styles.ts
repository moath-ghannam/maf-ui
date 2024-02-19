import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
    background: var(--mf-panel-background-color);
    border: solid var(--mf-panel-border-width) var(--mf-panel-border-color);
    border-radius: var(--mf-border-radius-medium);
    padding: var(--mf-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(mf-divider) {
    --spacing: var(--mf-spacing-x-small);
  }
`;
