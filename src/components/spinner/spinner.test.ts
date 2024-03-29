import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type MfSpinner from './spinner.js';

describe('<mf-spinner>', () => {
  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      const spinner = await fixture<MfSpinner>(html` <mf-spinner></mf-spinner> `);
      await expect(spinner).to.be.accessible();
    });

    it('should have a role of "status".', async () => {
      const spinner = await fixture<MfSpinner>(html` <mf-spinner></mf-spinner> `);
      const base = spinner.shadowRoot!.querySelector('[part~="base"]')!;
      expect(base).have.attribute('role', 'progressbar');
    });

    it('should use "transform: rotate(x)" instead of "rotate: x" when animating', async () => {
      const spinner = await fixture<MfSpinner>(html` <mf-spinner></mf-spinner> `);
      const indicator = spinner.shadowRoot!.querySelector('.spinner__indicator')!;

      //
      // This matrix is the computed value when using `transform: rotate(x)` on the indicator. When using `rotate: x`,
      // it will be "none" instead.
      //
      // Related: https://github.com/shoelace-style/shoelace/issues/1121
      //
      expect(getComputedStyle(indicator).transform).to.equal('matrix(1, 0, 0, 1, 0, 0)');
    });

    it('should have flex:none to prevent flex re-sizing', async () => {
      const spinner = await fixture<MfSpinner>(html` <mf-spinner></mf-spinner> `);

      // 0 0 auto is a compiled value for `none`
      expect(getComputedStyle(spinner).flex).to.equal('0 0 auto');
    });
  });
});
