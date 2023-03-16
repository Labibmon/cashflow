import { FC, ReactNode } from "react"
import styles from '@/styles/components/Card.module.scss'

export type CardProps = {
  children?: ReactNode
  variant?: 'elevated' | 'filled' | 'outline'
}

const Card: FC<CardProps> = ({
  children,
  variant = 'elevated'
}) => {

  return (
    <div
      className={styles[variant]}
    >
      {children}
    </div>
  )
}

export default Card;