import React from 'react' 
import { useState } from 'react'; // Added useState here
import styles from './Login.module.css';
import login from '../../assets/login.png';
import {Input} from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Handle login logic here
    console.log("login");
  };
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
          <Input.Password 
          placeholder='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.input__info}>
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
          <Button type="primary" size="large" disabled={!username || !password} onClick={handleSubmit}>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login