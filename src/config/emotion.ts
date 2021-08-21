export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const mq = {
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  xxl: `@media (min-width: ${breakpoints.xxl}px)`
}

export const mqCustom = (w: number)=>{
  return `@media (min-width: ${w}px)`;
}

export const theme = {
  primary: "",
  secondary: "",
  blue: "#4a8cc9",
  darkblue: "#0b4d89",
  lightblue: "#b4dbff",
}

export const cssVariables = {
  maxWidth: "480px",
  headerHeight: "65px",
  navHeight: "70px",
}