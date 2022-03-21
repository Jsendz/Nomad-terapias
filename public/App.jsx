
import './App.css'
import NuestraEsencia from '/public/components/NuestraEsencia'
import NavbarDef from '/public/components/NavbarDef'
import Formulario from '/public/components/Formulario'
import Tarifas from '/public/components/Tarifas'
import Footer from '/public/components/Footer'




function App() {
  

  return (
    <div className="App">
      <div className="">
      <NavbarDef/>
      <img className="h-screen w-full object-cover" src="https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg" alt="" />
      </div>
      <NuestraEsencia />
      <Tarifas />
      <Formulario />
      <Footer />
      
      
      
      
      
      
      
    </div>
  )
}

export default App
