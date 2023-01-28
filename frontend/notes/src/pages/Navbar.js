import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
export default function navbar() {
    return (


        <nav>
            <div className="nav-container">
                <Link to="/" className="brand-logo">
                    Home
                </Link>
                <div className="nav-links">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    <Link to="/sign" className="nav-link">
                        Sign Up
                    </Link>
                    <Link to="/about" className="nav-link">
                        About US
                    </Link>
                </div>
                <div className="nav-logo">
                    <img src='https://png.pngtree.com/png-vector/20190121/ourlarge/pngtree-taking-notes-business-style-cartoon-write-homework-png-image_519924.jpg' alt="logo" />
                </div>
            </div>
            <h1>KEEP NOTES</h1>
        </nav>





    )
}
