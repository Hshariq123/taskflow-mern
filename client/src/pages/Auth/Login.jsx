import React from 'react'
import { useState } from 'react'; // Added useState here
import styles from './Login.module.css';
import login from '../../assets/login.png';
import {Input} from 'antd';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className={styles.login__card}>
        <img src={login} alt="logo" />
        <h4>Login</h4>
        <div className={styles.input__wrapper}>
          <Input type="text" 
          placeholder='username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={styles.input__wrapper}>
          <Input type="password" 
          placeholder='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default Login