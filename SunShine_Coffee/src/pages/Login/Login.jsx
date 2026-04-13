import React, { useState } from 'react'
import s from './Login.module.scss'


export const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault()
  
try{
  // 1. Send data to backend API
    const response = await fetch('https://sunshine-coffee-api.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

  
 if (response.ok) {
        // Success! Save the tokens to localStorage
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        
        alert(`Login Successful! Welcome ${data.email}`);
        
        // Optional: Redirect user to home page
        // window.location.href = "/"; 
      } else {
        // Error from backend (e.g., "Email not found")
        alert(data); 
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server connection failed.");
    }
  };

  return (
    <div className={s.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={s.inputStyle}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className={s.inputStyle}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={s.buttonStyle} onClick={handleLogin}>Login</button>
      </form>
     
    </div>
  )
}
