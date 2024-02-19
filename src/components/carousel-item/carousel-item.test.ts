import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<mf-carousel-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <mf-carousel-item></mf-carousel-item> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    // Arrange
    const el = await fixture(html` <mf-carousel-item></mf-carousel-item> `);

    // Assert
    await expect(el).to.be.accessible();
  });
});
