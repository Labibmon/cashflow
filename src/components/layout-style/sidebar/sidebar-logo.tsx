import { FC } from "react";
import styles from '@/styles/components/LayoutSidebar.module.scss'
import Text from "@/components/commons/text";
import { ThemeSizeEnum, ThemeTextComponentEnum } from "@/types/commons";

type SidebarLogoProps = {

}

const SidebarLogo: FC<SidebarLogoProps> = ({
}) => {
    return (
        <div className={styles.logo}>
            <Text component={ThemeTextComponentEnum.H1} size={ThemeSizeEnum.X2l}>Cashflow</Text>
        </div>
    )
}

export default SidebarLogo;