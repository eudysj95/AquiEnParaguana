/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import { Tarjeta } from '../marcos/Tarjeta';

export const DondeComprar = () => {
  const [usersComprar, setUsersComprar] = useState([]);

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
      let users = datos.users;
      let datosFiltrados = users.filter(user => user.categoria == "comprar")
      setUsersComprar(datosFiltrados);
    }
  }

  return (
    <div className='p-8 grid grid-cols-4 gap-8'>

      <Tarjeta users={usersComprar} ></Tarjeta>
      

    </div>
  )
}
