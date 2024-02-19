export type MfTabHideEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-tab-hide': MfTabHideEvent;
  }
}
