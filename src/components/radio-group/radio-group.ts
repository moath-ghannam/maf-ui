import MfRadioGroup from './radio-group.component.js';

export * from './radio-group.component.js';
export default MfRadioGroup;

MfRadioGroup.define('mf-radio-group');

declare global {
  interface HTMLElementTagNameMap {
    'mf-radio-group': MfRadioGroup;
  }
}
