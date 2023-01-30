import React from 'react'
import Filters from '../components/search/Filters'
import Results from '../components/search/Results'

export default function FiltersPage() {
  return (
    <div className='font-Raleway font-semibold bg-gray3 w-full overflow-hidden'>
          <div>
          <Navbar />
          </div>
          <div className='flex justify-around p-8'>
            <Filters />
            <Results /> 
            {/* <Details /> */}
            {/* <SendMsg /> */}
          </div>
    </div>
  )
}
