import { ThemeContext, ThemeFont } from "@/config";
import { ThemeVariantEnum } from "@/types/commons";
import { useContext } from "react";

export const useFont = (variant: ThemeVariantEnum) => {
  const { font } = useContext(ThemeContext);

  const { primary, secondary } = ThemeFont({
    primary: font.primary,
    secondary: font.secondary,
  });

  const fontData = {
    primary: primary,
    secondary: secondary,
  };

  return fontData[variant];
};
