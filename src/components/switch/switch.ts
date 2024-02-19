import MfSwitch from './switch.component.js';

export * from './switch.component.js';
export default MfSwitch;

MfSwitch.define('mf-switch');

declare global {
  interface HTMLElementTagNameMap {
    'mf-switch': MfSwitch;
  }
}
