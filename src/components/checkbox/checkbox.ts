import MfCheckbox from './checkbox.component.js';

export * from './checkbox.component.js';
export default MfCheckbox;

MfCheckbox.define('mf-checkbox');

declare global {
  interface HTMLElementTagNameMap {
    'mf-checkbox': MfCheckbox;
  }
}
