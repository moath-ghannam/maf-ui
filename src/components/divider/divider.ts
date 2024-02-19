import MfDivider from './divider.component.js';

export * from './divider.component.js';
export default MfDivider;

MfDivider.define('mf-divider');

declare global {
  interface HTMLElementTagNameMap {
    'mf-divider': MfDivider;
  }
}
