import MfAlert from './alert.component.js';

export * from './alert.component.js';
export default MfAlert;

MfAlert.define('mf-alert');

declare global {
  interface HTMLElementTagNameMap {
    'mf-alert': MfAlert;
  }
}
