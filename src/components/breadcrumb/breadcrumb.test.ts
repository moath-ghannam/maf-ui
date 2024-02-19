import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type MfBreadcrumb from './breadcrumb.js';

// The default link color just misses AA contrast, but the next step up is way too dark. Maybe we can solve this in the
// future with a prefers-contrast media query.
const ignoredRules = ['color-contrast'];

describe('<mf-breadcrumb>', () => {
  let el: MfBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<MfBreadcrumb>(html`
        <mf-breadcrumb>
          <mf-breadcrumb-item>Catalog</mf-breadcrumb-item>
          <mf-breadcrumb-item>Clothing</mf-breadcrumb-item>
          <mf-breadcrumb-item>Women's</mf-breadcrumb-item>
          <mf-breadcrumb-item>Shirts &amp; Tops</mf-breadcrumb-item>
        </mf-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should render mf-icon as separator', () => {
      expect(el.querySelectorAll('mf-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('mf-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<MfBreadcrumb>(html`
        <mf-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <mf-breadcrumb-item>First</mf-breadcrumb-item>
          <mf-breadcrumb-item>Second</mf-breadcrumb-item>
          <mf-breadcrumb-item>Third</mf-breadcrumb-item>
        </mf-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the mf-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('mf-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<MfBreadcrumb>(html`
        <mf-breadcrumb>
          <mf-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </mf-breadcrumb-item>
          <mf-breadcrumb-item>First</mf-breadcrumb-item>
          <mf-breadcrumb-item>Second</mf-breadcrumb-item>
          <mf-breadcrumb-item>Third</mf-breadcrumb-item>
        </mf-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<MfBreadcrumb>(html`
        <mf-breadcrumb>
          <mf-breadcrumb-item>First</mf-breadcrumb-item>
          <mf-breadcrumb-item>Second</mf-breadcrumb-item>
          <mf-breadcrumb-item>Third</mf-breadcrumb-item>
          <mf-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </mf-breadcrumb-item>
        </mf-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
