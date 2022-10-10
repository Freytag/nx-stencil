import { h } from '@stencil/core';
import { AnotherComp } from '@nx-stencil/core-components/another-comp';

export default {
  title: 'AnotherComp',
  component: AnotherComp,
};

const Template = (args) => <another-comp {...args}></another-comp>;

export const Primary = Template.bind({});
Primary.args = { first: 'Hello', last: 'World' };
