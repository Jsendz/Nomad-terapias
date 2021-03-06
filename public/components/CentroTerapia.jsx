

const Poligono = () => {
  return (
    <div className="h-full relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-0">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl my-6 py-1 md:py-10">
                <span className="block xl:inline">Usamos la</span>{' '}
                <span className="block text-amber-600 xl:inline">Terapia Manual</span>{' '}
                para tratar:
              </h1>
              <hr />
              <ul className="mt-5 text-base text-gray-500 sm:mt-5 text-left sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-auto list-none">
                  <li>Patologías del desarrollo y crecimiento</li>
                  <li>Patologías Músculo-esqueléticas</li>
                  <li>Patologías respiratorias</li>
                  <li>Patologías digestivas</li>
                  <li>Patologías circulatorias</li>
                  <li>Patologías uro-ginecológicas</li>
                  <li>Patologías cráneo-faciales</li>
                  <li>Problemas pediátricos/psicomotrices</li>
              </ul>
              
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://cdn.pixabay.com/photo/2014/12/13/18/27/woman-567021_1280.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Poligono;