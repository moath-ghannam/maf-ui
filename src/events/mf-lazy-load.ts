export type MfLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-lazy-load': MfLazyLoadEvent;
  }
}
