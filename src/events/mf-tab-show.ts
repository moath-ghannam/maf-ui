export type MfTabShowEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-tab-show': MfTabShowEvent;
  }
}
