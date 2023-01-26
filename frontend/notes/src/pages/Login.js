import React, { useState } from 'react'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function registerUser(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:2000/notes/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json()
    }
    return (

        <form onSubmit={registerUser}>



            <label>Email</label>
            <input type="email" placeholder="" class="form-control" /><br />
            <label>Password</label>
            <input type="password" placeholder="" class="form-control" /><br />

            <button type="submit" id="btn-submit" class="btn btn-primary btn-lg btn-block">Login</button>

        </form>


    )
}
