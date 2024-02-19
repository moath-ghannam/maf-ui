import '../../../dist/shoelace.js';
// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type { MfHideEvent } from '../../events/mf-hide.js';
import type { MfShowEvent } from '../../events/mf-show.js';
import type MfDetails from './details.js';

describe('<mf-details>', () => {
  describe('accessibility', () => {
    it('should be accessible when closed', async () => {
      const details = await fixture<MfDetails>(html`<mf-details summary="Test"> Test text </mf-details>`);

      await expect(details).to.be.accessible();
    });

    it('should be accessible when open', async () => {
      const details = await fixture<MfDetails>(html`<mf-details open summary="Test">Test text</mf-details>`);

      await expect(details).to.be.accessible();
    });
  });

  it('should be visible with the open attribute', async () => {
    const el = await fixture<MfDetails>(html`
      <mf-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(parseInt(getComputedStyle(body).height)).to.be.greaterThan(0);
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<MfDetails>(html`
      <mf-details summary="click me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    expect(parseInt(getComputedStyle(body).height)).to.equal(0);
  });

  it('should emit mf-show and mf-after-show when calling show()', async () => {
    const el = await fixture<MfDetails>(html`
      <mf-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('mf-show', showHandler);
    el.addEventListener('mf-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
  });

  it('should emit mf-hide and mf-after-hide when calling hide()', async () => {
    const el = await fixture<MfDetails>(html`
      <mf-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should emit mf-show and mf-after-show when setting open = true', async () => {
    const el = await fixture<MfDetails>(html`
      <mf-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
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
    const el = await fixture<MfDetails>(html`
      <mf-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should not open when preventing mf-show', async () => {
    const el = await fixture<MfDetails>(html`
      <mf-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const showHandler = sinon.spy((event: MfShowEvent) => event.preventDefault());

    el.addEventListener('mf-show', showHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it('should not close when preventing mf-hide', async () => {
    const el = await fixture<MfDetails>(html`
      <mf-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </mf-details>
    `);
    const hideHandler = sinon.spy((event: MfHideEvent) => event.preventDefault());

    el.addEventListener('mf-hide', hideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(el.open).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<MfDetails>(html`
      <div>
        <mf-details>
          <div style="height: 200px;"></div>
        </mf-details>
        <mf-details>
          <div style="height: 400px;"></div>
        </mf-details>
      </div>
    `);
    const first = el.querySelectorAll('mf-details')[0];
    const second = el.querySelectorAll('mf-details')[1];
    const firstBody = first.shadowRoot!.querySelector('.details__body')!;
    const secondBody = second.shadowRoot!.querySelector('.details__body')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(232); // 200 + 16px + 16px (vertical padding)
    expect(secondBody.clientHeight).to.equal(432); // 400 + 16px + 16px (vertical padding)
  });
});
