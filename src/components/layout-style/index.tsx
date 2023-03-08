import { FC, ReactNode, useContext } from "react";
import Sidebar from "@/components/layout-style/sidebar";
import { LayoutEnum } from "@/types/layout";
import { ThemeContext } from "@/config";
import HeaderFooter from "./header-footer";

type LayoutStylePropType = {
  children?: ReactNode
}

const LayoutStyle: FC<LayoutStylePropType> = ({
  children
}) => {
  const { data } = useContext(ThemeContext);
  
  switch (data.layoutType) {
    case LayoutEnum.sidebar:
      return (
        <Sidebar>
          {children}
        </Sidebar>
      )
    case LayoutEnum.headerFooter:
      return (
        <HeaderFooter>
          {children}
        </HeaderFooter>
      )
    default:
      return (
        <main>
          {children}
        </main>
      )
  }
};

export default LayoutStyle