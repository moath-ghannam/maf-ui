import MfTreeItem from './tree-item.component.js';

export * from './tree-item.component.js';
export default MfTreeItem;

MfTreeItem.define('mf-tree-item');

declare global {
  interface HTMLElementTagNameMap {
    'mf-tree-item': MfTreeItem;
  }
}
