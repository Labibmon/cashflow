import { FC, ReactNode } from "react"
import styles from '@/styles/components/Card.module.scss'

export type CardProps = {
  children?: ReactNode
  variant?: 'elevated' | 'filled' | 'outline'
  background?: string
}

const Card: FC<CardProps> = ({
  children,
  variant = 'elevated',
  background,
}) => {

  return (
    <div
      className={styles[variant]}
      style={{
        background: background,
      }}
    >
      {children}
    </div>
  )
}

export default Card;