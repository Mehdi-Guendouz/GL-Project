import React, { useState, useEffect, useContext } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import AppContext from '../store'
import wilays from '../wilays'

const primarySchoolModules = ['Maths', 'History', 'Geography', 'Arabic', 'French', 'English']
const middleSchoolModules = ['Maths', 'Physics', 'Science', 'History & Geography', 'Arabic', 'French', 'English']
const highSchoolModules = ['Maths', 'Physics', 'Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering' ,'History & Geography', 'Arabic', 'French', 'English', 'German', 'Spanish']

const Input = ({ label, arr, noChevron, textarea, wilayas, communes, placeHolder, category, cours, tarif, email, phone, loc }) => {
    const appContext = useContext(AppContext)
    
    const [open, setOpen] = useState(false)
    const [tmpArr, setTmpArr] = useState([])

    useEffect(() => {
        if (cours && appContext.category) {
            if (appContext.category === 'primary school') {
                appContext.activeCours(primarySchoolModules[0])
            } else if (appContext.category === 'middle school') {
                appContext.activeCours(middleSchoolModules[0])
            } else if (appContext.category === 'high school') {
                appContext.activeCours(highSchoolModules[0])
            }
        }
    }, [appContext.category])

    useEffect(() => {
        if (appContext.id) {
            const wilayaCommunes = wilays.find(item => item.id === appContext.id)

            if (wilayaCommunes) {
                setTmpArr(wilayaCommunes.communes)
                appContext.activeCommune(wilayaCommunes.communes[0])
            }
        }
    }, [appContext.id])

  return (
    <div className="dp-input" style={textarea ? {height: '180px'} : communes && !appContext.wilaya ? {pointerEvents: 'none', userSelect: 'none', opacity: '0.7'} : cours && !appContext.category ? {pointerEvents: 'none', userSelect: 'none', opacity: '0.7'} : {}} onClick={() => setOpen(!open)}>
        {!textarea && noChevron ? (
            <input type="text" onChange={(e) => {
                if (tarif) {
                    appContext.activeTarif(Number(e.target.value))
                } else if (email) {
                    appContext.activeEmail(e.target.value)
                } else if (phone) {
                    appContext.activePhone(e.target.value)
                } else if (loc) {
                    appContext.activeLoc(e.target.value)
                }
            }} />
        ) : !textarea && !noChevron ? (
            <input type="text" value={placeHolder} readOnly style={{cursor: 'pointer'}} />
        ) : (
            <textarea onChange={(e) => appContext.activeDescription(e.target.value)}></textarea>
        )}
        
        {!noChevron && (
            <span className='icon-container'>
                <BiChevronDown className='icon' />
            </span>
        )}

        <span className='label'>
            {label}
        </span>

        {open && arr && arr.length > 0 && !wilayas && !communes && !cours && category ? (
            <ul>
                {arr.map((item, index) => {
                    return (
                        <li key={index} onClick={() => appContext.activeCategory(item)}>{item}</li>
                    )
                })}
            </ul>
        ) : open && !wilayas && !communes && !category && cours ? (
            <ul>
                {appContext.category === 'primary school' ? primarySchoolModules.map((item, index) => {
                    return (
                        <li key={index} onClick={() => appContext.activeCours(item)}>{item}</li>
                    )
                }) : appContext.category === 'middle school' ? middleSchoolModules.map((item, index) => {
                    return (
                        <li key={index} onClick={() => appContext.activeCours(item)}>{item}</li>
                    )
                }) : appContext.category === 'high school' && highSchoolModules.map((item, index) => {
                    return (
                        <li key={index} onClick={() => appContext.activeCours(item)}>{item}</li>
                    )
                })}
            </ul>
        ) : open && arr && arr.length > 0 && wilayas && !communes ? (
            <ul>
                {arr.map((item, index) => {
                    return (
                        <li key={index} onClick={() => appContext.activeId(Number(item.id), item.name)}>{item.id}-{item.name}</li>
                    )
                })}
            </ul>
        ) : open && !arr && tmpArr && tmpArr.length > 0 && communes && (
            <ul>
                {tmpArr.map((item, index) => {
                    return (
                        <li key={index} onClick={() => appContext.activeCommune(item)}>{item}</li>
                    )
                })}
            </ul>
        )}

        
    </div>
  )
}

export default Input