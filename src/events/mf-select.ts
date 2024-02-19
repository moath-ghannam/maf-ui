import type MfMenuItem from '../components/menu-item/menu-item.js';

export type MfSelectEvent = CustomEvent<{ item: MfMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-select': MfSelectEvent;
  }
}
