import { FC, ReactNode, useContext } from "react"
import {
  ThemeSize,
  ThemeSizeEnum,
  ThemeTextComponent,
  ThemeTextComponentEnum,
  ThemeVariant,
  ThemeVariantEnum
} from "@/types/commons"
import styles from '@/styles/components/Text.module.scss'
import { ThemeContext, ThemeFont } from "@/config"

export type TextProps = {
  children?: ReactNode
  component?: ThemeTextComponent
  variant?: ThemeVariant
  size?: ThemeSize
}

const Text: FC<TextProps> = ({
  children,
  component = ThemeTextComponentEnum.H3,
  variant = ThemeVariantEnum.Primary,
  size = ThemeSizeEnum.Md
}) => {
  const { font } = useContext(ThemeContext);
  const CustomTag = component;
  const { primary, secondary } = ThemeFont({
    primary: font.primary,
    secondary: font.secondary,
  })
  
  const fontData = {
    primary: primary,
    secondary: secondary
  }

  return (
    <CustomTag
      className={`${fontData[variant]} ${styles[size]}`}
    >
      {children}
    </CustomTag>
  )
}

export default Text;