export type MfRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-remove': MfRemoveEvent;
  }
}
