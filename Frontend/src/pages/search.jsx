import React from 'react'
import {useState} from 'react'

import Navbar from '../components/search/Navbar'
import Filters from '../components/search/Filters'
import Results from '../components/search/Results'

const search = () => {
  return (
    
    <div className='font-Raleway font-semibold bg-gray3 w-full overflow-hidden'>
      <div>
      <Navbar />
      </div>
      <div className='flex justify-around p-8'>
        <Filters />
        <Results />
      </div>
    </div>

  )
}

export default search