export type MfResizeEvent = CustomEvent<{ entries: ResizeObserverEntry[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-resize': MfResizeEvent;
  }
}
