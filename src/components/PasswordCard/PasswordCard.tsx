import InputRange from '../InputRange/InputRange'
import InputSwitch from '../InputSwitch/InputSwitch'
import Button from '../Button/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'
import {faRotate} from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css'
import { useState } from 'react'
import { PasswordTypes } from '../../types/PasswordTypes'
import { generateStrongPassword } from '../../helpers/generateStrongPassword'

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const PasswordCard:React.FC = () => {

  const [password, setPassword] = useState<PasswordTypes>({
    length: '15',
    uppercase: true,
    lowercase: true,
    numbers: true,
  })

  const [strongPass, setStrongPass] = useState<string>("")
  
  const generatePassword = () => {
    const pass: string = generateStrongPassword(parseInt(password.length), password.uppercase, password.lowercase, password.numbers)
    setStrongPass(pass)
    console.log(pass)
  }

  return (
    <div className={styles.card}>
        <h2 className={styles.cardTitle}>Generate password</h2>
        <div className={styles.passwordSection} style={{marginBottom: '20px'}}>
            <label htmlFor="length" className={styles.passwordLabel}>Generated Password</label>
            <div className={styles.passwordContainer}>
                <span className={styles.passwordSpan}>{strongPass ? strongPass : "123456789 :)"}</span>
                <div>
                    <Tooltip id="my-tooltip" openOnClick={true} style={{backgroundColor: "#26183C", borderRadius: "10px"}}/>
                    <FontAwesomeIcon data-tooltip-id="my-tooltip" data-tooltip-content={strongPass ? "Copied to clickboard!" : "First generate the password please."} style={{marginRight:'7px', cursor: 'pointer', color: '#8A3EAF', userSelect:'none'}} onClick={() => {navigator.clipboard.writeText(strongPass)}} icon={faCopy}/>
                    <FontAwesomeIcon style={{cursor: 'pointer', color: '#8A3EAF', userSelect:'none'}} icon={faRotate} onClick={generatePassword}/>
                </div>
            </div>
        </div>
        <InputRange min={6} max={32} setPassword={setPassword}/>
        <span className={styles.subTitle} style={{marginBottom: '10px'}}>Settings</span>
        <InputSwitch id={1} labelName={"Include uppercase letters"} setPassword={setPassword}/>
        <InputSwitch id={2} labelName={"Include lowercase letters"} setPassword={setPassword}/>
        <InputSwitch id={3} labelName={"Include numbers"} setPassword={setPassword}/>
        <Button title={"Generate Password"} onClick={generatePassword}/>
    </div>
  )
}

export default PasswordCard