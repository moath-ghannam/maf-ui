import MfTabGroup from './tab-group.component.js';

export * from './tab-group.component.js';
export default MfTabGroup;

MfTabGroup.define('mf-tab-group');

declare global {
  interface HTMLElementTagNameMap {
    'mf-tab-group': MfTabGroup;
  }
}
