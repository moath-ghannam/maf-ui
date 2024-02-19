import MfProgressRing from './progress-ring.component.js';

export * from './progress-ring.component.js';
export default MfProgressRing;

MfProgressRing.define('mf-progress-ring');

declare global {
  interface HTMLElementTagNameMap {
    'mf-progress-ring': MfProgressRing;
  }
}
