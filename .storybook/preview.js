// Global styles
import '!style-loader!css-loader!sass-loader!../src/App.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: {
    selector: 'html',
    dataAttr: 'data-theme',
  },
};
