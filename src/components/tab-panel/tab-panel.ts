import MfTabPanel from './tab-panel.component.js';

export * from './tab-panel.component.js';
export default MfTabPanel;

MfTabPanel.define('mf-tab-panel');

declare global {
  interface HTMLElementTagNameMap {
    'mf-tab-panel': MfTabPanel;
  }
}
