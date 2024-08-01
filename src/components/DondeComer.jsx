/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import maxburguer from "../images/maxburguer.jpg"
import { Tarjeta } from '../marcos/Tarjeta';
import { useEffect, useState } from 'react'

export const DondeComer = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    conseguirUsuarios();
  })

  const conseguirUsuarios = async() => {
    const url = "http://localhost:3900/api/listar";
    let peticion = await fetch(url, {
      method: "GET"
    });
    let datos = await peticion.json();

    if(datos.status === "succes"){
      setUsers(datos.users);
    }

    
  }

  return (
    <div className='p-8 grid grid-cols-4 gap-8'>

      <Tarjeta users={users} ></Tarjeta>
      

    </div>
  )
}
