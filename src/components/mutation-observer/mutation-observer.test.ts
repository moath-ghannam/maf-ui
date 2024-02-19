import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-mutation-observer></mf-mutation-observer> `);

    expect(el).to.exist;
  });
});
