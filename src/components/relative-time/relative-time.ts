import MfRelativeTime from './relative-time.component.js';

export * from './relative-time.component.js';
export default MfRelativeTime;

MfRelativeTime.define('mf-relative-time');

declare global {
  interface HTMLElementTagNameMap {
    'mf-relative-time': MfRelativeTime;
  }
}
