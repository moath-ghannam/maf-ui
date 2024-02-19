import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--mf-input-font-family);
    font-weight: var(--mf-input-font-weight);
    line-height: var(--mf-line-height-normal);
    letter-spacing: var(--mf-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--mf-transition-fast) color,
      var(--mf-transition-fast) border,
      var(--mf-transition-fast) box-shadow,
      var(--mf-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--mf-input-background-color);
    border: solid var(--mf-input-border-width) var(--mf-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--mf-input-background-color-hover);
    border-color: var(--mf-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--mf-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--mf-input-background-color-focus);
    border-color: var(--mf-input-border-color-focus);
    color: var(--mf-input-color-focus);
    box-shadow: 0 0 0 var(--mf-focus-ring-width) var(--mf-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--mf-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--mf-input-background-color-disabled);
    border-color: var(--mf-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--mf-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--mf-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--mf-input-filled-background-color);
    color: var(--mf-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--mf-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--mf-input-filled-background-color-focus);
    outline: var(--mf-focus-ring);
    outline-offset: var(--mf-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--mf-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--mf-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--mf-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--mf-input-border-radius-small);
    font-size: var(--mf-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--mf-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--mf-input-border-radius-medium);
    font-size: var(--mf-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--mf-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--mf-input-border-radius-large);
    font-size: var(--mf-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--mf-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;
