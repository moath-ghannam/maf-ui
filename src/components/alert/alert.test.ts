import '../../../dist/shoelace.js';
import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { clickOnElement, moveMouseOnElement } from '../../internal/test.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import { resetMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type MfAlert from './alert.js';
import type MfIconButton from '../icon-button/icon-button.js';

const getAlertContainer = (alert: MfAlert): HTMLElement => {
  return alert.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
};

const expectAlertToBeVisible = (alert: MfAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
  expect(style.visibility).not.to.equal('collapse');
};

const expectAlertToBeInvisible = (alert: MfAlert): void => {
  const alertContainer = getAlertContainer(alert);
  const style = window.getComputedStyle(alertContainer);
  expect(style.display, 'alert should be invisible').to.equal('none');
};

const expectHideAndAfterHideToBeEmittedInCorrectOrder = async (alert: MfAlert, action: () => void | Promise<void>) => {
  const hidePromise = oneEvent(alert, 'mf-hide');
  const afterHidePromise = oneEvent(alert, 'mf-after-hide');
  let afterHideHappened = false;
  oneEvent(alert, 'mf-after-hide').then(() => (afterHideHappened = true));

  action();

  await hidePromise;
  expect(afterHideHappened).to.be.false;

  await afterHidePromise;
  expectAlertToBeInvisible(alert);
};

const expectShowAndAfterShowToBeEmittedInCorrectOrder = async (alert: MfAlert, action: () => void | Promise<void>) => {
  const showPromise = oneEvent(alert, 'mf-show');
  const afterShowPromise = oneEvent(alert, 'mf-after-show');
  let afterShowHappened = false;
  oneEvent(alert, 'mf-after-show').then(() => (afterShowHappened = true));

  action();

  await showPromise;
  expect(afterShowHappened).to.be.false;

  await afterShowPromise;
  expectAlertToBeVisible(alert);
};

const getCloseButton = (alert: MfAlert): MfIconButton | null | undefined =>
  alert.shadowRoot?.querySelector<MfIconButton>('[part="close-button"]');

