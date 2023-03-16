import { FC, ReactNode, useEffect, useState } from 'react'
import Icons from '@/components/icons';
import useWindowSize from '@/hooks/use-window-size';
import SidebarLinkItems from '@/components/layout-style/sidebar/sidebar-link-items';
import SidebarLogo from '@/components/layout-style/sidebar/sidebar-logo';
import styles from '@/styles/components/LayoutSidebar.module.scss'

type SidebarPropType = {
  children?: ReactNode
}

const Sidebar: FC<SidebarPropType> = ({
  children
}) => {
  const size = useWindowSize();
  const defaultSidebarOpen = size?.width > 767

  let dark: boolean =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isOpen, setIsOpen] = useState<boolean>(size && defaultSidebarOpen);
  const [isDark, setIsDark] = useState<boolean>();

  const handleDarkMode = () => {
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
    location.reload();
  }

  useEffect(() => {
    localStorage.getItem('theme') ? setIsDark(localStorage.getItem('theme') === 'dark') : setIsDark(dark)
  }, [dark])

  useEffect(() => {
    size.width !== 0 && setIsOpen(defaultSidebarOpen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])


  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={`${styles.sidebar} ${isOpen ? 'open' : 'close'}`}>
          <div className={styles.sidebarOverlay} onClick={() => setIsOpen(!isOpen)} />
          <div className={styles.sidebarContent}>
            <SidebarLogo />
            <SidebarLinkItems />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              <Icons
                onClick={() => setIsOpen(!isOpen)}
                height='20px'
                width='20px'
                type='hamburger'
                color={isDark ? '#FFFFFF' : '#000000'}
                style={{
                  cursor: 'pointer',
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'all .2s'
                }}
              />

              <Icons
                onClick={() => handleDarkMode()}
                height='20px'
                width='20px'
                type='moon'
                color={isDark ? '#FFFFFF' : '#000000'}
                style={{
                  cursor: 'pointer',
                  marginLeft: 'auto'
                }}
              />
            </div>
          </div>
          <div className={styles.children}>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Sidebar