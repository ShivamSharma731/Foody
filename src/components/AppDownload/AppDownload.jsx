import React from 'react'
import "./AppDownload.css"
import {assets} from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="appdo" id="appdo">
<p>For Better Experience Dowmload <br />Tomato App</p>
<div className="app-plat">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
</div>
      
    </div>
  )
}

export default AppDownload
