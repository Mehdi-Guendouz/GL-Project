import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

const ImageSelect = () => {

  const [imagesList, setImagesList] = useState([])

  const handleDisplay = (e) => {
    if (imagesList.length < 4) {
      setImagesList([...imagesList, URL.createObjectURL(e.target.files[0])])
    }
  }

  const handleCancel = (index) => {
    if (imagesList.length > 0) {
      const tmpArr = imagesList.filter(item => item !== imagesList[index])
      setImagesList([...tmpArr])
    }
  }

  return (
    <div className='image-select'>

      {imagesList.length > 0 && imagesList.map((item, index) => {
        return (
          <div className="img-container" key={index}>
            <img src={item} alt="lessons_image" />
            <IoClose className='icon' onClick={() => handleCancel(index)} />
          </div>
        )
      })}

        {imagesList.length < 4 && (
          <label className="add">
            <span>
                <BsPlus />
            </span>
            <input type="file" id='picture_btn' style={{display: 'none'}} onChange={(e) => handleDisplay(e)} />
          </label>
        )}

        <label className='title'>Ajouter des photos du local</label>
    </div>
  )
}

export default ImageSelect