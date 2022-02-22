const features = [
    { name: 'Origin', description: 'Integramos todos nuestros conocimientos en un único concepto terapéutico.' },
    { name: 'Material', description: 'Le dedicamos a cada tratamiento el tiempo que tú necesitas, ni más, ni menos. (**Los horarios y duración que te digamos, serán orientativos).' },
    { name: 'Dimensions', description: 'Serás libre en cada momento de consultarnos tus dudas y de abandonar la rehabilitación si no estás satisfecho.' },
    { name: 'Finish', description: 'Existen pólizas de seguro médico dónde puedes escoger el profesional libremente, en las modalidades de re-embolso o libre-elección (consulte con su mútua).' },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-white w-full">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-1 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-0 lg:grid-cols-2">
          <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Tarifas</h2>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap gap-4 sm:gap-6 lg:gap-6">
            <img
              src="src/assets/fototarifas.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-evenly text-left">
                <span className="md:text-3xl rounded-lg shadow-md p-5 font-extrabold bg-white text-cyan-700">70 $</span>
                <h1 className="md:text-3xl font-extrabold text-cyan-700">Primera Sesion</h1>
                <ul>
                    <li>PAGO EN EFECTIVO.</li>
                    <li>UN SOLO PRECIO.</li>
                    <li>NOS TOMAMOS NUESTRO TIEMPO.</li>
                    <li>MUTUA FRIENDLY</li>
                </ul>
 
            </div>
            <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-evenly text-left">
                <span className="md:text-3xl rounded-lg shadow-md p-5 font-extrabold bg-white text-amber-600">50 $</span>
                <h1 className="md:text-3xl font-extrabold text-center text-amber-600 py-3">Sesiones de seguimiento</h1>
                <ul>
                    <li>PAGO EN EFECTIVO.</li>
                    <li>UN SOLO PRECIO.</li>
                    <li>NOS TOMAMOS NUESTRO TIEMPO.</li>
                    <li>MUTUA FRIENDLY</li>
                </ul>

            </div>
            <img
              src="src/assets/fototarifas.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }