export type MfAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-after-collapse': MfAfterCollapseEvent;
  }
}
