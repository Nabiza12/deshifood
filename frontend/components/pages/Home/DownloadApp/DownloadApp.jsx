import React from 'react'
import './DownloadApp.scss'
function DownloadApp() {
  return (
    <div className='dwn'>
    <div className="dwn__bg"></div>
      <div className='container dwn__wrp'>
        <div className="dwn__lft">
          <h3 className="dwn__title">
          Download the food and groceries you love
          </h3>
          <p className='dwn__txt'>It's all at your fingertips – food you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
          <div className="dwn__img__lst">
            <img src="/assets/images/apple.svg" alt="" className="" />
            <img src="/assets/images/playstore.svg" alt="" className="" />
            <img src="/assets/images/appGalary.svg" alt="" className="" />
          </div>
        </div>
        <div className="dwn__rgt">
          <img src="/assets/images/mobileapp.png" alt="" className="" />
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default DownloadApp