import React, { useState } from 'react'
import s from './Login.module.scss'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
 const [loading, setLoading] = useState(false)
const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()
    setLoading(true)
  

  // 1. Send data to backend API
 try {
      const response = await fetch('https://sunshine-coffee-api.onrender.com/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data || 'Login failed')
      }

      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      localStorage.setItem('userEmail', data.email)
      localStorage.setItem('userId', data.id)

      alert(`Login successful! Welcome ${data.email}`)
      navigate('/')
    } catch (err) {
      console.error('Login error:', err)
      alert(err.message || 'Server connection failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={s.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={s.inputStyle}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />
        </div>
        <div className={s.inputStyle}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}required
          />
        </div>
       <button type="submit" className={s.buttonStyle} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}</button>
      </form>
     
    </div>
  )
}
