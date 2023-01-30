import React from 'react'

const Button = ({ btnText, BtnIcon, outline }) => {
  return (
    <button className='main-btn' style={outline ? {backgroundColor: 'transparent', borderWidth: '1px', borderColor: '#575757', borderStyle: 'solid', color:'#575757', width: '100%', display: 'block', padding: '0.6rem'} : {}}>
        {btnText}
        {BtnIcon && (
            <BtnIcon className='icon' />
        )}
    </button>
  )
}

export default Button