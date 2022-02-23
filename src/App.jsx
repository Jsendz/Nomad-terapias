
import './App.css'
import NuestraEsencia from './components/NuestraEsencia'
import NavbarDef from './components/NavbarDef'
import Formulario from './components/MetodoNomad'
import Tarifas2 from './components/Tarifas2'
import Footer from './components/Footer'



function App() {
  

  return (
    <div className="App">
      <div className="">
      <NavbarDef/>
      <img className="h-screen w-full object-cover" src="src/assets/atardecer.jpg" alt="" />
      </div>
      <NuestraEsencia />
      <Tarifas2 />
      <Formulario />
      <Footer />
      
      
      
      
      
    </div>
  )
}

export default App
