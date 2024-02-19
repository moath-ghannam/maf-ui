import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-popup></mf-popup> `);

    expect(el).to.exist;
  });
});
