export type MfChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-change': MfChangeEvent;
  }
}
