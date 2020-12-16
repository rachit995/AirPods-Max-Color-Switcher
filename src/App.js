import React, { useState } from 'react'
import './App.css';
import images from './assets/images'
import { FaRandom } from 'react-icons/fa'
import s0Icon from './assets/images/color-icons/0.png'
import s1Icon from './assets/images/color-icons/1.png'
import s2Icon from './assets/images/color-icons/2.png'
import s3Icon from './assets/images/color-icons/3.png'
import s4Icon from './assets/images/color-icons/4.png'
import c0Icon from './assets/images/cushion-color-icons/0.jpeg'
import c1Icon from './assets/images/cushion-color-icons/1.jpeg'
import c2Icon from './assets/images/cushion-color-icons/2.jpeg'
import c3Icon from './assets/images/cushion-color-icons/3.jpeg'
import c4Icon from './assets/images/cushion-color-icons/4.jpeg'

const AIRPODS_MAX_COST = 549.00
const AIRPODS_MAX_EAR_CUSHION_COST = 69.00
const COLORS = {
  0: {
    label: "Space Grey",
    href: "space-gray",
    icon: s0Icon,
    cushion: c0Icon,
  },
  1: {
    label: "Silver",
    href: "silver",
    icon: s1Icon,
    cushion: c1Icon,
  },
  2: {
    label: "Green",
    href: "green",
    icon: s2Icon,
    cushion: c2Icon,
  },
  3: {
    label: "Sky Blue",
    href: "sky-blue",
    icon: s3Icon,
    cushion: c3Icon,
  },
  4: {
    label: "Pink",
    href: "pink",
    icon: s4Icon,
    cushion: c4Icon,
  },
}
const AIRPODS_MAX_BUY_LINK = "https://www.apple.com/shop/buy-airpods/airpods-max"

function getRandomColor() {
  return Math.floor(Math.random() * 5)
}


function App() {
  const [headPhoneColor, setHeadPhoneColor] = useState(getRandomColor())
  const [rightColor, setRightColor] = useState(getRandomColor())
  const [leftColor, setLeftColor] = useState(getRandomColor())
  const imageUrl = images[`s${headPhoneColor}${leftColor}${rightColor}`]
  const generateOptions = () => Object.keys(COLORS).map((key) => <option value={key}>{COLORS[key]?.label}</option>)
  let totalCost = AIRPODS_MAX_COST
  if (leftColor === rightColor && headPhoneColor === leftColor) {
    totalCost = AIRPODS_MAX_COST
  } else if (((headPhoneColor === leftColor) || (headPhoneColor === rightColor)) && (rightColor !== leftColor)) {
    totalCost = totalCost + AIRPODS_MAX_EAR_CUSHION_COST
  }
  else if (leftColor === rightColor) {
    totalCost = totalCost + AIRPODS_MAX_EAR_CUSHION_COST
  } else if (leftColor !== rightColor) {
    totalCost = totalCost + (2 * AIRPODS_MAX_EAR_CUSHION_COST)
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
                    <div className="app__lc_new">
                      New
                  </div>
                    <h1 className="text-5xl font-bold py-2">
                      AirPods Max
                    </h1>
                  </div>
                  <h1 className="app__selectLabel">
                    Body Color
                  </h1>
                  <div className='flex place-items-center'>
                    <img src={COLORS[headPhoneColor]?.icon} className='h-6 w-6 mr-3' alt={COLORS[headPhoneColor]?.label}></img>
                    <select
                      className='app__select'
                      onChange={(e) => { setHeadPhoneColor(parseInt(e.target.value, 10)) }}
                      value={headPhoneColor}
                    >
                      {generateOptions()}
                    </select>
                  </div>
                  <h1 className="app__selectLabel">
                    Left Ear Cushion Color
                  </h1>
                  <div className='flex place-items-center'>
                    <img src={COLORS[leftColor]?.cushion} className='h-6 w-6 mr-3' alt={COLORS[headPhoneColor]?.label}></img>
                    <select
                      className='app__select'
                      onChange={(e) => { setLeftColor(parseInt(e.target.value, 10)) }}
                      value={leftColor}
                    >
                      {generateOptions()}
                    </select>
                  </div>
                  <h1 className="app__selectLabel">
                    Right Ear Cushion Color
                  </h1>
                  <div className='flex place-items-center'>
                    <img src={COLORS[rightColor]?.cushion} className='h-6 w-6 mr-3' alt={COLORS[headPhoneColor]?.label}></img>
                    <select
                      className='app__select'
                      onChange={(e) => { setRightColor(parseInt(e.target.value, 10)) }}
                      value={rightColor}
                    >
                      {generateOptions()}
                    </select>
                  </div>
                  <h1 className="text-4xl pt-8 py-6 font-medium">
                    {`$${totalCost}`}
                  </h1>
                  <hr></hr>
                  <button
                    className="py-2 px-9 bg-primary rounded-lg text-white my-6 font-medium w-full"
                    onClick={() => window.open(`${AIRPODS_MAX_BUY_LINK}/${COLORS[headPhoneColor]?.href}`)}
                  >
                    Add to Bag
                    </button>
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
