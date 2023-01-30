import React from 'react'
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';

// image and css
import './profile.css'
import profile from '../../img/profile.jpg'
import phone from '../../img/icons/phone.png'
import mail from '../../img/icons/mail.png'
import copyImg from '../../img/icons/copy.png'
import settings from '../../img/icons/settings.png'
import Card from './Card'


export default function Profile() {

   

    function Demo({text}) {
        return (
            <CopyButton value={text} timeout={2000} className='ml-2'>
            {({ copied, copy }) => (
                <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                    < img src={copyImg} />
                </ActionIcon>
                </Tooltip>
            )}
            </CopyButton>
        );
    }



  return (
    <div className='profile-container'>
        <div className="info-container font-Raleway px-10 py-20 flex-col flex lg:flex-row">
            <img src={settings} alt="" className='setting-img'/>
            <div className="info-img m-[10px] w-[200px] h-[200px] flex items-center justify-center">
                <img src={profile} alt="" />
            </div> 
            <div className="info-info items-center lg:items-start">
                <div>
                    <h1 className='text-[26px] lg:text-[34px]'>Mehdi Geundouz</h1>
                    <h3 className='text-[14px] lg:text-[18px] text-center lg:text-start'>5 Publication</h3>
                </div>
                <p className='text-[16px] lg:text-[20px] text-center lg:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, fugiat eligendi quas sit ipsam corporis.</p>
            </div>
            <div className="info-contact items-center lg:items-start mt-10 md:mt-0">
                <h1 className='lg:text-[24px] text-[20px]'>contact</h1>
                <div className="info-div">
                    <div className="w-[350px] h-[50px]">
                        <img src={phone} alt="" />
                        <p className='text-[14px] lg:text[18px]'>0712457812</p>
                        <Demo text='0712457812'/>
                    </div>
                    <div className="w-[350px] h-[50px]">
                        <img src={mail} alt="" />
                        <p className='text-[14px] lg:text[18px]'>jfkldq@gmail.com</p>
                        <Demo text='jfkldq@gmail.com'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='infocard-container font-Raleway'>
            <div className='text'>
                <h4>Annonce publiées par vous</h4>
            </div>
            <div className="cart-container grid lg:grid-cols-3 md:grid-cols-2 ">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </div>
        </div>
    </div>
  )
}
