import MfSelect from './select.component.js';

export * from './select.component.js';
export default MfSelect;

MfSelect.define('mf-select');

declare global {
  interface HTMLElementTagNameMap {
    'mf-select': MfSelect;
  }
}
