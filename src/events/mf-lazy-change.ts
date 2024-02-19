export type MfLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-lazy-change': MfLazyChangeEvent;
  }
}
