import { FC, ReactNode, useState } from 'react'
import styles from '@/styles/components/LayoutSidebar.module.scss'

type SidebarPropType = {
  children?: ReactNode
}

const Sidebar: FC<SidebarPropType> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={`${styles.sidebar} ${isOpen ? 'open' : 'close' }`}>
          <div className={styles.sidebarContent}>
            sidebar
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <button onClick={()=>setIsOpen(!isOpen)}>open</button>
            header
          </div>
          <div className={styles.children}>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
};

export default Sidebar