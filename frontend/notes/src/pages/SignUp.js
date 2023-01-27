import React from 'react'
import { useState, useHistory } from 'react'

export default function SignUp() {
    // const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [createPassword, setcreatePassword] = useState('')
    const [passwordConfirm, setPasswordConfrim] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:2000/notes/signIn', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/text',
            },
            body: JSON.stringify({
                name,
                email,
                createPassword,
                passwordConfirm
            }),
        })

        // const data = response.json()

        console.log(name, email, passwordConfirm, createPassword);

        if (response.ok) {
            alert('login')
        } else {

            alert('you fool')
        }

    }
    return (

        <main class="Form">
            <h1>Sign Up</h1>

            <form onSubmit={registerUser}>
                <label>First Name</label>
                <input id='name' value={name}
                    onChange={(e) => setName(e.target.value)} type="text" placeholder="" class="form-control" />
                <br />


                <label>Email</label>
                <input id='email' value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" placeholder="" class="form-control" /><br />
                <label>Password</label>
                <input id='pass' value={createPassword}
                    onChange={e => setcreatePassword(e.target.value)}
                    type="password" placeholder="" class="form-control" /><br />
                <label>Confirm Password</label>
                <input id='cp' value={passwordConfirm}
                    onChange={e => setPasswordConfrim(e.target.value)}
                    type="password" placeholder="" class="form-control" /><br />
                <button id="btn-submit" onClick={registerUser} class="btn btn-primary btn-lg btn-block">Sign Up</button>

            </form>
            <p>
                By clicking the Sign Up button,you are agree to our <br />
                <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
            </p>
            <p>Already have an account ? <a href="#">Login Here</a></p>
            <h1>Backend is not implemented yet </h1>

        </main>

    )
}
