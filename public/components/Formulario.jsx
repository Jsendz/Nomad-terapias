import {useState} from 'react';

const Formulario = () => {




const [Proprietarios, setProprietarios] = useState('');
const [email, setEmail] = useState('');
const [sintomas, setSintomas] = useState('');


const [Error, setError] = useState(false);


const handleSubmit =(e) => { 
    e.preventDefault();

     if([Nombre,Proprietarios,email,fecha,sintomas].includes('')) {
         console.log('Hay Al Menos un campo vacio')
         setError(true)
         return;
     } 
     setError(false)
    }
 

    return (
    <div id="Contacto"className="h-full m-full bg-amber-700">
        <h2 className="font-black text-3xl text-center text-gray-800 p-10 underline">Contacta con nosotros!</h2>


        <div className="flex flex-col md:flex-row justify-around md:items-center">

       

  
        <div className="w-11/12 md:w-2/5  m-auto md:ml-5 pb-2 md:pb-5">
        <form onSubmit={handleSubmit} action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {Error && (<div className="bg-red-800 text-center text-white p-3 uppercase font-bold mb-3 rounded-md ">
                <p>Si hay un error</p>
                </div>) 
                }
           
            <div className="mb-5">
                <label htmlFor="proprietario" className="block text-gray-700 uppercase font-bold">Nombre y Apellido</label>
                <input  id="proprietario" type="text" placeholder="Nombre" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={Proprietarios}
                onChange={() => setProprietarios(e.traget.value)}
                
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo electronico</label>
                <input  id="email" type="email" placeholder="Email contacto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email}
                onChange={() => setEmail(e.traget.value)}
                />
            </div>
            
            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Texto</label>
                <textarea className="border-2 h-32 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="sintomas" placeholder="Texto" cols="20" rows="10" value={sintomas}
                onChange={() => setSintomas(e.traget.value)}
                />
                
            </div>
            <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" value="Enviar Peticion" />
        </form>
        </div>
            <div className="h-20 w-80 m-auto md:my-0 md:mx-auto mb-3 pt-2 md:h-60 md:w-2/4 md:pt-10 md:px-6  bg-slate-100 rounded-lg">
                <h1 className="text-2xl p md:text-5xl md:font-bold md:px-2 text-slate-600">Para primeras <strong className="text-amber-700">citas</strong> llamanos al 
                {' '}<span>+33 123456789</span>

                </h1>
                <p></p>
            </div>
  
  
      </div>
    </div>)
    };
  
  export default Formulario;
  