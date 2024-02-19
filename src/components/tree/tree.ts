import MfTree from './tree.component.js';

export * from './tree.component.js';
export default MfTree;

MfTree.define('mf-tree');

declare global {
  interface HTMLElementTagNameMap {
    'mf-tree': MfTree;
  }
}
