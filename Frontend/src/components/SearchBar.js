import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  return (
    <div className='search-bar'>
        <FiSearch className='icon' />
        <input type="text" placeholder='Rechercher' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar