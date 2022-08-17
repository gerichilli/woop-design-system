import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/shared/global";
import { defaultTheme, darkTheme } from "./components/shared/styles";
import PrimaryButton, { SecondaryButton, TertiaryButton } from "./components/Button";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const theme = useDarkTheme ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => setUseDarkTheme(!useDarkTheme)}>Dark theme</button>
      <PrimaryButton>Hello World</PrimaryButton>
      <SecondaryButton>Hello World</SecondaryButton>
      <TertiaryButton>Hello World</TertiaryButton>
      <PrimaryButton disabled>Hello World</PrimaryButton>
      <SecondaryButton disabled>Hello World</SecondaryButton>
      <TertiaryButton disabled>Hello World</TertiaryButton>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
