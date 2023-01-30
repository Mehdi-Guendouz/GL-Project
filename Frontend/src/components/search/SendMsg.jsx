import React from 'react'
import {XMarkIcon} from '@heroicons/react/24/outline'


const SendMsg = () => {
  return (
    <div className='flex flex-col space-y-4 border-[1px] border-gray1 px-8 py-4 bg-white rounded-[12px] '>
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2 items-center'>
                <p className='text-dark text-dark font-semibold'>Message à :</p>
                <div className='flex space-x-2 p-2 items-center rounded-3xl'>
                    <div className='bg-gray1 rounded-3xl w-8 h-8'></div>
                    <p>Soraya Djerrab</p>
                </div>
            </div>
        </div>
        <div>
            <textarea class="h-[80px] mt-1 px-3 py-2 bg-white border-[1px] border-darkgray2 shadow-sm focus:outline-none block w-full rounded-md sm:text-sm" placeholder="Votre message ..."></textarea>
        </div>
        <div>
            <button className='inline-flex bg-secondary text-white py-[4px] px-4 rounded items-center space-x-2'>Envoyer</button>
        </div>
    </div>
  )
}

export default SendMsg