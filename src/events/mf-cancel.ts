export type MfCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-cancel': MfCancelEvent;
  }
}
