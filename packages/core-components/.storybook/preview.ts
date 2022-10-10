import {
  renderVdom,
  registerHost,
  getHostRef,
} from '@stencil/core/internal/client';
import { defineCustomElements } from '@nx-stencil/core-components/loader';

defineCustomElements();

const rootElement = document.getElementById('root');
const storyRoot = document.createElement('div');
rootElement.parentElement.appendChild(storyRoot);

registerHost(storyRoot, { $flags$: 0, $tagName$: 'story-root' });
const hostRef = getHostRef(storyRoot);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => {
    renderVdom(hostRef, Story());
    return '<div />';
  },
];
