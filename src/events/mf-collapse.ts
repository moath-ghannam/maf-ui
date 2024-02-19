export type MfCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-collapse': MfCollapseEvent;
  }
}
