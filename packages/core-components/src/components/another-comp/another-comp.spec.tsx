import { newSpecPage } from '@stencil/core/testing';
import { AnotherComp } from './another-comp';

describe('another-comp', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AnotherComp],
      html: '<another-comp></another-comp>',
    });
    expect(root).toEqualHtml(`
      <another-comp>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </another-comp>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AnotherComp],
      html: `<another-comp first="Stencil" last="'Don't call me a framework' JS"></another-comp>`,
    });
    expect(root).toEqualHtml(`
      <another-comp first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </another-comp>
    `);
  });
});
