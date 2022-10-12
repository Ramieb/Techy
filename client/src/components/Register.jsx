import React from 'react'
import NavBar from './NavBar'

function Register() {
  return (
    <div className='registerFullPage'>
      <NavBar />
      <div className='registerContainer'>
        <fieldset className='registerFieldset'>
          <section className='registerForm'>
              <div className='registerTitle'><p>Create account</p></div>
              <input type='text' placeholder='Email'></input><br /><br />
              <input type='text' placeholder='Username'></input><br /><br />
              <input type='text' placeholder='Password'></input><br /><br />
              <input type='text' placeholder='Confirm password'></input><br /><br />
              <button>Submit</button>
          </section>
        </fieldset>
      </div>
    </div>
  )
}

export default Register
