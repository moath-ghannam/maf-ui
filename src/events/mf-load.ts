export type MfLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-load': MfLoadEvent;
  }
}
