import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

/* ==========imges========= */
import efface from '../../img/icons/eff.png'
import max from '../../img/icons/max.png'
import './profile.css'
import profile from '../../img/profile.jpg'

export default function Card() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        bradius: 20,
        borderRadius: '20px',
        boxShadow: 24,
      };
    

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const CardModal = () =>{
        <>
            <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            className='blur-color '
            >
            <Box sx={{ ...style, width: 600 }}>
                <div className='bg-[#FCBB14] text-center py-2 rounded-t-[20px]'>
                    <h2 id="child-modal-title" className='font-Raleway text-[28px] font-bold text-white capitalize'>Supprimer une annonce</h2>
                </div>
                <p className='font-Raleway text-[28px] mt-4 text-[#1e1e1e] text-center capitalize font-semibold p-4'>étes-vous sur de voulior supprimer votre annonce</p>
                <div className='font-Raleway flex items-center justify-center gap-10 py-4 text-[20px] font-bold'>
                    <button className='bg-[#fcbb14] px-[30px] py-[6px] text-white rounded-[10px]'>Confirmer</button>
                    <button className='px-[30px] py-[6px] bg-white text-[#fcbb14] border-[1px] border-solid border-[#fcbb14] rounded-[10px]' onClick={handleClose}>Annuler</button>
                </div>
            </Box>
        </Modal> 
    </>
    }



  return (
    <div className="card">
    <div>
        <div className='pres-info'>
            <div className="info-img card-img">
                <img src={profile} alt="" />
            </div>
            <div>
                <h2 className='name'>Soraya djerrab</h2>
                <h3 className='date'>15 dec 2015</h3>
            </div>
            <img src={max} alt="" />
        </div>
        <div className='content'>
            <h1 >Cours de math lycee</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatem ab tempora quasi! Reprehenderit, tempore!</p>
            <div>
                <button className='prix'>3000 DA</button>
                <img src={efface} className='cursor-pointer' alt="" onClick={handleOpen}/>
            </div>
        </div>
        <CardModal/>
    </div>
</div>
  )
}
