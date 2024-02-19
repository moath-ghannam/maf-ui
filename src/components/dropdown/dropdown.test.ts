import '../../../dist/shoelace.js';
import { clickOnElement } from '../../internal/test.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type MfDropdown from './dropdown.js';

describe('<mf-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown open>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
          <mf-menu-item>Item 3</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
          <mf-menu-item>Item 3</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.true;
  });

  it('should emit mf-show and mf-after-show when calling show()', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
          <mf-menu-item>Item 3</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('mf-show', showHandler);
    el.addEventListener('mf-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit mf-hide and mf-after-hide when calling hide()', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown open>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
          <mf-menu-item>Item 3</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should emit mf-show and mf-after-show when setting open = true', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
          <mf-menu-item>Item 3</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('mf-show', showHandler);
    el.addEventListener('mf-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit mf-hide and mf-after-hide when setting open = false', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown open>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
          <mf-menu-item>Item 3</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('mf-hide', hideHandler);
    el.addEventListener('mf-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should still open on arrow navigation when no menu items', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu> </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should open on arrow down navigation', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;
    const firstMenuItem = el.querySelectorAll('mf-menu-item')[0];

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
    expect(document.activeElement).to.equal(firstMenuItem);
  });

  it('should open on arrow up navigation', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;
    const secondMenuItem = el.querySelectorAll('mf-menu-item')[1];

    trigger.focus();
    await sendKeys({ press: 'ArrowUp' });
    await el.updateComplete;

    expect(el.open).to.be.true;
    expect(document.activeElement).to.equal(secondMenuItem);
  });

  it('should navigate to first focusable item on arrow navigation', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-label>Top Label</mf-menu-label>
          <mf-menu-item>Item 1</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;
    const item = el.querySelector('mf-menu-item')!;

    await clickOnElement(trigger);
    await trigger.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(document.activeElement).to.equal(item);
  });

  it('should close on escape key', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown open>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;

    trigger.focus();
    await sendKeys({ press: 'Escape' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should not open on arrow navigation when no menu exists', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <div>Some custom content</div>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should open on enter key', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should focus on menu items when clicking the trigger and arrowing through options', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
          <mf-menu-item>Item 2</mf-menu-item>
          <mf-menu-item>Item 3</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;
    const secondMenuItem = el.querySelectorAll('mf-menu-item')[1];

    await clickOnElement(trigger);
    await trigger.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(document.activeElement).to.equal(secondMenuItem);
  });

  it('should open on enter key when no menu exists', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <div>Some custom content</div>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should hide when clicked outside container and initially open', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown open>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);

    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should hide when clicked outside container', async () => {
    const el = await fixture<MfDropdown>(html`
      <mf-dropdown>
        <mf-button slot="trigger" caret>Toggle</mf-button>
        <mf-menu>
          <mf-menu-item>Item 1</mf-menu-item>
        </mf-menu>
      </mf-dropdown>
    `);
    const trigger = el.querySelector('mf-button')!;

    trigger.click();
    await el.updateComplete;
    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });
});
