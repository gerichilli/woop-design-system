# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


:root {
  --light-greyscale-bg-light: #FFFFFF;
  --light-greyscale-bg-darken: #F8F8F8;
  --light-greyscale-text-primary: #181818;
  --light-greyscale-text-secondary: #5C5C5C;
  --light-greyscale-text-tertiary: #747474;
  --light-greyscale-icons: #7C7B7B;
  --light-greyscale-stroke: #D7D7D7;
  --light-greyscale-dividers: #EDEDED;
  --light-greyscale-disabled-text: #8A8A8A;
  --light-greyscale-disabled-bg: #EFEFEF;
  --light-greyscale-white: #FFFFFF;
  --light-greyscale-text-on-color-plashes: #181818;
  --light-assents-accent1-primary: #2D5BFF;
  --light-assents-accent1-secondary: #6284FD;
  --light-assents-accent1-tertiary: #96ADFF;
  --light-assents-accent1-quaternary: #ECF0FF;
  --light-assents-state:-hover: #1B4AF0;
  --light-assents-state:-click: #002ED0;
  --light-assents-accent2-primary: #FF7F37;
  --light-assents-accent2-secondary: #FC9D68;
  --light-assents-accent2-tertiary: #FFD5BE;
  --light-assents-accent2-quaternary: #FFECE1;
  --light-system-error-successful-hover: #28B411;
  --light-system-error-successful: #3AC922;
  --light-system-error-successful-secondary: #B2FFA6;
  --light-system-error-successful-tertiary: #E6FFE2;
  --light-system-error-attanchion-hover: #EECD1D;
  --light-system-error-attention: #F6D523;
  --light-system-error-attanchion-secondary: #FFEF98;
  --light-system-error-attention-tertiary: #FFFAE1;
  --light-system-error-error-hover: #ED2121;
  --light-system-error-error: #FF3030;
  --light-system-error-error-secondary: #FFC0C0;
  --light-system-error-error-tertiary: #FFF2F2;
  --dark-grayscale-bg-light: #282828;
  --dark-grayscale-bg-darken: #1C1C1C;
  --dark-grayscale-text-primary: #D9D9D9;
  --dark-grayscale-text-secondary: #9D9D9D;
  --dark-grayscale-text-tertiary: #5C5C5C;
  --dark-grayscale-icons: #6C6C6C;
  --dark-grayscale-stroke: #3A3A3A;
  --dark-grayscale-dividers: #323232;
  --dark-grayscale-disabled-text: #8B8B8B;
  --dark-grayscale-disabled-bg: #4A4A4A;
  --dark-grayscale-white: #FFFFFF;
  --dark-grayscale-text-on-color-plashes: #181818;
  --dark-assents-accent1-primary: #4264DF;
  --dark-assents-accent1-secondary: #6782E7;
  --dark-assents-accent1-tertiary: #95AAF5;
  --dark-assents-accent1-quaternary: #C0CAF1;
  --dark-assents-state:hover: #244AD0;
  --dark-assents-state:-click: #244DDF;
  --dark-assents-accent2-primary: #F37B38;
  --dark-assents-accent2-secondary: #EA996B;
  --dark-assents-accent2-tertiary: #FFAB7C;
  --dark-assents-accent2-quaternary: #FFC2A0;
  --dark-system-error-successful-hover: #369926;
  --dark-system-error-successful: #4DA63E;
  --dark-system-error-successful-secondary: #B0F9A5;
  --dark-system-error-successful-tertiary: #C2F5B9;
  --dark-system-error-attention-hover: #EFD02C;
  --dark-system-error-attention: #F9DE51;
  --dark-system-error-attanchion-secondary: #EFE29B;
  --dark-system-error-attention-tertiary: #F9F1C7;
  --dark-system-error-error-hover: #ED2F2F;
  --dark-system-error-error: #FF4545;
  --dark-system-error-error-secondary: #F7B7B7;
  --dark-system-error-error-tertiary: #FBDFDF;
}