import React from 'react'
import NavBar from './NavBar'

function Login() {
  return (
    <div>
      <NavBar />
      <div className='loginContainer'>
        <fieldset className='loginFieldset'>
          <section className='loginForm'>
              <div className='loginTitle'><p>Login</p></div>
              <input type='text' placeholder='Username'></input><br /><br />
              <input type='text' placeholder='Password'></input><br /><br />
              <button>Submit</button>
          </section>
        </fieldset>
      </div>
    </div>
  )
}

export default Login
