import React, {useState} from 'react'
import { IoClose } from 'react-icons/io5'

/* ==========imges========= */
import efface from '../../img/icons/eff.png'
import max from '../../img/icons/max.png'
import './profile.css'
import profile from '../../img/profile.jpg'
import Button from '../Button'

export default function Card() {
   
    const [open, setOpen] = useState(false);
    
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
                <img src={efface} className='cursor-pointer' alt="" onClick={() => setOpen(true)}/>
            </div>
        </div>
        
        {open && (
            <section className="modal-parent">
                <article className='close-modal'>
                    <header>
                        <p>Supprimer une annonce</p>
                        <IoClose className='icon' onClick={() => setOpen(false)} /> 
                    </header>

                    <div className="main-modal-body">
                        <p>Êtes-vous sûr de vouloir supprimer cette annonce ?</p>
                    </div>

                    <div className="buttons">
                        <Button btnText='Confirmer' />
                        <div className="close-container" onClick={() => setOpen(false)}>
                            <Button btnText='Annuler' outline />
                        </div>
                    </div>
                </article>
            </section>
        )}
    </div>
</div>
  )
}
