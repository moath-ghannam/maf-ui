export type MfCopyEvent = CustomEvent<{ value: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'mf-copy': MfCopyEvent;
  }
}
