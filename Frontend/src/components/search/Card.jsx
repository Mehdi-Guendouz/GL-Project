import {useState} from 'react'
import React from 'react'
import {ArrowUpRightIcon, ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline'
import {BookmarkIcon} from '@heroicons/react/24/solid'

const Card = () => {
    const [toggle, settoggle] = useState(false);
  return (
    <div className='flex flex-col space-y-4 border-[1px] border-gray1 w-[280px] px-6 py-4 bg-white rounded-[12px] cursor-pointer hover:drop-shadow-xl hover:shadow-dark/50 ease-in-out duration-1000'>
        <div className='flex items-center justify-between'>
            <div className='flex space-x-4'>
                <div className='bg-gray1 rounded-3xl w-8 h-8'></div>
                <div className='flex flex-col -space-y-1'>
                    <p className='text-dark text-sm'>Soraya Djerrab</p>
                    <p className='text-darkgray2 text-xs text-sm'>15 décembre 2022</p>
                </div>
            </div>
            <ArrowUpRightIcon className='w-4 h-4 text-dark' aria-hidden="true"/>

        </div>
        <div className='space-y-2'>
            <div className='-space-y-1'>
                <p className='text-dark'>Cours de Maths, lycée</p>
                <p className='text-darkgray1 text-sm'>Bab ezzouar, Alger</p>
            </div>
            <p className='text-darkgray2 text-xs truncate'>Bonjour, j’offre des cours en maths sur Alger. Pour toute personne intéressée prière de me contacter.</p>
        </div>
        <div className='flex items-center justify-between'>
            <div className='border-[1px] border-gray1 text-darkgray1 text-xs px-2 py-1 rounded-[4px]'>3000 DA</div>
            <div className='flex space-x-3'>
                <ChatBubbleOvalLeftIcon className='w-5 h-5 text-dark' aria-hidden="true"/>
                <BookmarkIcon className={`${toggle ? 'text-secondary stroke-none' : 'text-white'} stroke-[1.5px] stroke-dark w-5 h-5`} aria-hidden="true" onClick={() => settoggle((prev) => !prev)}/>
            </div>
        </div>
    </div>
  )
}

export default Card