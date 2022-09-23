import React from 'react'

function Login() {
  return (
    <div>
      <fieldset className='loginFieldset'>
        <section className='loginForm'>
            <div className='loginTitle'><p>Login</p></div>
            <input type='text' placeholder='Username'></input><br /><br />
            <input type='text' placeholder='Password'></input><br /><br />
            <button>Submit</button>
        </section>
      </fieldset>
    </div>
  )
}

export default Login
