import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  return (
    <form>
        <div>
            <div>
                <p>Email</p>
                <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
            </div>
            <div>
                <p>Password</p>
                <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
            </div>
            <button>{state === 'Sing Up' ? 'Create Account' : 'Login'}</button>
            {
                state === 'Sign Up'
                ? <p> Already have an account? <span onClick={() => setState('Login')} >Login here</span></p>
                : <p>Create an new account? <span onClick={() => setState('Login')} >Click here</span></p>
            }
        </div>
    </form>
  )
}

export default Login