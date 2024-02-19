export type MfHoverEvent = CustomEvent<{
  phase: 'start' | 'move' | 'end';
  value: number;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-hover': MfHoverEvent;
  }
}
