import React, { useState } from 'react'

export default function Login() {

    const [email, setEmail] = useState('')
    const [createPassword, setcreatePassword] = useState('')
    async function loginUser(e) {

        e.preventDefault()
        const response = await fetch('http://localhost:2000/notes/login', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email, createPassword
            })
        })
        const data = await response.json()

        if (data.status === 'sucess') {
            alert('Login successful')
            window.location.href = '/you'

        } else {
            alert('email or password is wrong')
        }

    }
    return (

        <form onSubmit={loginUser}>



            <label>Email</label>
            <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                type="email" placeholder="" class="form-control" /><br />
            <label>Password</label>
            <input value={createPassword}
                id='pass'
                onChange={(e) => setcreatePassword(e.target.value)}
                type="password" placeholder="" class="form-control" /><br />

            <button type="submit" id="btn-submit" class="btn btn-primary btn-lg btn-block">Login</button>

        </form>


    )
}
