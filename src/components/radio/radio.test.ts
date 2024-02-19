import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type MfRadio from './radio.js';
import type MfRadioGroup from '../radio-group/radio-group.js';

describe('<mf-radio>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<MfRadioGroup>(html`
      <mf-radio-group value="1">
        <mf-radio id="radio-1" value="1"></mf-radio>
        <mf-radio id="radio-2" value="2" disabled></mf-radio>
      </mf-radio-group>
    `);
    const radio1 = radioGroup.querySelector<MfRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<MfRadio>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
