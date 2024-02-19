export type MfInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-invalid': MfInvalidEvent;
  }
}
