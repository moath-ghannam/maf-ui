import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type MfSkeleton from './skeleton.js';

describe('<mf-skeleton>', () => {
  it('should render default skeleton', async () => {
    const el = await fixture<MfSkeleton>(html` <mf-skeleton></mf-skeleton> `);

    await expect(el).to.be.accessible();

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const indicator = el.shadowRoot!.querySelector<HTMLElement>('[part~="indicator"]')!;

    expect(base.getAttribute('class')).to.equal(' skeleton ');
    expect(indicator.getAttribute('class')).to.equal('skeleton__indicator');
  });

  it('should set pulse effect by attribute', async () => {
    const el = await fixture<MfSkeleton>(html` <mf-skeleton effect="pulse"></mf-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' skeleton skeleton--pulse ');
  });

  it('should set sheen effect by attribute', async () => {
    const el = await fixture<MfSkeleton>(html` <mf-skeleton effect="sheen"></mf-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' skeleton skeleton--sheen ');
  });
});
