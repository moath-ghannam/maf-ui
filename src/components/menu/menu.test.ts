import '../../../dist/shoelace.js';
import { clickOnElement } from '../../internal/test.js';
import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type { MfSelectEvent } from '../../events/mf-select.js';
import type MfMenu from './menu.js';

describe('<mf-menu>', () => {
  it('emits mf-select with the correct event detail when clicking an item', async () => {
    const menu = await fixture<MfMenu>(html`
      <mf-menu>
        <mf-menu-item value="item-1">Item 1</mf-menu-item>
        <mf-menu-item value="item-2">Item 2</mf-menu-item>
        <mf-menu-item value="item-3">Item 3</mf-menu-item>
        <mf-menu-item value="item-4">Item 4</mf-menu-item>
      </mf-menu>
    `);
    const item2 = menu.querySelectorAll('mf-menu-item')[1];
    const selectHandler = sinon.spy((event: MfSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect event detail emitted with mf-select');
      }
    });

    menu.addEventListener('mf-select', selectHandler);
    await clickOnElement(item2);

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('can be selected via keyboard', async () => {
    const menu = await fixture<MfMenu>(html`
      <mf-menu>
        <mf-menu-item value="item-1">Item 1</mf-menu-item>
        <mf-menu-item value="item-2">Item 2</mf-menu-item>
        <mf-menu-item value="item-3">Item 3</mf-menu-item>
        <mf-menu-item value="item-4">Item 4</mf-menu-item>
      </mf-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('mf-menu-item');
    const selectHandler = sinon.spy((event: MfSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect item selected');
      }
    });

    menu.addEventListener('mf-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await sendKeys({ press: 'Enter' });

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('does not select disabled items when clicking', async () => {
    const menu = await fixture<MfMenu>(html`
      <mf-menu>
        <mf-menu-item value="item-1">Item 1</mf-menu-item>
        <mf-menu-item value="item-2" disabled>Item 2</mf-menu-item>
        <mf-menu-item value="item-3">Item 3</mf-menu-item>
        <mf-menu-item value="item-4">Item 4</mf-menu-item>
      </mf-menu>
    `);
    const item2 = menu.querySelectorAll('mf-menu-item')[1];
    const selectHandler = sinon.spy();

    menu.addEventListener('mf-select', selectHandler);

    await clickOnElement(item2);

    expect(selectHandler).to.not.have.been.calledOnce;
  });

  it('does not select disabled items when pressing enter', async () => {
    const menu = await fixture<MfMenu>(html`
      <mf-menu>
        <mf-menu-item value="item-1">Item 1</mf-menu-item>
        <mf-menu-item value="item-2" disabled>Item 2</mf-menu-item>
        <mf-menu-item value="item-3">Item 3</mf-menu-item>
        <mf-menu-item value="item-4">Item 4</mf-menu-item>
      </mf-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('mf-menu-item');
    const selectHandler = sinon.spy();

    menu.addEventListener('mf-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    expect(document.activeElement).to.equal(item2);
    await sendKeys({ press: 'Enter' });
    await item2.updateComplete;

    expect(selectHandler).to.not.have.been.called;
  });
});

// @see https://github.com/shoelace-style/shoelace/issues/1596
it('Should fire "mf-select" when clicking an element within a menu-item', async () => {
  // eslint-disable-next-line
  const selectHandler = sinon.spy(() => {});

  const menu: MfMenu = await fixture(html`
    <mf-menu>
      <mf-menu-item>
        <span>Menu item</span>
      </mf-menu-item>
    </mf-menu>
  `);

  menu.addEventListener('mf-select', selectHandler);
  const span = menu.querySelector('span')!;
  await clickOnElement(span);

  expect(selectHandler).to.have.been.calledOnce;
});
