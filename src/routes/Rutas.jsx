import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Header } from '../layout/Header';
import { Nav } from '../layout/Nav';
import { Footer } from '../layout/Footer';
import { DondeComer } from '../components/DondeComer';
import { DondeComprar } from '../components/DondeComprar';
import { DondeAlojarse } from '../components/DondeAlojarse';
import { DondeRecrearse } from '../components/DondeRecrearse';
import { ServiciosPublicos } from '../components/ServiciosPublicos';

export const Rutas = () => {
  return (

      <BrowserRouter>

      <div className='w-screen min-h-screen relative pb-10 p-4'>

        <div>
          <Header />
          <Nav />  
        </div>
        
      
        <Routes>

          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/comer' element={<DondeComer />} />
          <Route path='/comprar' element={<DondeComprar />} />
          <Route path='/alojarse' element={<DondeAlojarse />} />
          <Route path='/recrearse' element={<DondeRecrearse />} />
          <Route path='/servicios' element={<ServiciosPublicos />} />

        </Routes>

        <div className='absolute bottom-0 w-screen bg-[#00A3E8] h-10 text-center leading-10'>
          <Footer />
        </div>

        

      </div>

      </BrowserRouter>


    
  )
}
