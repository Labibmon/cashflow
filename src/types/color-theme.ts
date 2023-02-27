export type ColorsTheme = {
  primary: string;
  secondary: string;
};

export type ColorType = keyof UseTheme;

export type UseTheme = {
  dark: ColorsTheme;
  light: ColorsTheme;
};
