import React from 'react'
import Card from './Card'
import { useState } from 'react'
import FilterModal from './FilterModal'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  fontFamily: 'Raleway',
  fontWeight: '500',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '12px',
};

const Results = () => {
  const [openFilter, setOpenFilter] = useState(false);
    const handleOpenFilter = () => {
        setOpenFilter(true);
    };
    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
  return (
    <div className='flex flex-col lg2:w-[72%] w-full space-y-4'>
      <div className='flex space-x-4 justify-between items-center'>
        <p>Résultats de votre recherche</p>
        <div><button onClick={handleOpenFilter} className='lg2:hidden flex w-full bg-secondary text-white font-bold py-1 px-4 rounded'>Filtrer</button></div>
        <Modal
            open={openFilter}
            onClose={handleCloseFilter}
          >
            <Box sx={{...style, '.Mui-focused': {outline: 'none'}}}>
              <FilterModal />
            </Box>
        </Modal>
      </div>
      <div className='grid md2:grid-cols-3 sm2:grid-cols-2 grid-cols-1 items-center justify-items-start gap-4'>
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