describe('<mf-alert>', () => {
  let clock: sinon.SinonFakeTimers | null = null;

  afterEach(async () => {
    clock?.restore();
    await resetMouse();
  });

  it('renders', async () => {
    const alert = await fixture<MfAlert>(html`<mf-alert open>I am an alert</mf-alert>`);

    expectAlertToBeVisible(alert);
  });

  it('is accessible', async () => {
    const alert = await fixture<MfAlert>(html`<mf-alert open>I am an alert</mf-alert>`);

    await expect(alert).to.be.accessible();
  });

  describe('alert visibility', () => {
    it('should be visible with the open attribute', async () => {
      const alert = await fixture<MfAlert>(html`<mf-alert open>I am an alert</mf-alert>`);

      expectAlertToBeVisible(alert);
    });

    it('should not be visible without the open attribute', async () => {
      const alert = await fixture<MfAlert>(html` <mf-alert>I am an alert</mf-alert>`);

      expectAlertToBeInvisible(alert);
    });

    it('should emit mf-show and mf-after-show when calling show()', async () => {
      const alert = await fixture<MfAlert>(html` <mf-alert>I am an alert</mf-alert>`);

      expectAlertToBeInvisible(alert);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.show());
    });

    it('should emit mf-hide and mf-after-hide when calling hide()', async () => {
      const alert = await fixture<MfAlert>(html` <mf-alert open>I am an alert</mf-alert>`);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => alert.hide());
    });

    it('should emit mf-show and mf-after-show when setting open = true', async () => {
      const alert = await fixture<MfAlert>(html` <mf-alert>I am an alert</mf-alert> `);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => {
        alert.open = true;
      });
    });

    it('should emit mf-hide and mf-after-hide when setting open = false', async () => {
      const alert = await fixture<MfAlert>(html` <mf-alert open>I am an alert</mf-alert> `);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        alert.open = false;
      });
    });
  });

  describe('close button', () => {
    it('shows a close button if the alert has the closable attribute', () => async () => {
      const alert = await fixture<MfAlert>(html` <mf-alert open closable>I am an alert</mf-alert> `);
      const closeButton = getCloseButton(alert);

      expect(closeButton).to.be.visible;
    });

    it('clicking the close button closes the alert', () => async () => {
      const alert = await fixture<MfAlert>(html` <mf-alert open closable>I am an alert</mf-alert> `);
      const closeButton = getCloseButton(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clickOnElement(closeButton!);
      });
    });
  });

  describe('toast', () => {
    const getToastStack = (): HTMLDivElement | null => document.querySelector<HTMLDivElement>('.mf-toast-stack');

    const closeRemainingAlerts = async (): Promise<void> => {
      const toastStack = getToastStack();
      if (toastStack?.children) {
        for (const element of toastStack.children) {
          await (element as MfAlert).hide();
        }
      }
    };

    beforeEach(async () => {
      await closeRemainingAlerts();
    });

    it('can be rendered as a toast', async () => {
      const alert = await fixture<MfAlert>(html`<mf-alert>I am an alert</mf-alert>`);

      expectShowAndAfterShowToBeEmittedInCorrectOrder(alert, () => alert.toast());
      const toastStack = getToastStack();
      expect(toastStack).to.be.visible;
      expect(toastStack?.firstChild).to.be.equal(alert);
    });

    it('resolves only after being closed', async () => {
      const alert = await fixture<MfAlert>(html`<mf-alert closable>I am an alert</mf-alert>`);

      const afterShowEvent = oneEvent(alert, 'mf-after-show');
      let toastPromiseResolved = false;
      alert.toast().then(() => (toastPromiseResolved = true));

      await afterShowEvent;
      expect(toastPromiseResolved).to.be.false;

      const closePromise = oneEvent(alert, 'mf-after-hide');
      const closeButton = getCloseButton(alert);
      clickOnElement(closeButton!);

      await closePromise;
      await aTimeout(0);

      expect(toastPromiseResolved).to.be.true;
    });

    const expectToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).not.to.be.null;
    };

    const expectNoToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).to.be.null;
    };

    const openToast = async (alert: MfAlert): Promise<void> => {
      const openPromise = oneEvent(alert, 'mf-after-show');
      alert.toast();
      await openPromise;
    };

    const closeToast = async (alert: MfAlert): Promise<void> => {
      const closePromise = oneEvent(alert, 'mf-after-hide');
      const closeButton = getCloseButton(alert);
      await clickOnElement(closeButton!);
      await closePromise;
      await aTimeout(0);
    };

    it('deletes the toast stack after the last alert is done', async () => {
      const container = await fixture<HTMLElement>(
        html`<div>
          <mf-alert data-testid="alert1" closable>alert 1</mf-alert>
          <mf-alert data-testid="alert2" closable>alert 2</mf-alert>
        </div>`
      );

      const alert1 = queryByTestId<MfAlert>(container, 'alert1');
      const alert2 = queryByTestId<MfAlert>(container, 'alert2');

      await openToast(alert1!);

      expectToastStack();

      await openToast(alert2!);

      expectToastStack();

      await closeToast(alert1!);

      expectToastStack();

      await closeToast(alert2!);

      expectNoToastStack();
    });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<MfAlert>(html` <mf-alert open duration="3000">I am an alert</mf-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<MfAlert>(html` <mf-alert open duration="3000">I am an alert</mf-alert>`);

      expectAlertToBeVisible(alert);

      clock.tick(1000);

      await moveMouseOnElement(alert);

      clock.tick(2999);

      expectAlertToBeVisible(alert);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after opening', async () => {
      clock = sinon.useFakeTimers();
      const alert = await fixture<MfAlert>(html` <mf-alert duration="3000">I am an alert</mf-alert>`);

      expectAlertToBeInvisible(alert);

      clock.tick(1000);

      const afterShowPromise = oneEvent(alert, 'mf-after-show');
      alert.show();
      await afterShowPromise;

      clock.tick(2999);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(alert, () => {
        clock?.tick(1);
      });
    });
  });

  describe('alert variants', () => {
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];

    variants.forEach(variant => {
      it(`adapts to the variant: ${variant}`, async () => {
        const alert = await fixture<MfAlert>(html`<mf-alert variant="${variant}" open>I am an alert</mf-alert>`);

        const alertContainer = getAlertContainer(alert);
        expect(alertContainer).to.have.class(`alert--${variant}`);
      });
    });
  });
});
