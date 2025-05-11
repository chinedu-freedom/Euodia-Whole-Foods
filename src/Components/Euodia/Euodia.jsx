import EuodiaImage from '../../assets/Images/Euodia.png'
import style from '../../Styles/Euodia.module.css'
import React from 'react'

const Euodia = () => {
  return (
    <>
       <div className={style.lastSectionContainer}>
            <img src={EuodiaImage} alt="Home page final image" className={style.lastSectionImage} />
            <div className={style.textOverlay}>
                <h2>Euodia</h2>
                <p>Whole foods</p>
            </div>
        </div>
        </>
  )
}

export default Euodia

