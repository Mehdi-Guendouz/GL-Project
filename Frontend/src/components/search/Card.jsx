import {useState} from 'react'
import React from 'react'
import {ArrowUpRightIcon, ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline'
import {BookmarkIcon} from '@heroicons/react/24/solid'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Details from './Details';
import SendMsg from './SendMsg';

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

const Card = () => {
    const [toggle, settoggle] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [openMsg, setOpenMsg] = useState(false);
    const handleOpenMsg = () => {
        setOpenMsg(true);
    };
    const handleCloseMsg = () => {
        setOpenMsg(false);
    };
  return (
    <div>
        <div className='flex flex-col sm:justify-start space-y-4 border-[1px] border-gray1 w-[280px] px-6 py-4 bg-white rounded-[12px] cursor-pointer hover:drop-shadow-xl hover:shadow-dark/50 ease-in-out duration-1000'>
            <div onClick={handleOpen} className='flex items-center justify-between'>
                <div className='flex space-x-4'>
                    <div className='bg-gray1 rounded-3xl w-8 h-8'></div>
                    <div className='flex flex-col -space-y-1'>
                        <p className='text-dark text-sm'>Soraya Djerrab</p>
                        <p className='text-darkgray2 text-xs text-sm'>15 décembre 2022</p>
                    </div>
                </div>
                <ArrowUpRightIcon className='w-4 h-4 text-dark' aria-hidden="true"/>

            </div>
            <div onClick={handleOpen} className='space-y-2'>
                <div className='-space-y-1'>
                    <p className='text-dark'>Cours de Maths, lycée</p>
                    <p className='text-darkgray1 text-sm'>Bab ezzouar, Alger</p>
                </div>
                <p className='text-darkgray2 text-xs truncate'>Bonjour, j’offre des cours en maths sur Alger. Pour toute personne intéressée prière de me contacter.</p>
            </div>
            <div className='flex items-center justify-between'>
                <div onClick={handleOpen}><div className='border-[1px] border-gray1 text-darkgray1 text-xs px-2 py-1 rounded-[4px]'>3000 DA</div></div>
                <div className='flex space-x-3'>
                    <ChatBubbleOvalLeftIcon onClick={handleOpenMsg} className='w-5 h-5 text-dark' aria-hidden="true"/>
                    <BookmarkIcon className={`${toggle ? 'text-secondary stroke-secondary' : 'text-white stroke-dark'} stroke-[1.5px] w-5 h-5`} aria-hidden="true" onClick={() => settoggle((prev) => !prev)}/>
                </div>
            </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={{...style, '.Mui-focused': {outline: 'none'}}}>
              <Details />
            </Box>
        </Modal>
        <Modal
            open={openMsg}
            onClose={handleCloseMsg}
          >
            <Box sx={{...style, '.Mui-focused': {outline: 'none'}}}>
              <SendMsg />
            </Box>
        </Modal>
    </div>
  )
}

export default Card