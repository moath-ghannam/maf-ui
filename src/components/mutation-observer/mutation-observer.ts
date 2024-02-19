import MfMutationObserver from './mutation-observer.component.js';

export * from './mutation-observer.component.js';
export default MfMutationObserver;

MfMutationObserver.define('mf-mutation-observer');

declare global {
  interface HTMLElementTagNameMap {
    'mf-mutation-observer': MfMutationObserver;
  }
}
