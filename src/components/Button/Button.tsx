import React from 'react'
import styles from './style.module.css'

type Props = {
  onClick: () => void
  title: string
}

const Button:React.FC<Props> = ({onClick, title}) => {
  return (
    <button onClick={onClick} className={styles.button}>{title}</button>
  )
}

export default Button