import { FC, ReactNode, CSSProperties } from "react"
import styles from '@/styles/components/Flex.module.scss'

export type FlexProps = {
  children?: ReactNode
  flexDirection?: CSSProperties['flexDirection']
  flexWrap?: CSSProperties['flexWrap']
  gap?: CSSProperties['gap']
  alignItems?: CSSProperties['alignItems']
  alignContent?: CSSProperties['alignContent']
  justifyItems?: CSSProperties['justifyItems']
  justifyContent?: CSSProperties['justifyContent']
  className?: string
}

const Flex: FC<FlexProps> = ({
  children,
  flexDirection = 'row',
  flexWrap = 'wrap',
  gap = '20px',
  alignItems = 'flex-start',
  alignContent = 'flex-start',
  justifyItems = 'flex-start',
  justifyContent ='flex-start',
  className,
}) => {
  return (
    <div
      className={`
        ${styles['flexDirection' + flexDirection]}
        ${styles['flexWrap' + flexWrap]}
        ${styles['alignItems' + alignItems]}
        ${styles['alignContent' + alignContent]}
        ${styles['justifyItems' + justifyItems]}
        ${styles['justifyContent' + justifyContent]}
        ${className}
      `}
      style={{
        gap
      }}
    >
      {children}
    </div>
  )
}

export default Flex;