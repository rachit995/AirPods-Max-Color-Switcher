import React, { useState } from 'react'
import './App.css';
import images from './assets/images'
import { FaRandom } from 'react-icons/fa'

function getRandomColor() {
  return Math.floor(Math.random() * 5)
}

function App() {
  const [headPhoneColor, setHeadPhoneColor] = useState(getRandomColor())
  const [rightColor, setRightColor] = useState(getRandomColor())
  const [leftColor, setLeftColor] = useState(getRandomColor())
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
    <>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-2'>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <div className="col-span-2">
              <div class="grid grid-cols-1 gap-2 place-items-center min-w-full p-4">
                <img src={imageUrl} alt='' className='app__AirPodsMaxImage' />
              </div>
            </div>
            <div className=''>
              <div className="grid grid-cols-1 gap-2 place-items-center h-full p-10 md:p-4">
                <div>
                  <div>
                    <div class="app__lc_new">
                      New
                  </div>
                    <h1 class="text-5xl font-bold py-2">
                      AirPods Max
                  </h1>
                  </div>
                  <h1 class="app__selectLabel">
                    Body Color
                </h1>
                  <select
                    className='app__select'
                    onChange={(e) => { setHeadPhoneColor(e.target.value) }}
                    value={headPhoneColor}
                  >
                    {generateOptions()}
                  </select>
                  <h1 class="app__selectLabel">
                    Left Ear Cushion Color
                </h1>
                  <select
                    className='app__select'
                    onChange={(e) => { setLeftColor(e.target.value) }}
                    value={leftColor}
                  >
                    {generateOptions()}
                  </select>
                  <h1 class="app__selectLabel">
                    Right Ear Cushion Color
                </h1>
                  <select
                    className='app__select'
                    onChange={(e) => { setRightColor(e.target.value) }}
                    value={rightColor}
                  >
                    {generateOptions()}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 text-center">
            Color combinations by <a href="https://forums.macrumors.com/threads/all-25-airpod-max-cup-headband-combos.2274186/" className="font-bold" target="_blank" rel="noreferrer">
              Ryan Barrieau
            </a> / Developed by  <a href="https://bit.ly/3h2bqRb" className="font-bold" target="_blank" rel="noreferrer">
              @rachit995
            </a>
          </div>
        </div>
      </div>
      <div className="fixed h-12 w-12 bottom-4 right-4">
        <button
          className="p-3 text-lg shadow-md text-gray bg-gray-300 rounded-full"
          title="Random Color"
          onClick={() => {
            setHeadPhoneColor(getRandomColor())
            setLeftColor(getRandomColor())
            setRightColor(getRandomColor())
          }}
        >
          <FaRandom />
        </button>
      </div>
    </>
  );
}

export default App;
