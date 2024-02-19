import MfButtonGroup from './button-group.component.js';

export * from './button-group.component.js';
export default MfButtonGroup;

MfButtonGroup.define('mf-button-group');

declare global {
  interface HTMLElementTagNameMap {
    'mf-button-group': MfButtonGroup;
  }
}
