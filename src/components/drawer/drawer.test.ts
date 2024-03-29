import '../../../dist/shoelace.js';
// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type MfDrawer from './drawer.js';

describe('<mf-drawer>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<MfDrawer>(html`
      <mf-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mf-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<MfDrawer>(html`
      <mf-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mf-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit mf-show and mf-after-show when calling show()', async () => {
    const el = await fixture<MfDrawer>(html`
      <mf-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mf-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('mf-show', showHandler);
    el.addEventListener('mf-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit mf-hide and mf-after-hide when calling hide()', async () => {
    const el = await fixture<MfDrawer>(html`
      <mf-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mf-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit mf-show and mf-after-show when setting open = true', async () => {
    const el = await fixture<MfDrawer>(html`
      <mf-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mf-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('mf-show', showHandler);
    el.addEventListener('mf-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit mf-hide and mf-after-hide when setting open = false', async () => {
    const el = await fixture<MfDrawer>(html`
      <mf-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mf-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when mf-request-close is prevented', async () => {
    const el = await fixture<MfDrawer>(html`
      <mf-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</mf-drawer>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part~="overlay"]')!;

    el.addEventListener('mf-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<MfDrawer>(html` <mf-drawer><input /></mf-drawer> `);
    const input = el.querySelector<HTMLInputElement>('input')!;
    const initialFocusHandler = sinon.spy((event: InputEvent) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('mf-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });

  it('should close when pressing Escape', async () => {
    const el = await fixture<MfDrawer>(html` <mf-drawer open></mf-drawer> `);
    const hideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);

    await sendKeys({ press: 'Escape' });
    await waitUntil(() => hideHandler.calledOnce);

    expect(el.open).to.be.false;
  });
});
