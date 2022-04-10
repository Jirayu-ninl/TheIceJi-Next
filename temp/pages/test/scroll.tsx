/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'

import useWindowSize from '@libs/hooks/useWindowSize'

import images from 'contents/mock/images'

function App() {
  // Hook to grab window size

  const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef(null)
  const scrollContainer = useRef(null)

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  

  // // Run scrollrender once page is loaded.
  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling())
  // }, [])

  // //set the height of the body.
  // useEffect(() => {
  //   setBodyHeight()
  // }, [size.height])

  // //Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`
  // }

  // // Scrolling
  // const skewScrolling = () => {
  //   //Set Current to the scroll position amount
  //   data.current = window.scrollY
  //   // Set Previous to the scroll previous position
  //   data.previous += (data.current - data.previous) * data.ease
  //   // Set rounded to
  //   data.rounded = Math.round(data.previous * 100) / 100

  //   // Difference between
  //   let difference = data.current - data.rounded
  //   let acceleration = difference / size.width
  //   let velocity = +acceleration
  //   let skew = velocity * 7.5

  //   //Assign skew and smooth scrolling to the scroll container
  //   scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`
  //   // console.log(data)
  //   //loop vai raf
  //   requestAnimationFrame(() => skewScrolling())
  // }

  const CSSapp = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
  }

  const CSSimgContainer = {
    width: 700,
    height: 420,
    overflow: 'hidden',
    position: 'relative',
    margin: '400px auto',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  }

  return (
    <>
      <div ref={app} style={CSSapp}>
        <div
          ref={scrollContainer}
          style={{ padding: '2vh 0', pointerEvents: 'none' }}
        >
          {images.map((image, index) => (
            <>
              <div key={index} style={CSSimgContainer}>
                <img
                  src={image}
                  alt={`people ${index}`}
                  style={{ width: '100%', position: 'absolute' }}
                />
              </div>
              <h2>
                Skew <span className='outline'>Scrolling</span>
              </h2>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
