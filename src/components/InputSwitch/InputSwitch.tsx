import React, { useState } from 'react'
import styles from './style.module.css'
import { PasswordTypes } from '../../types/PasswordTypes'

type Props = {
  id: number,
  labelName: string,
  setPassword: React.Dispatch<React.SetStateAction<PasswordTypes>>
} 

const InputSwitch:React.FC<Props> = ({id, labelName, setPassword}) => {
  const [inputState, setInputState] = useState<boolean>(true)

  const setInputStateOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(id === 2 ? true : event.target.checked)
    setPassword((prev: PasswordTypes) => {
      if(id === 1){
        return {...prev, uppercase: event.target.checked}
      } else if(id === 2){
        return {...prev, lowercase: true}
      } else {
        return {...prev, numbers: event.target.checked}
      }
    })
  }

  return (
    <div className={styles.container} style={{marginBottom: '10px'}}>
      <span className={styles.label}>{labelName}</span>
      <label className={styles.switch} htmlFor={`switch_${id}`}>
        <input  type="checkbox" name={`switch_${id}`} id={`switch_${id}`} checked={inputState} onChange={setInputStateOnChange}/>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  )
}

export default InputSwitch