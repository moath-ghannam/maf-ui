import MfProgressBar from './progress-bar.component.js';

export * from './progress-bar.component.js';
export default MfProgressBar;

MfProgressBar.define('mf-progress-bar');

declare global {
  interface HTMLElementTagNameMap {
    'mf-progress-bar': MfProgressBar;
  }
}
