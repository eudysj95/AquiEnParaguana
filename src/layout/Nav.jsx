/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='flex justify-around h-20 leading-20 text-xl font-semibold'>
      <div className='active:text-blue-400'><Link to="/comer">Donde Comer</Link></div>
      <div className='active:text-blue-400'><Link to="/comprar">Donde Comprar</Link></div>
      <div className='active:text-blue-400'><Link to="/alojarse">Donde Alojarse</Link></div>
      <div className='active:text-blue-400'><Link to="/recrearse">Donde Recrearse</Link></div>
    </div>
  )
}
