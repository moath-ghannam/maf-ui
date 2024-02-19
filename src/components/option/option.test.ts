import '../../../dist/shoelace.js';
import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type MfOption from './option.js';

describe('<mf-option>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<MfOption>(html`
      <mf-select label="Select one">
        <mf-option value="1">Option 1</mf-option>
        <mf-option value="2">Option 2</mf-option>
        <mf-option value="3">Option 3</mf-option>
        <mf-option value="4" disabled>Disabled</mf-option>
      </mf-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<MfOption>(html` <mf-option>Test</mf-option> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<MfOption>(html` <mf-option>Test</mf-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits the slotchange event when the label changes', async () => {
    const el = await fixture<MfOption>(html` <mf-option>Text</mf-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should convert non-string values to string', async () => {
    const el = await fixture<MfOption>(html` <mf-option>Text</mf-option> `);

    // @ts-expect-error - intentional
    el.value = 10;
    await el.updateComplete;

    expect(el.value).to.equal('10');
  });

  it('should escape HTML when calling getTextLabel()', async () => {
    const el = await fixture<MfOption>(html` <mf-option><strong>Option</strong></mf-option> `);
    expect(el.getTextLabel()).to.equal('Option');
  });
});
