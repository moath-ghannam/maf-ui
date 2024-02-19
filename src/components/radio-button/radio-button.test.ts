import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type MfRadioButton from './radio-button.js';
import type MfRadioGroup from '../radio-group/radio-group.js';

describe('<mf-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<MfRadioGroup>(html`
      <mf-radio-group value="1">
        <mf-radio-button id="radio-1" value="1"></mf-radio-button>
        <mf-radio-button id="radio-2" value="2" disabled></mf-radio-button>
      </mf-radio-group>
    `);
    const radio1 = radioGroup.querySelector<MfRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<MfRadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });

  it('should receive positional classes from <mf-button-group>', async () => {
    const radioGroup = await fixture<MfRadioGroup>(html`
      <mf-radio-group value="1">
        <mf-radio-button id="radio-1" value="1"></mf-radio-button>
        <mf-radio-button id="radio-2" value="2"></mf-radio-button>
        <mf-radio-button id="radio-3" value="3"></mf-radio-button>
      </mf-radio-group>
    `);
    const radio1 = radioGroup.querySelector<MfRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<MfRadioButton>('#radio-2')!;
    const radio3 = radioGroup.querySelector<MfRadioButton>('#radio-3')!;

    await Promise.all([radioGroup.updateComplete, radio1.updateComplete, radio2.updateComplete, radio3.updateComplete]);

    expect(radio1.classList.contains('mf-button-group__button')).to.be.true;
    expect(radio1.classList.contains('mf-button-group__button--first')).to.be.true;
    expect(radio2.classList.contains('mf-button-group__button')).to.be.true;
    expect(radio2.classList.contains('mf-button-group__button--inner')).to.be.true;
    expect(radio3.classList.contains('mf-button-group__button')).to.be.true;
    expect(radio3.classList.contains('mf-button-group__button--last')).to.be.true;
  });
});
