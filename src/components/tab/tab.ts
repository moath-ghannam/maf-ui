import MfTab from './tab.component.js';

export * from './tab.component.js';
export default MfTab;

MfTab.define('mf-tab');

declare global {
  interface HTMLElementTagNameMap {
    'mf-tab': MfTab;
  }
}
