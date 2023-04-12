import { FC } from "react"
import { ThemeSizeEnum, ThemeTextComponentEnum, ThemeVariant, ThemeVariantEnum } from "@/types/commons"
import { useFont } from "@/hooks/use-font"
import styles from '@/styles/components/Input.module.scss'
import Text from '@/components/commons/text'
import Icons from '@/components/commons/icons'
import Flex from '@/components/commons/flex'
import { IconAssetType } from "@/components/commons/icons/icon-assets"

export type InputProps = {
  variant?: 'input' | 'textarea'
  fontVariant?: ThemeVariant
  description?: string
  iconPosition?: 'right' | 'left'
  icon: IconAssetType
}

const Input: FC<InputProps> = ({
  variant = 'input',
  fontVariant = ThemeVariantEnum.Primary,
  description = 'This is a hint text to help user.',
  iconPosition,
  icon,
}) => {
  const CustomTag = variant;
  const font = useFont(fontVariant)

  return (
    <>
      <Flex
        className={styles.inputContainer}
        flexDirection={iconPosition === 'left' ? 'row' : 'row-reverse'}
      >
        {icon &&
          <Icons
            type={icon}
            height="20px"
            width="20px"
            color='#000000'
          />
        }
        <CustomTag className={`${font} ${styles.input}`} />
      </Flex>
      {description &&
        <Text
          size={ThemeSizeEnum.Sm}
          component={ThemeTextComponentEnum.Label}
        >
          {description}
        </Text>
      }
    </>
  )
}

export default Input;