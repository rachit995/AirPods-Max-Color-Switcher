import React, { useState } from 'react'
import './App.css';
import images from './assets/images'
import { FaTwitter } from 'react-icons/fa'

function App() {
  const [headPhoneColor, setHeadPhoneColor] = useState(0)
  const [rightColor, setRightColor] = useState(0)
  const [leftColor, setLeftColor] = useState(0)
  const imageUrl = images[`s${headPhoneColor}${leftColor}${rightColor}`]
  function generateOptions() {
    return (
      <>
        <option value='0'>Space Grey</option>
        <option value='1'>Silver</option>
        <option value='2'>Green</option>
        <option value='3'>Sky Blue</option>
        <option value='4'>Pink</option>
      </>
    )
  }
  return (
    <div className='app__container'>
      <div className="app__leftColumn">
        <img src={imageUrl} alt='' className='app__AirPodsMaxImage' />
      </div>
      <div className="app__rightColumn">
        <div>
          <div class="app__lc_new">
            New
            </div>
          <h1 class="app__lc_h1">
            AirPods Max
          </h1>
        </div>
        <h1 class="app__lc_h2">
          Body Color
        </h1>
        <select onChange={(e) => { setHeadPhoneColor(e.target.value) }}>
          {generateOptions()}
        </select>
        <h1 class="app__lc_h2">
          Left Ear Cushion
        </h1>
        <select onChange={(e) => { setLeftColor(e.target.value) }}>
          {generateOptions()}
        </select>
        <h1 class="app__lc_h2">
          Right Ear Cushion
        </h1>
        <select onChange={(e) => { setRightColor(e.target.value) }}>
          {generateOptions()}
        </select>
      </div>
      <div className="app__footer">
        <a href="https://bit.ly/3h2bqRb" target="_blank" rel="noreferrer">
          <FaTwitter />
          <h4>
            @rachit995
        </h4>
        </a>
      </div>
    </div>
  );
}

export default App;
