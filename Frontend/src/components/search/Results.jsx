import React from 'react'
import Card from './Card'

const Results = () => {
  return (
    <div className='flex flex-col md:w-[72%] space-y-4'>
      <div className='flex space-x-4 items-center w-fit'>
        <p>Résultats de votre recherche</p>
      </div>
      <div className='flex flex-wrap gap-4 w-fit'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default Results