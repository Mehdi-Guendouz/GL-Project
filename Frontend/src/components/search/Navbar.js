import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Button from '../components/Button'
import { BsPlus, BsBookmark } from 'react-icons/bs'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { BiChevronDown } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { RiSettingsLine } from 'react-icons/ri'
import { IoExitOutline } from 'react-icons/io5'

const Header = () => {
    const [dpActive, setDpActive] = useState(false)

    const handleLogout = () => {
        // logout logic goes here
    }
  return (
    <nav className='navbar'>
        <div className="container">
            <div className="logo">
                <Link to='/'>App logo here</Link>
            </div>
            <SearchBar />
            <Button btnText='Publier' BtnIcon={BsPlus} />
            <ul className='icons-list'>
                <li>
                    <Link to='/bookmarks'>
                        <span>
                            <BsBookmark className='icon' />
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/conversations'>
                        <span>
                            <IoChatbubblesOutline className='icon' />
                        </span>
                    </Link>
                </li>
            </ul>
            <div className="user-dp">
                <img src="/k.jpeg" alt="profile_picture" onClick={() => setDpActive(!dpActive)} />
                <p onClick={() => setDpActive(!dpActive)}>Robert Hilson</p>
                <span onClick={() => setDpActive(!dpActive)}>
                    <BiChevronDown className='icon' />
                </span>

                {dpActive && (
                    <ul className='dp'>
                        <li>
                            <Link to='/profile'>
                                <FiUser className='icon' />
                                Mon Profil
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile/settings'>
                                <RiSettingsLine className='icon' />
                                Paramètres
                            </Link>
                        </li>
                        <li onClick={handleLogout}>
                            <IoExitOutline className='icon' />
                            Deconnexion
                        </li>
                    </ul>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Header