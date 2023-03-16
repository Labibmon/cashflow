import { ThemeContext } from "@/config";
import { ColorType } from "@/types/color-theme";
import { useContext } from "react";

export const useGetColors = () => {
  const { colors } = useContext(ThemeContext);

  const setStyleAttribute = (type: ColorType) => {
    return colors[type];
  };

  if (typeof window !== "undefined") {
    let dark: boolean =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        return setStyleAttribute("dark");
      } else {
        return setStyleAttribute("light");
      }
    } else if (!window.matchMedia){
      //OS theme setting detected as dark
      return setStyleAttribute("light");
    }
    else if (dark) {
      return setStyleAttribute("dark");
    }
    //OS theme setting detected as light
    else {
      return setStyleAttribute("light");
    }
  }
};
