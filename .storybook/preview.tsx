import React from 'react';
import { type Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { LanguageProvider } from '../src/providers/i18n/LanguageProvider';

import './config/i18n';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const withLanguage = (StoryFn) => <LanguageProvider>{StoryFn()}</LanguageProvider>;

const withRouter = (StoryFn) => <BrowserRouter>{StoryFn()}</BrowserRouter>;

export const decorators = [withLanguage, withRouter];

export default preview;
