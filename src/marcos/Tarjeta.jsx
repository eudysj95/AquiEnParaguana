/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Tarjeta = ({name, descripcion, img, direccion, tlf}) => {
  return (
    <div className='flex flex-col justify-between h-60 w-60 bg-[#00A3E8] p-2 text-center text-white rounded-md'>

        <h2 className='text-xl font-bold'>{name}</h2>
        <p>{descripcion}</p>
        <img className='mx-auto rounded' src={img} alt="maxburguer" />
        <p>{direccion}</p>
        <p>{tlf}</p>
        

    </div>
  )
}
