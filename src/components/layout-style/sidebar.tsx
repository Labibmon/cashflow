import { FC, ReactNode, useEffect, useState } from 'react'
import styles from '@/styles/components/LayoutSidebar.module.scss'
import stylesColor from '@/styles/utils/colors.module.scss'
import Icons from '@/components/icons';

type SidebarPropType = {
  children?: ReactNode
}

const Sidebar: FC<SidebarPropType> = ({
  children
}) => {
  let dark: boolean =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>();

  const handleDarkMode = () => {
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
    location.reload();
  }

  useEffect(() => {
    localStorage.getItem('theme') ? setIsDark(localStorage.getItem('theme') === 'dark') : setIsDark(dark)
  }, [dark])

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={`${styles.sidebar} ${isOpen ? 'open' : 'close'}`}>
          <div className={styles.sidebarOverlay} onClick={() => setIsOpen(!isOpen)} />
          <div className={styles.sidebarContent}>
            sidebar
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