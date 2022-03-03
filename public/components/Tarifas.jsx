import { dividerClasses } from '@mui/material';
import React from 'react';

const tarifas = () => {
  return (
  
  <div className="w-full flex flex-col md:flex-row h-screen items-center">
      <div className="p-5 md:text-xl text-left text-gray-800">
          <h1 className="text-5xl text-center font-bold">Tarifas</h1>
          <ul className="list-disc pl-5">
              
              <li className="my-10">Integramos todos nuestros conocimientos en un único concepto terapéutico.</li>
              
              <li className="my-10">Le dedicamos a cada tratamiento el tiempo que tú necesitas, ni más, ni menos. (**Los horarios y duración que te digamos, serán orientativos).</li>
              
              <li className="my-10">Serás libre en cada momento de consultarnos tus dudas y de abandonar la rehabilitación si no estás satisfecho.</li>
              
              <li className="my-10">Existen pólizas de seguro médico dónde puedes escoger el profesional libremente, en las modalidades de re-embolso o libre-elección (consulte con su mútua).</li>
      </ul>
      </div>
      <div className="w-full h-full bg-amber-700">
          <div className="bg-white rounded-xl" > 
      <div className="flex w-full text-3xl px-5 justify-around align-middle md:justify-between items-center bg-white">
          <div className="p-2 mb-2 md:p-5 bg-slate-400 rounded-lg">
              <span className="text-white text-xl font-bold">70$</span>
              <h1>Primera Visita
                  </h1>
          <div className="p-2 md:p-5 rounded-lg bg-red-300">
              <span className="text-white text-5xl font-bold">50$</span>
              <h1>Visita de Seguimiento
                  </h1>
          </div>
          </div>
      <div>
          <ul className="text-white text-xl text-left">
              <li className="bg-blend-darken p-1 my-1"><strong>PAGO EN EFECTIVO.</strong></li>
              <li className="bg-blend-darken p-1 my-1"><strong>UN SOLO PRECIO.</strong></li>
              <li className="bg-blend-darken p-1 my-1"><strong>NOS TOMAMOS NUESTRO TIEMPO.</strong></li>
              <li className="bg-blend-darken p-1 my-1"><strong>MUTUA FRIENDLY</strong></li>
          </ul>
      </div>
      </div>
      </div>
      </div>

      
      
      
      


  </div>);
};

export default tarifas;
