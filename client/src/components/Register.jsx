import React from 'react'

function Register() {
  return (
    <div>
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
  )
}

export default Register
