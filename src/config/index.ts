import { LayoutPropType, LayoutType } from "@/types/layout";
import { createContext } from "react";

type ThemeContext = {
  data: LayoutPropType,
  colors: {
    dark: {
      primary: string
      secondary: string
    },
    light: {
      primary: string
      secondary: string
    }
  }
}

const ThemeContextDefaultValue: ThemeContext = {
  data: {
    layoutType: undefined,
    lang: ``,
    description: ``,
    author: '',
    title: '',
    meta: [
      {
        name: '',
        content: ''
      },
    ],
  },
  colors: {
    dark: {
      primary: '',
      secondary: '',
    },
    light: {
      primary: '',
      secondary: ''
    }
  }
}

export const ThemeContext = createContext<ThemeContext>(ThemeContextDefaultValue);
