import { FC, ReactNode, useEffect, useState } from "react"
import { ColorsThemeEnum } from "@/types/color-theme"
import { ThemeSize, ThemeSizeEnum } from "@/types/commons"
import { IconAssetType } from "@/components/commons/icons/icon-assets"
import Icons from "@/components/commons/icons"
import Flex from "@/components/commons/flex"
import rgb2hex from "@/hooks/use-rgb-to-hex"

import styles from '@/styles/components/Button.module.scss'

export type ButtonProps = {
  children?: ReactNode
  onClick?: () => void
  variant?: ColorsThemeEnum
  style?: 'outline' | 'solid'
  fullWidth?: boolean
  size?: ThemeSize
  icon?: IconAssetType,
  iconPosition?: 'left' | 'right'
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = ColorsThemeEnum.Primary,
  size = ThemeSizeEnum.Md,
  style = 'solid',
  icon,
  iconPosition,
  fullWidth = false
}) => {
  const element = typeof window === "object" && document.querySelector('#button')
  const styleButton = element && getComputedStyle(element)

  const [colorIcon, setColorIcon] = useState<string>()

  useEffect(() => {
    styleButton && setColorIcon(rgb2hex(styleButton?.color))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styleButton])

  return (
    <button
      id="button"
      onClick={onClick}
      className={`
        ${styles[variant]}
        ${styles[variant + '_' + style]}
        ${styles[variant + '_' + size]}
        ${styles[variant + '_' + (fullWidth && 'long')]}
      `}
    >
      {icon ?
        <Flex
          gap={5}
          flexDirection={iconPosition === 'right' ? 'row-reverse' : 'row'}
          alignContent='center'
          justifyItems='center'
        >
          {colorIcon &&
            <Icons
              type={icon}
              color={colorIcon}
              width={styleButton ? styleButton.fontSize : ''}
              height={styleButton ? styleButton.fontSize : ''}
            />
          }

          {children}
        </Flex>
        : children
      }
    </button>
  )
}

export default Button;