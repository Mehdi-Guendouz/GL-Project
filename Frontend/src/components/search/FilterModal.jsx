import React from 'react'
import { categories, communes, cours, wilayas } from './constants'
import BasicSelect from './Select'
import RadioButtons from './Radio'

const FilterModal = () => {
  return (
    <div className='flex-col space-y-8 text-dark items-start w-[320px] px-6 py-4'>
      <p>Filtrer les résultats</p>
      <BasicSelect name='Catégorie' list={categories}/>
      <BasicSelect name='Cours' list={cours}/>
      <RadioButtons />
      <BasicSelect name='Wilaya' list={wilayas}/>
      <BasicSelect name='Commune' list={communes}/>
      <button className='w-full bg-secondary text-white font-bold py-1 px-4 rounded'>Appliquer</button>
    </div>
  )
}

export default FilterModal