import React from 'react'
import './Login.css'
import LinkedinLogo from './LinkedinLogo.png'

const Login = () => {

    const register = () => {}

    const loginToApp = () => {}
  return (
    <div className='login'>
      <img src={ LinkedinLogo }alt="" />
    
    <form>
        <input placeholder='Full name' type="text" required />
        <input placeholder='Email' type="email" required />
        <input placeholder='Password' type="password" required />
        <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>

    <p>Not a member? 
        <span className='login__register' onClick={register}>Register Now.</span>
    </p>
    </div>
  )
}

export default Login
