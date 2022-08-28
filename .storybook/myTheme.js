import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#2D5BFF',
  colorSecondary: '#96ADFF',

  // UI
  appBg: '#282828',
  appContentBg: '#1C1C1C',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Mulish", sans-serif',
  fontCode: '"Space Mono", monospace',

  // Text colors
  textColor: '#D9D9D9',
  textInverseColor: '#9D9D9D',

  // Toolbar default and active colors
  barTextColor: '#181818',
  barSelectedColor: '#6782E7',
  barBg: '#ECF0FF',

  brandTitle: 'Woop Storybook',
  brandUrl: 'https://example.com',
  brandImage:
    'https://raw.githubusercontent.com/gerichilli/woop-design-system/main/src/assets/images/logo.png',
  brandTarget: '_self',
});
