import React from 'react'
import {BookmarkIcon} from '@heroicons/react/24/solid'
import {PhoneIcon, ClipboardIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline'
import school from '../../img/school.jpg'
import { useState } from 'react'


const Details = () => {
    const [toggle, settoggle] = useState(false);
  return (
    <div className='flex flex-col space-y-4 border-[1px] border-gray1 px-8 py-4 bg-white rounded-[12px] '>
        <div className='flex justify-between items-center'>
            <div className='flex space-x-4'>
                <div className='bg-gray1 rounded-3xl w-8 h-8'></div>
                <div className='flex flex-col -space-y-1'>
                    <p className='text-dark text-sm'>Soraya Djerrab</p>
                    <p className='text-darkgray2 text-xs text-sm'>15 décembre 2022</p>
                </div>
            </div>
        </div>
        <div className='space-y-2'>
            <div>
                <p className='text-dark text-md'>Cours de Maths, lycée</p>
                <p className='text-darkgray2 text-sm'>Bab ezzouar, Alger</p>
            </div>
            <p className='text-darkgray2 text-md'>Bonjour, j’offre des cours en maths sur Alger. Pour toute personne intéressée prière de me contacter,<br/>Merci.</p>
        </div>
        <div className='space-y-2'>
            <p className='text-dark text-md'>Contact</p>
            <div className='text-darkgray1 text-sm flex justify-between gap-4'>
                <div className='border-[1px] border-gray1 px-4 py-2 rounded-md flex justify-between items-center w-[50%]'>
                    <div className='flex items-center space-x-4'>
                        <PhoneIcon className='w-5 h-5' aria-hidden="true"/>
                        <p id='phone'>0555478522</p>
                    </div>
                    <ClipboardIcon className='w-4 h-4 cursor-pointer' aria-hidden="true" onClick={() => {const Text = document.getElementById('phone').innerHTML;navigator.clipboard.writeText(Text);}}/>
                </div>
                <div className='border-[1px] border-gray1 px-4 py-2 rounded-md flex justify-between items-center w-[50%]'>
                    <div className='flex items-center space-x-4'>
                        <EnvelopeIcon className='w-5 h-5' aria-hidden="true"/>
                        <p id='mail'>Example@gmail.com</p>
                    </div>
                    <ClipboardIcon className='w-4 h-4 cursor-pointer' aria-hidden="true" onClick={() => {const Text = document.getElementById('mail').innerHTML;navigator.clipboard.writeText(Text);}}/>
                </div>
            </div>
        </div>
        <div className='space-y-2'>
            <p className='text-dark text-md'>Photos</p>
            <div>
                <img src={school} alt="school" className='w-[200px] h-auto' />
            </div>
        </div>
        <div>
            <button className='inline-flex bg-secondary text-white font-semibold py-1 px-4 rounded items-center space-x-2'>
                    <span>Localisation</span>
                    <MapPinIcon className='w-5 h-5 stroke-2'/>
            </button>
        </div>
        <div className='flex justify-between items-center text-darkgray1'>
            <p className='border-[1px] border-darkgray1 px-3 py-1 rounded-[4px] text-sm'>3000 DA</p>
            <BookmarkIcon className={`${toggle ? 'text-secondary stroke-secondary' : 'text-white stroke-dark'} stroke-[1.5px] w-6 h-6 cursor-pointer`} aria-hidden="true" onClick={() => settoggle((prev) => !prev)}/>
        </div>
    </div>
  )
}

export default Details