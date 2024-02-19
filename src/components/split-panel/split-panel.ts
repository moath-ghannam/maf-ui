import MfSplitPanel from './split-panel.component.js';

export * from './split-panel.component.js';
export default MfSplitPanel;

MfSplitPanel.define('mf-split-panel');

declare global {
  interface HTMLElementTagNameMap {
    'mf-split-panel': MfSplitPanel;
  }
}
