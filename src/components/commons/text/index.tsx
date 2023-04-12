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
import { useFont } from "@/hooks/use-font"

export type TextProps = {
  children?: ReactNode
  component?: ThemeTextComponent
  variant?: ThemeVariant
  size?: ThemeSize
  mb?: string,
  mt?: string,
}

const Text: FC<TextProps> = ({
  children,
  component = ThemeTextComponentEnum.H3,
  variant = ThemeVariantEnum.Primary,
  size = ThemeSizeEnum.Md,
  mb,
  mt,
}) => {
  const font = useFont(variant)
  const CustomTag = component;

  return (
    <CustomTag
      className={`${font} ${styles[size]}`}
      style={{
        marginTop: mt,
        marginBottom: mb
      }}
    >
      {children}
    </CustomTag>
  )
}

export default Text;