import React from 'react'
import ListboxCateg from './ListboxCateg'

const Filters = () => {
  const name = 'mahdi'
  return (
    <div className='flex flex-col space-y-4 md:w-[16%] sm:w-[50%] text-dark items-start'>
      <p>Filtrer les résultats</p>
      <ListboxCateg  />
    </div>
  )
}

export default Filters