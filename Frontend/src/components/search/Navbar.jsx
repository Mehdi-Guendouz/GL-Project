import {useState} from 'react'
import React from 'react'
import {close, menu, search} from '../assets'
import {ChatBubbleOvalLeftIcon, BookmarkIcon, ChevronDownIcon} from '@heroicons/react/24/outline'

const Navbar = () => {
    const [toggle, settoggle] = useState(false);
  return (
    <nav className='w-full flex py-4 justify-between items-center navbar'>
        <div className='sm:flex hidden justify-around items-center flex-1'>
            <p>Logo</p>
            <div  className='flex items-center space-x-6'>
                <form action="">
                    <div className='relative flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#9A9A9A" className="w-5 h-5 absolute ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                        <input
                        type="text"
                        name='search'
                        placeholder='Rechercher...'
                        autoComplete='off'
                        aria-label='Recherche'
                        className='pl-10 pr-4 py-2 placeholder-darkgray3 bg-gray2 text-darkgray1 rounded-md border-none focus:outline-1 focus:outline-blue' />
                    </div>
                </form>
                <button className='bg-secondary text-white font-bold py-1 px-4 rounded'>Publier</button>
                <ChatBubbleOvalLeftIcon className='w-6 h-6 text-dark' aria-hidden="true"/>
                <BookmarkIcon className='w-6 h-6 text-dark' aria-hidden="true"/>

                <div className='flex items-center space-x-3'>
                <div className='bg-gray1 rounded-3xl w-8 h-8'></div>
                <p className='text-dark'>Mehdi Guendouz</p>
                <ChevronDownIcon className='w-4 h-4 text-dark stroke-2' aria-hidden="true"/>
            </div>
            </div>

            
        </div>

        <div className='sm:hidden flex flex-1 place-content-between'>
            <p className='ml-8'>Logo</p>
            <div className='flex flex-1 justify-end mr-8 items-center space-x-4'>
                <button className='bg-secondary text-white font-bold py-1 px-4 rounded'>Publier</button>
                <img 
                src={search}
                className="w-[20px] object-contain cursor-pointer"/>
                <img 
                src={toggle ? close : menu}
                className="w-[20px] object-contain cursor-pointer" 
                onClick={() => settoggle((prev) => !prev)}/>

                <div className={`${toggle ? 'flex' : 'hidden'} w-full p-4 bg-white drop-shadow-xl absolute top-10 right-0 mx-0 my-2 min-w-[140px] sidebar `}>
                    <div className='flex flex-col justify-end items-center flex-1 space-y-4'>
                        <p>Link 1</p>
                        <p>Link 2</p>
                        <p>Link 3</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar