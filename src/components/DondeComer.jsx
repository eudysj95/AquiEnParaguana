/* eslint-disable no-unused-vars */
import React from 'react';
import maxburguer from "../images/maxburguer.jpg"
import { Tarjeta } from '../marcos/Tarjeta';

export const DondeComer = () => {
  return (
    <div className='p-8 grid grid-cols-4 gap-8'>

      <Tarjeta name="Max Burguers" descripcion="Restaurante de comida rápida" img={maxburguer} direccion="Av Táchira · Frente de La Polar" tlf="04246358747" ></Tarjeta>
      <Tarjeta name="Max Burguers" descripcion="Restaurante de comida rápida" img={maxburguer} direccion="Av Táchira · Frente de La Polar" tlf="04246358747" ></Tarjeta>
      <Tarjeta name="Max Burguers" descripcion="Restaurante de comida rápida" img={maxburguer} direccion="Av Táchira · Frente de La Polar" tlf="04246358747" ></Tarjeta>
      <Tarjeta name="Max Burguers" descripcion="Restaurante de comida rápida" img={maxburguer} direccion="Av Táchira · Frente de La Polar" tlf="04246358747" ></Tarjeta>
      <Tarjeta name="Max Burguers" descripcion="Restaurante de comida rápida" img={maxburguer} direccion="Av Táchira · Frente de La Polar" tlf="04246358747" ></Tarjeta>
      <Tarjeta name="Max Burguers" descripcion="Restaurante de comida rápida" img={maxburguer} direccion="Av Táchira · Frente de La Polar" tlf="04246358747" ></Tarjeta>
      

    </div>
  )
}
