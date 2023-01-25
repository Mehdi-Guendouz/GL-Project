import React from 'react'
import './profile.css'
import profile from '../../img/profile.jpg'
import phone from '../../img/icons/phone.png'
import mail from '../../img/icons/mail.png'
import copy from '../../img/icons/copy.png'
import settings from '../../img/icons/settings.png'
import Card from './Card'


export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="info-container font-Raleway">
            <img src={settings} alt="" className='setting-img'/>
            <div className="info-img profile-img">
                <img src={profile} alt="" />
            </div>
            <div className="info-info">
                <div>
                    <h1>Mehdi Geundouz</h1>
                    <h3>5 Publication</h3>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, fugiat eligendi quas sit ipsam corporis.</p>
            </div>
            <div className="info-contact">
                <h1>contact</h1>
                <div className="info-div">
                    <div className="">
                        <img src={phone} alt="" />
                        <p>0712457812</p>
                        <img src={copy} alt="" />
                    </div>
                    <div className="">
                        <img src={mail} alt="" />
                        <p>jfkldq@gmail.com</p>
                        <img src={copy} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='infocard-container font-Raleway'>
            <div className='text'>
                <h4>Annonce publiées par vous</h4>
            </div>
            <div className="cart-container">
               <Card/>
            </div>
        </div>
    </div>
  )
}
