import React, { useState } from 'react';
import Poligono from './CentroTerapia';
import Quienesomos from './Quienesomos';




function TerapiaManual (props) {
const [Quien, setQuien] = useState(false);
const [Terapia, setTerapia] = useState(false);

  return ( 
  <div className="bg-slate-100 w-full">
    <h1 className="text-[#305C70] text-6xl font-bold uppercase md:py-20 font-courgette">Nuestra Esencia</h1>
    <p className="text-left px-7 md:px-2 md:w-3/4 md:mx-auto md:pb-10 text-gray-800 text-xl md:text-3xl md:break-words">Después del trayecto recorrido e inspirarnos en diferentes fuentes terapéuticas, nuestras experiencias y reflexiones nos han traído hasta el 
    {' '}<span className="font-bold">MÉTODO NOMAD</span>{' '}
     cómo síntesis de un camino de conocimientos.</p>
      <div className="py-10 h-full w-full flex flex-col justify-between md:justify-around md:flex-row items-center">
        <div className="border-gray-700 flex flex-col items-center p-5 mb-1 border-t-2 border-b-2">
        
          <span className="p-4 rounded-full bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-8 w-8">--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --<path d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"/></svg>
          </span>
          <h1 className="p-5 text-center text-xl uppercase font-bold text-cyan-700">¿Quienes Somos?</h1>
      <button onClick={() =>setQuien(!Quien) } className=" border-2 border-gray-700 text-gray-700 p-3 rounded-xl bg-transparent hover:bg-slate-400">
        + Info
      </button>
      
      </div >

    
        <div className="border-gray-700 flex flex-col items-center p-5 border-t-2 border-b-2">
          <span className="p-4 rounded-full bg-transparent"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 w-8">--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --<path d="M188.1 210.8l-45.25 45.25l45.25 45.25l45.25-45.25L188.1 210.8zM301.2 188.1l-45.25-45.25L210.7 188.1l45.25 45.25L301.2 188.1zM210.7 323.9l45.25 45.25l45.25-45.25L255.1 278.6L210.7 323.9zM256 16c-132.5 0-240 107.5-240 240s107.5 240 240 240s240-107.5 240-240S388.5 16 256 16zM442.6 295.6l-11.25 11.25c-3.125 3.125-8.25 3.125-11.38 0L391.8 278.6l-45.25 45.25l34 33.88l16.88-16.88c3.125-3.125 8.251-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-16.88 16.88l16.88 17c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.251 3.125-11.38 0l-16.88-17l-17 17c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l17-17l-34-33.88l-45.25 45.25l28.25 28.25c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.25 3.125-11.38 0l-28.25-28.25L227.7 442.6c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l28.25-28.25l-45.25-45.25l-33.88 34l16.88 16.88c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.25 3.125-11.38 0L131.6 403.1l-16.1 16.88c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l17-16.88l-17-17c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l16.1 17l33.88-34L120.2 278.6l-28.25 28.25c-3.125 3.125-8.25 3.125-11.38 0L69.37 295.6c-3.125-3.125-3.125-8.25 0-11.38l28.25-28.25l-28.25-28.25c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l28.25 28.25l45.25-45.25l-34-34l-16.88 17c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l16.88-17l-16.88-16.88c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l16.88 17l17-17c3.125-3.125 8.25-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-17 16.88l34 34l45.25-45.25L205.1 92c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l28.25 28.25l28.25-28.25c3.125-3.125 8.25-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-28.25 28.25l45.25 45.25l34-34l-17-16.88c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l17 16.88l16.88-16.88c3.125-3.125 8.251-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-17 16.88l17 17c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.251 3.125-11.38 0l-16.88-17l-34 34l45.25 45.25l28.25-28.25c3.125-3.125 8.25-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-28.25 28.25l28.25 28.25C445.7 287.4 445.7 292.5 442.6 295.6zM278.6 256l45.25 45.25l45.25-45.25l-45.25-45.25L278.6 256z"/></svg>
          </span>
          <h1 className="p-5 text-center text-xl uppercase font-bold text-amber-700">Terapia Manual</h1>
      <button onClick={() =>setTerapia(!Terapia) } className="text-gray-700 p-3 rounded-xl bg-transparent border-2 border-gray-700">
        + Info
      </button>
      
      </div >
    
    </div>

    {Quien ? (<Quienesomos />) :null}

      {Terapia ? (<Poligono />) : null }
  </div>



 


  )
};

export default TerapiaManual;
