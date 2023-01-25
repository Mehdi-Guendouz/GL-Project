import React, {useState} from 'react'
import TextField from '@mui/material/TextField';

/* ===========image ============== */
import profile from '../../img/profile.jpg'
// import phone from '../../img/icons/phone.png'
// import mail from '../../img/icons/mail.png'
// import copy from '../../img/icons/copy.png'
import settings from '../../img/icons/settings.png'
// import Card from './Card'

export default function ModifieProfile() {
  const [isActivate, setIsActivate] = useState(true);

  return (
    <div className='flex items-center justify-center w-full h-screen bg-[#F5F5F5] font-Raleway'>
        <div className='border-[0.5px] relative border-solid border-[#dedede] bg-white grid grid-cols-[auto,1fr] w-[90%] h-[70%] min-w-[80%]'>
              <img src={settings} alt="" className='absolute top-0 right-0 translate-x-[-10px] translate-y-4 cursor-pointer'/>
          <div className="p-10 h-full flex items-center justify-between flex-col">
              <div>
                <div className="w-[200px] h-[200px] object-cover rounded-[50%]">
                    <img src={profile} alt="" className=' w-[200px] h-[200px] rounded-[50%]'/>
                </div>
                <h3 className='border-b-2 border-[#7C797A] border-solid text-[#7C797A] font-semibold text-[20px] text-center cursor-pointer mt-2'>Changer une photo</h3>
              </div>
              <button className={`py-[10px] px-8 text-[20px] font-bold ${isActivate ? 'bg-blue-800' : 'bg-[#2E2E2E]'} text-[#F5F5F5]`}>Enregistrer</button>
          </div>
          <div className='flex items-start p-10 justify-start flex-col gap-4 mr-auto min-w-[600px]'>
              <h1 className='font-semibold text-[40px] text-black capitalize'>Modifier vos informations:</h1>
              <TextField
                id="outlined-textarea"
                label="Nom"
                placeholder="nom"
                className='text-[#575757] border-[#7C797A] w-[80%] p-4'
                multiline
              />
              <TextField
                id="outlined-textarea"
                label="Prénom"
                placeholder="Prénom"
                className='text-[#575757] border-[#7C797A] w-[80%] p-4'
                multiline
              />
              <TextField
                id="outlined-textarea"
                label="Bio"
                placeholder="write something"
                className='text-[#575757] border-[#7C797A] w-[80%] h-[150px] p-4'
                multiline
              />
          </div>
        </div>
    </div>
  )
}
