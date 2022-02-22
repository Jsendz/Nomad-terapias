import React from 'react';

const Quienesomos = () => {


  return (
  
  
  <div className="h-full md:h-screen w-full bg-white flex items-start">
    <div className="text-left px-5 text-xl flex flex-col md:flex-row my-5">
        <div className=" w-full md:w-1/2 bg-white rounded-lg px-2 h-full">
      <h1 className="text-center text text-2xl md:text-4xl font-extrabold pt-10 pb-5 px-5 uppercase">¿Quienes Somos?</h1>
      <p className="md:py-10 text-slate-700">La vida y nuestras motivaciones nos han llevado al ámbito de la salud, nuestro camino, la terapia manual.</p>
      <p className="text-slate-700">
  Utilizamos enfoques sencillos para un abordaje global.
      </p>
      <p className="md:py-10 text-slate-700">Somos <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-cyan-900">ARTE-SANOS</span>, cada tratamiento es individualizado y único dentro de tú  plan de rehabilitación. Sí quieres, podemos acompañarte en tú camino hacia la salud.</p>
      </div>
    <div className="flex flex-col md:flex-row items-center justify-around rounded-xl w-full md:h-screen">
      <div className="flex flex-col md:flex-col items-center text-left bg-slate-300 rounded-xl p-5 shadow-xl md:max-h-96 w-80">
      <img className="h-32 w-32 m-auto my-0 rounded-full " src="./src/assets/pruebaperfil.jpg" alt=""  />
      <ul className="py-5 list-disc">
          <li>Fisioterapia COL.5335</li>
          <hr />
          <li>Master en Profundizacion Anatomica (UB)</li>
          <hr />
          <li>Diploma de Terapia Manual (CREDO)</li>
          <hr />
          <li>Tecnicas Osteopaticas (CREDO)</li>
      </ul>
      </div>
      <div className="flex flex-col md:flex-col text-left bg-slate-300 rounded-xl p-5 md:max-h-96 shadow-xl w-80" >
      <img className="h-32 w-32 m-auto my-0 rounded-full " src="./src/assets/pruebaperfil.jpg" alt=""  />
      <ul className="py-5 list-disc">
          <li>Fisioterapia COL.10806</li>
          <hr />
          <li>Diplomado en Educacion Fisica</li>
          <hr />
          <li>Master en Profundizacion Anatomica (UB)</li>
          <hr />
          <li>Diploma de Terapia Manual (CREDO)</li>
          <hr />
          <li>Tecnicas Osteopaticas (CREDO) </li>
          <hr />
      </ul>
      </div>
  </div>
    </div>

</div>);
};

export default Quienesomos;
