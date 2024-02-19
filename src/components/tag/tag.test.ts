import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type MfTag from './tag.js';

describe('<mf-tag>', () => {
  it('should render default tag', async () => {
    const el = await fixture<MfTag>(html` <mf-tag>Test</mf-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('size')).to.equal('medium');
    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--medium ');
  });

  it('should set variant by attribute', async () => {
    const el = await fixture<MfTag>(html` <mf-tag variant="danger">Test</mf-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' tag tag--danger tag--medium ');
  });

  it('should set size by attribute', async () => {
    const el = await fixture<MfTag>(html` <mf-tag size="large">Test</mf-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--large ');
  });

  it('should set pill-attribute by attribute', async () => {
    const el = await fixture<MfTag>(html` <mf-tag pill>Test</mf-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--medium tag--pill ');
  });

  it('should set removable by attribute', async () => {
    const el = await fixture<MfTag>(html` <mf-tag removable>Test</mf-tag> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const removeButton = el.shadowRoot!.querySelector('[part~="remove-button"]');

    expect(el.removable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' tag tag--neutral tag--medium tag--removable ');
    expect(removeButton).not.to.be.null;
  });

  describe('removable', () => {
    it('should emit remove event when remove button clicked', async () => {
      const el = await fixture<MfTag>(html` <mf-tag removable>Test</mf-tag> `);

      const removeButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="remove-button"]')!;
      const spy = sinon.spy();

      el.addEventListener('mf-remove', spy, { once: true });

      removeButton.click();

      expect(spy.called).to.equal(true);
    });
  });
});
