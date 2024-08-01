/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


export const Tarjeta = ({users}) => {

  return (
    users.length >= 1 ? (
      users.map(user => {
        return (
          <div key={user._id} className='flex flex-col justify-between max-h-60 max-w-68 bg-[#00A3E8] p-2 text-center text-white rounded-md'>
  
          <h2 className='text-xl font-bold'>{user.nombre}</h2>
          <p>{user.descripcion}</p>
          {!user.imagen && <img className='mx-auto rounded' src="../images/default.png" alt="img" />}
          {user.imagen && <img className='mx-auto rounded h-24' src={"http://localhost:3900/api/imagen/"+user.imagen} alt="img" />}
          <p>{user.direccion}</p>
          <p>{user.telefono}</p>
      </div>
        )
      })
    )
    : <h2>No hay usuarios</h2>
    
    
  )
}
