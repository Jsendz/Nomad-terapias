import React from 'react';

const Servicios = () => {
  return (

    <div className="h-full w-full flex flex-col md:flex-row items-center justify-around py-20">
      <div className="bg-slate-200 h-auto w-full md:w-96 drop-shadow-md">
          <img className="rounded"src="https://cdn.pixabay.com/photo/2017/09/06/20/35/woman-2722936_1280.jpg" alt="" />
          <h1 className="text-center text-2xl font-bold py-3">Fisioterapia</h1>
          <p className="text-left py-5 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi magni vitae quis nemo temporibus cupiditate nesciunt at rerum iste?</p>
          <button className="text-center font-extralight text-xl border-2">mas info</button>

      </div>
      <div className="bg-slate-200 h-auto w-full md:w-96 drop-shadow-md">
          <img className="rounded"src="https://cdn.pixabay.com/photo/2016/04/13/22/12/hands-1327811_1280.jpg" alt="" />
          <h1 className="text-center text-2xl font-bold py-3">Osteopatia</h1>
          <p  className="text-left py-5 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi magni vitae quis nemo temporibus cupiditate nesciunt at rerum iste?</p>
          <button className="text-center font-extralight text-xl border-2">mas info</button>

      </div>
      <div className="bg-slate-200 h-auto w-full md:w-96 drop-shadow-md">
          <img className="rounded"src="https://cdn.pixabay.com/photo/2020/08/12/14/57/massage-5482842_1280.jpg" alt="" />
          <h1 className="text-center text-2xl font-bold py-3">reflexologia</h1>
          <p  className="text-left py-5 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi magni vitae quis nemo temporibus cupiditate nesciunt at rerum iste?</p>
          <button className="text-center font-extralight text-xl border-2">mas info</button>

      </div>
    </div>



  )
};

export default Servicios;