import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Header } from '../layout/Header';
import { Nav } from '../layout/Nav';
import { Footer } from '../layout/Footer';
import { DondeComer } from '../components/DondeComer';
import { DondeComprar } from '../components/DondeComprar';
import { DondeHospedarse } from '../components/DondeHospedarse';
import { DondeRecrearse } from '../components/DondeRecrearse';
import { ServiciosPublicos } from '../components/ServiciosPublicos';

export const Rutas = () => {
  return (
    <div>

      <BrowserRouter>

        <Header />
        <Nav />
      
        <Routes>

          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/comer' element={<DondeComer />} />
          <Route path='/comprar' element={<DondeComprar />} />
          <Route path='/hospedarse' element={<DondeHospedarse />} />
          <Route path='/recrearse' element={<DondeRecrearse />} />
          <Route path='/servicios' element={<ServiciosPublicos />} />

        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  )
}
