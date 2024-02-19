import MfDropdown from './dropdown.component.js';

export * from './dropdown.component.js';
export default MfDropdown;

MfDropdown.define('mf-dropdown');

declare global {
  interface HTMLElementTagNameMap {
    'mf-dropdown': MfDropdown;
  }
}
