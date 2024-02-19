export type MfInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-initial-focus': MfInitialFocusEvent;
  }
}
