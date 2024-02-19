export type MfCloseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-close': MfCloseEvent;
  }
}
