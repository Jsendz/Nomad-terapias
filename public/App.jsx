
import './App.css'
import NuestraEsencia from '/public/components/NuestraEsencia'
import NavbarDef from '/public/components/NavbarDef'
import Formulario from '/public/components/MetodoNomad'
import Tarifas2 from '/public/components/Tarifas2'




function App() {
  

  return (
    <div className="App">
      <div className="">
      <NavbarDef/>
      <img className="h-screen w-full object-cover" src="/public/assets/atardecer.jpg" alt="" />
      </div>
      <NuestraEsencia />
      <Tarifas2 />
      <Formulario />
      
      
      
      
      
      
    </div>
  )
}

export default App
