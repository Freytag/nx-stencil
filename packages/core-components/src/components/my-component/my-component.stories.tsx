import { h } from '@stencil/core';
import { MyComponent } from '@nx-stencil/core-components/my-component';

export default {
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => <my-component {...args}></my-component>;

export const Primary = Template.bind({});
Primary.args = { first: 'Hello', last: 'World' };
