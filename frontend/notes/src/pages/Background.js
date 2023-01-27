import React from 'react'

export default function Background() {
    return (
        <div class="row">
            <div class="col-lg-6">
                <h1>Keep your notes simple and safe.</h1>
                <button type="button" class="btn btn-light btn-lg D-button"> <a href="/login">Login</a> </button>
                <button type="button" class="btn btn-light btn-lg D-button"><a href="/sign"> Sign In </a></button>
            </div>
            <div class="col-lg-6">
                <img class="title-image" src="https://i.dawn.com/primary/2015/02/54d4a75555fc5.gif" alt="notes" />
            </div>
        </div>

    )
}
