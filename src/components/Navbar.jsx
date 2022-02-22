import React from 'react';
import { useState } from "react";

const Navbar = () => {
    const [isSideMenuOpen, setIsSideMenuclosed] = useState(false);
  return (<nav className="bg-slate-200 h-28 w-full md:h-32 " >
      <div className=" h-full items-center flex justify-between">
      <h1 className="text-4xl px-5 font-extrabold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-cyan-900">Nomad Terapias</span></h1>
      <div className="hidden md:flex space-x-4 text-sm px-5 px-14text-center">
          <a href="#">Inicio</a>
          <a href="#">¿Quienes Somos?</a>
          <a href="#">Centro de Terapia Manual</a>
          <a href="#">Metodo Nomad</a>
          <a href="#">Blog-Noticias</a>
          <a href="#">Tarifas</a>
          <a href="#">Contacto</a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      </div>
      <div className="mobile-menu hidden md:hidden">
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">¿Quienes Somos?</a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Centro de Terapia Manual</a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Metodo Nomad</a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Blog-Noticias</a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Tarifas</a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contacto</a>
  </div>

      
  </nav>
  )
};

export default Navbar;

