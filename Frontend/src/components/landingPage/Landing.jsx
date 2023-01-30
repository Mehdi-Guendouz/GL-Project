import React from 'react'
import './landing.css'
import { GoogleLoginButton } from "react-social-login-buttons";

export default function Landing() {
  return (
    <div className='container-landing font-Raleway '>
        <nav className='nav-bar'>
            <h1 className='text-[18px]'>logo</h1>
            <div>
                {/* <button className='btn btn-lg'>S’inscrire</button> */}
                <GoogleLoginButton onClick={() => alert("Hello")} />
            </div>
        </nav>
    </div>
  )
}
