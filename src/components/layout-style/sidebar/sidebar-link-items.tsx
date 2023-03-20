import { FC, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Icons from "@/components/commons/icons"
import { useGetColors } from "@/hooks/use-get-colors"
import Text from "@/components/commons/text"
import linkItems from "@/__mocks__/link-items"
import { ThemeSizeEnum, ThemeTextComponentEnum, ThemeVariantEnum } from "@/types/commons"
import styles from '@/styles/components/LayoutSidebar.module.scss'

type SidebarLinkItemsProps = {

}

const SidebarLinkItems: FC<SidebarLinkItemsProps> = ({
}) => {
  const router = useRouter();
  const colors = useGetColors();
  const [colorIcon, setColorIcon] = useState<string>()
  const [iconHover, setIconHover] = useState<string>()

  useEffect(() => {
    if (colors && colorIcon === undefined) {
      setColorIcon(colors?.secondary)
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors])


  return (
    <ul className={styles.linkItemsContainer}>
      {linkItems.data.map((link, index) => (
        <Link key={index} href={`${link.link}`}>
          <li
            className={router.pathname === link.link ? 'active' : ''}
            onMouseEnter={() => setIconHover(link.link)}
            onMouseLeave={() => setIconHover(undefined)}
          >
            {(router.pathname === link.link || iconHover === link.link) ?
              <Icons
                type={link.icon}
                width="15px"
                height="15px"
                color={'#FFFFFF'}
                readyComponent={colorIcon !== undefined}
              />
              :
              <Icons
                type={link.icon}
                width="15px"
                height="15px"
                color={colors?.secondary}
                readyComponent={colorIcon !== undefined}
              />
            }
            <Text
              component={ThemeTextComponentEnum.Span}
              variant={ThemeVariantEnum.Primary}
              size={ThemeSizeEnum.Sm}
            >{link.label}</Text>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default SidebarLinkItems;