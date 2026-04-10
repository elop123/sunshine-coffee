import React, { useState } from 'react'
import s from './Login.module.scss'


export const Login = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    //Message
    alert(` ${fname},  You are successfully signed up ! `)
  };

  const handleSignUp = (e) => {
    e.preventDefault()
    if (!fname && !lname) {
      alert("Please enter your first and last name to sign up")
      return
    }
    if (!fname) {
      alert("Please fill in your first name")
      return
    }
    if (!lname) {
      alert("Please fill in your last name")
      return
    }
    alert(`${fname}, you are successfully signed up!`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!fname && !lname) {
      alert("Please enter your first and last name to submit")
      return
    }
    if (!fname) {
      alert("Please fill in your first name")
      return
    }
    if (!lname) {
      alert("Please fill in your last name")
      return
    }
    alert(`${fname}, you are successfully submitted!`)
  }


  return (
    <div className={s.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={s.inputStyle}>
          <label>First name</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)} 
          />
        </div>
        <div className={s.inputStyle}>
          <label>Last name</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <button type="submit" className={s.buttonStyle} onClick={handleSignUp}>Sign up</button>
        <button type="submit" className={s.buttonStyle} onClick={handleSubmit}>Submit</button>
      </form>
     
    </div>
  )
}
