import MfResizeObserver from './resize-observer.component.js';

export * from './resize-observer.component.js';
export default MfResizeObserver;

MfResizeObserver.define('mf-resize-observer');

declare global {
  interface HTMLElementTagNameMap {
    'mf-resize-observer': MfResizeObserver;
  }
}
