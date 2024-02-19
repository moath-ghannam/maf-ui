import MfColorPicker from './color-picker.component.js';

export * from './color-picker.component.js';
export default MfColorPicker;

MfColorPicker.define('mf-color-picker');

declare global {
  interface HTMLElementTagNameMap {
    'mf-color-picker': MfColorPicker;
  }
}
