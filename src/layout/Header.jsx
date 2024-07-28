/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../images/logo.jpg";
import facebook from "../images/facebook.png";

export const Header = () => {
  return (
    <div className='w-full h-28 mt-3 flex justify-between'>

      <div></div>

      <img src={logo} alt="logo" />

      <div className='flex justify-between items-center p-2'>
          {/* <div>
            <h5 className='font-bold text-lg xl:text-xl'>eudysjmorag@gmail.com</h5>
          </div>
          <div className='flex justify-between'>
            <a href='https://www.facebook.com/share/sdUronfyQVQNnVG9/?mibextid=qi2Omg' target='blank_'> <img className='w-8 h-8 xl:w-12 xl:h-12' src={facebook} alt='redes' /> </a>
          </div> */}
        </div>

    </div>
  )
}
