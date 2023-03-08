import { FC, ReactNode } from "react";

type HeaderFooterPropType = {
  children?: ReactNode
}

const HeaderFooter: FC<HeaderFooterPropType> = ({
  children
}) => {
  return (
    <main>
      HeaderFooter-{children}
    </main>
  )
};

export default HeaderFooter