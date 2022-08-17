import { css } from "styled-components";
export const typography = {
  type: {
    primary: "'Mulish', Arial, sans-serif;",
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
  },
  size: {
    s1: "0.75rem",
    s2: "0.875rem",
    s3: "1rem",
    m1: "1.125rem",
    m2: "1.25rem",
    m3: "1.5rem",
    m4: "2rem",
    l1: "2.5rem",
    l2: "3rem",
    l3: "3.5rem",
  },
  leading: {
    default: 1.25,
    s1: 1.1074,
    s2: 1.1667,
    s3: 1.2,
    s4: 1.25,
    s5: 1.333,
    m1: 1.4,
    m2: 1.5,
  },
  tracking: {
    m1: "0.02em",
  },
};

export const headlineTypo = {
  h1: css({
    fontSize: typography.size.l3,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.s1,
  }),
  h2: css({
    fontSize: typography.size.l2,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.s2,
  }),
  h3: css({
    fontSize: typography.size.l1,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.s3,
  }),
  h4: css({
    fontSize: typography.size.m4,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.s4,
  }),
  h5: css({
    fontSize: typography.size.m3,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.s4,
  }),
  h6: css({
    fontSize: typography.size.m2,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.m1,
  }),
};

export const textTypo = {
  largeBold: css({
    fontSize: typography.size.m1,
    fontWeight: typography.weight.bold,
    lineHeight: typography.leading.s5,
  }),
  large: css({
    fontSize: typography.size.m1,
    fontWeight: typography.weight.regular,
    lineHeight: typography.leading.s5,
  }),
  regularBold: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.bold,
    lineHeight: typography.leading.s4,
  }),
  regular: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.regular,
    lineHeight: typography.leading.s4,
  }),
  smallBold: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.bold,
    lineHeight: typography.leading.s4,
  }),
  small: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.regular,
    lineHeight: typography.leading.s4,
  }),
  tinyBold: css({
    fontSize: typography.size.s1,
    fontWeight: typography.weight.bold,
    lineHeight: typography.leading.s5,
  }),
  tiny: css({
    fontSize: typography.size.s1,
    fontWeight: typography.weight.regular,
    lineHeight: typography.leading.s5,
  }),
};

export const btnTypo = {
  btnLarge: css({
    fontSize: typography.size.m1,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.s5,
    letterSpacing: typography.tracking.m1,
  }),
  btnMedium: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.m2,
    letterSpacing: typography.tracking.m1,
  }),
  btnSmall: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.extrabold,
    lineHeight: typography.leading.s2,
    letterSpacing: typography.tracking.m1,
  }),
};
