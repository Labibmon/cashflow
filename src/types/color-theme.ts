export type ColorsTheme = {
  primary: string;
  secondary: string;
  background: string;
};

export type ColorType = keyof UseTheme;

export type UseTheme = {
  dark: ColorsTheme;
  light: ColorsTheme;
};
