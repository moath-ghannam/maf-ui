export type MfFinishEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-finish': MfFinishEvent;
  }
}
