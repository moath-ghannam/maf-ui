import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type MfCopyButton from './copy-button.js';

// We use aria-live to announce labels via tooltips
const ignoredRules = ['button-name'];

describe('<mf-copy-button>', () => {
  let el: MfCopyButton;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture(html`<mf-copy-button value="something"></mf-copy-button> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
