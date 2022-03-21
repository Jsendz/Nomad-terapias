import React from 'react'

const footer = () => {
  return (
    <>
    <div className="w-full h-full md:h-52  bg-cyan-900 text-xl flex flex-col md:flex-row md:justify-around items-center md:items-start text-slate-100 md:text-2xl font-semibold pt-10">
      <div className="py-5">
          <h1>Nomad Terapias</h1>
          <hr />
            <ul className="text-xl font-normal p-5">
                <li>Terapia Manual</li>
                <li>Sobre Nosotros</li>
                <li>Metodo Nomad</li>
            </ul>
      </div>
      <div className="py-5">
        <h1 >Let's Connect!</h1>
        <hr />
          <ul className="flex flex-row justify-around p-5">
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </ul>  

      </div>
      <div className="py-5">
        <h1 >Contact</h1>
        <hr />

          <a href="" className="p-5 my-5"><i class="fa fa-phone" aria-hidden="true" >+33 123456789</i></a>

      </div>
    </div>


    </>
  )
}

export default footer;