import React from 'react' 
import { useState } from 'react'; // Added useState here
import styles from './Login.module.css';
import login from '../../assets/login.png';
import {Input} from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import { Button,message } from 'antd';
import AuthServices from '../../services/authServices';
import { getErrorMessage } from '../../util/GetError';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state 
  const navigate = useNavigate();

  const handleSubmit = async() => {
    // Handle login logic here
    console.log("login");
    try {
      setLoading(true); // Set loading to true when starting the login process
      let data = {
        username, password
      }
      const response = await AuthServices.loginUser(data);
      console.log(response.data);
      localStorage.setItem("toDoAppUser", JSON.stringify(response.data)); // Store the token in local storage
      message.success("Login successful!"); // Show success message
      navigate('/to-do-list');
      setLoading(false); // Set loading to false after receiving the response
    } catch (err) {
      console.log(err);
      message.error(getErrorMessage(err)); // Show error message
      setLoading(false); // Set loading to false if there's an error
    }
  };
  return (
    <div>
      <div className={styles.login__card}>
        <img src={login} alt="logo" />
        <h2>Login</h2>
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
          <Button loading={loading} type="primary" size="large" disabled={!username || !password} onClick={handleSubmit}>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login