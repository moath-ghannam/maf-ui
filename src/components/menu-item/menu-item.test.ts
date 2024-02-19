import '../../../dist/shoelace.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type { MfSelectEvent } from '../../events/mf-select.js';
import type MfMenuItem from './menu-item.js';

describe('<mf-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<MfMenuItem>(html`
      <mf-menu>
        <mf-menu-item>Item 1</mf-menu-item>
        <mf-menu-item>Item 2</mf-menu-item>
        <mf-menu-item>Item 3</mf-menu-item>
        <mf-divider></mf-divider>
        <mf-menu-item type="checkbox" checked>Checked</mf-menu-item>
        <mf-menu-item type="checkbox">Unchecked</mf-menu-item>
      </mf-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should pass accessibility tests when using a submenu', async () => {
    const el = await fixture<MfMenuItem>(html`
      <mf-menu>
        <mf-menu-item>
          Submenu
          <mf-menu slot="submenu">
            <mf-menu-item>Submenu Item 1</mf-menu-item>
            <mf-menu-item>Submenu Item 2</mf-menu-item>
          </mf-menu>
        </mf-menu-item>
      </mf-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<MfMenuItem>(html` <mf-menu-item>Test</mf-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.loading).to.equal(false);
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<MfMenuItem>(html` <mf-menu-item disabled>Test</mf-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  describe('when loading', () => {
    it('should have a spinner present', async () => {
      const el = await fixture<MfMenuItem>(html` <mf-menu-item loading>Menu Item Label</mf-menu-item> `);
      expect(el.shadowRoot!.querySelector('mf-spinner')).to.exist;
    });
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<MfMenuItem>(html` <mf-menu-item>Test</mf-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<MfMenuItem>(html` <mf-menu-item>Text</mf-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<MfMenuItem>(html`
      <mf-menu>
        <mf-menu-item inert>Item 1</mf-menu-item>
        <mf-menu-item>Item 2</mf-menu-item>
        <mf-menu-item>Item 3</mf-menu-item>
      </mf-menu>
    `);
    const item1 = menu.querySelector('mf-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });

  it('should not render a mf-popup if the slot="submenu" attribute is missing, but the slot should exist in the component and be hidden.', async () => {
    const menu = await fixture<MfMenuItem>(html`
      <mf-menu>
        <mf-menu-item>
          Item 1
          <mf-menu>
            <mf-menu-item> Nested Item 1 </mf-menu-item>
          </mf-menu>
        </mf-menu-item>
      </mf-menu>
    `);

    const menuItem: HTMLElement = menu.querySelector('mf-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('mf-popup')).to.be.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.true;
  });

  it('should render an mf-popup if the slot="submenu" attribute is present', async () => {
    const menu = await fixture<MfMenuItem>(html`
      <mf-menu>
        <mf-menu-item id="test">
          Item 1
          <mf-menu slot="submenu">
            <mf-menu-item> Nested Item 1 </mf-menu-item>
          </mf-menu>
        </mf-menu-item>
      </mf-menu>
    `);

    const menuItem = menu.querySelector('mf-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('mf-popup')).to.be.not.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.false;
  });

  it('should focus on first menuitem of submenu if ArrowRight is pressed on parent menuitem', async () => {
    const menu = await fixture<MfMenuItem>(html`
      <mf-menu>
        <mf-menu-item id="item-1">
          Submenu
          <mf-menu slot="submenu">
            <mf-menu-item value="submenu-item-1"> Nested Item 1 </mf-menu-item>
          </mf-menu>
        </mf-menu-item>
      </mf-menu>
    `);

    const selectHandler = sinon.spy((event: MfSelectEvent) => {
      const item = event.detail.item;
      expect(item.value).to.equal('submenu-item-1');
    });
    menu.addEventListener('mf-select', selectHandler);

    const submenu = menu.querySelector('mf-menu-item');
    submenu!.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });
    await menu.updateComplete;
    await sendKeys({ press: 'Enter' });
    await menu.updateComplete;
    // Once for each menu element.
    expect(selectHandler).to.have.been.calledTwice;
  });

  it('should focus on outer menu if ArrowRight is pressed on nested menuitem', async () => {
    const menu = await fixture<MfMenuItem>(html`
      <mf-menu>
        <mf-menu-item value="outer-item-1">
          Submenu
          <mf-menu slot="submenu">
            <mf-menu-item value="inner-item-1"> Nested Item 1 </mf-menu-item>
          </mf-menu>
        </mf-menu-item>
      </mf-menu>
    `);

    const focusHandler = sinon.spy((event: FocusEvent) => {
      expect(event.target.value).to.equal('outer-item-1');
      expect(event.relatedTarget.value).to.equal('inner-item-1');
    });

    const outerItem = menu.querySelector('mf-menu-item');
    outerItem!.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });

    outerItem.addEventListener('focus', focusHandler);
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowLeft' });
    await menu.updateComplete;
    expect(focusHandler).to.have.been.calledOnce;
  });
});
