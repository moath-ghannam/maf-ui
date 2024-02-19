import MfSpinner from './spinner.component.js';

export * from './spinner.component.js';
export default MfSpinner;

MfSpinner.define('mf-spinner');

declare global {
  interface HTMLElementTagNameMap {
    'mf-spinner': MfSpinner;
  }
}
