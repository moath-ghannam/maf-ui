import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type MfMenuLabel from './menu-label.js';

describe('<mf-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<MfMenuLabel>(html` <mf-menu-label>Test</mf-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
