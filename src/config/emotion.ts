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
  orange: "#FF8F39",
  green: "#086F08",
  white: "#fffefb",
  black: "#111111",
}

export const cssVariables = {
  maxWidth: "480px",
  headerHeight: "60px",
  navHeight: "70px",
}