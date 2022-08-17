import { color } from "./color";

export const defaultTheme = {
  primary: color.blue[400],
  primaryHover: color.blue[550],
  primaryActive: color.blue[600],
  primaryL1: color.blue[0],
  textOnPrimary: color.grey[0],
  disabled: color.grey[150],
  textOnDisabled: color.grey[450],
  textPrimary: color.grey[950],
  textSecondary: color.grey[650],
  textTeritary: color.grey[550],

  strokeFocus: `0px 0px 0px 2px ${color.orange[350]}`,
};

export const darkTheme = {
  primary: color.orange[200],
  primaryHover: color.blue[300],
  primaryActive: color.blue[400],
  primaryLightest: color.blue[0],
  textOnPrimary: color.grey[0],
  disabled: color.grey[150],
  textOnDisabled: color.grey[450],
  textPrimary: color.grey[950],
  textSecondary: color.grey[650],
  textTeritary: color.grey[550],

  strokeFocus: `0px 0px 0px 2px ${color.orange[350]}`,
};
