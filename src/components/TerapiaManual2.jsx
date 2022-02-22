import React from 'react'

const TerapiaManual2 = () => {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="flex flex-col text-left w-11/12 bg-slate-600 rounded-lg mx-auto pl-5 justify-center pt-3">
        <h1 className="text-2xl md:text-4xl text-white font-extrabold break-words"> <span className="block xl:inline">Usamos la</span>{' '}
                <span className="block text-orange-400 xl:inline">Terapia Manual{''}</span>
                para tratar:
              </h1>
        <ul className="my-5 mx-0 text-xl md:text-2xl text-slate-300 pl-6 text-left">
                  <li className="list-disc">Patologías del desarrollo y crecimiento</li>
                  <li className="list-disc">Patologías Músculo-esqueléticas</li>
                  <li className="list-disc">Patologías respiratorias</li>
                  <li className="list-disc">Patologías digestivas</li>
                  <li className="list-disc">Patologías circulatorias</li>
                  <li className="list-disc">Patologías uro-ginecológicas</li>
                  <li className="list-disc">Patologías cráneo-faciales</li>
                  <li className="list-disc">Problemas pediátricos/psicomotrices</li>
              </ul>
      </div>
                  <div className="absolute right-28">
                    <img src="https://pixabay.com/get/g975c1ffc02288043b9271b27254738ab7b365c2b9b9ca3ee863ee4c5624f928d330d51b3adee6d2fc57a83c475350918c8bf383a89e697d7d09e51f586b87be90c355233a86a8198a90349a6b1d07ffb_640.jpg" alt="" className="rounded-lg h-96 w-auto" />
                  </div>
    </div>

  )
}

export default TerapiaManual2;