import type MfTreeItem from '../components/tree-item/tree-item.js';

export type MfSelectionChangeEvent = CustomEvent<{ selection: MfTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-selection-change': MfSelectionChangeEvent;
  }
}
