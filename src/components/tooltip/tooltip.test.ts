import '../../../dist/shoelace.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type MfTooltip from './tooltip.js';

describe('<mf-tooltip>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip" open>
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip">
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit mf-show and mf-after-show when calling show()', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip">
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('mf-show', showHandler);
    el.addEventListener('mf-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit mf-hide and mf-after-hide when calling hide()', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip" open>
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit mf-show and mf-after-show when setting open = true', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip">
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('mf-show', showHandler);
    el.addEventListener('mf-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit mf-hide and mf-after-hide when setting open = false', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip" open>
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should hide the tooltip when tooltip is visible and disabled becomes true', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip" open>
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.disabled = true;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should show when open initially', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip" open>
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    await el.updateComplete;

    expect(body.hidden).to.be.false;
  });

  it('should not accept user selection on the tooltip', async () => {
    const el = await fixture<MfTooltip>(html`
      <mf-tooltip content="This is a tooltip" open>
        <mf-button>Hover Me</mf-button>
      </mf-tooltip>
    `);
    const tooltipBody = el.shadowRoot!.querySelector('.tooltip__body')!;
    const userSelect = getComputedStyle(tooltipBody).userSelect || getComputedStyle(tooltipBody).webkitUserSelect;

    expect(userSelect).to.equal('none');
  });
});
