import MfSkeleton from './skeleton.component.js';

export * from './skeleton.component.js';
export default MfSkeleton;

MfSkeleton.define('mf-skeleton');

declare global {
  interface HTMLElementTagNameMap {
    'mf-skeleton': MfSkeleton;
  }
}
