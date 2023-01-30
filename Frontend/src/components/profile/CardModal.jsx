import React, {useState} from 'react'
import { Modal } from '@mantine/core';

const CardModal = ({isOpen}) => {
    const [open, setOpen] = useState(isOpen)

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
        {open && (
            <article>
                <header>
                    hi
                </header>
            </article>
        )}
    </>
  )
}

export default CardModal