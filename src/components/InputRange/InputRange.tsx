import React, { useState } from 'react'
import styles from './style.module.css'
import { PasswordTypes } from '../../types/PasswordTypes'

type Props = {
  min: number,
  max: number,
  setPassword: React.Dispatch<React.SetStateAction<PasswordTypes>>
}

const InputRange:React.FC<Props> = ({min, max, setPassword}) => {
  
  const [range, setRange] = useState<string>('15')

  const setRangeOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setRange(e.target.value)
    setPassword((prevState) => ({
      ...prevState,
      length: e.target.value
    }))
  }

  return (
    <div className={styles.container} style={{marginBottom: '20px'}}>
        <div className={styles.labelContainer}>
            <label htmlFor="length" className={styles.label}>Character Length</label>
            <span className={styles.inputValue}>{range}</span>
        </div>
        <div className={styles.inputContainer}>
            <span>{min}</span>
            <input type="range" name='length' id='length' value={range} onChange={setRangeOnChange} min={min} max={max} className={styles.input}/>
            <span>{max}</span>
        </div>
    </div>
  )
}

export default InputRange