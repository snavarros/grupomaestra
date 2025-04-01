import { useState } from 'react'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      

<section className="bg-cover bg-no-repeat bg-[url('https://i.ytimg.com/vi/xxOxkAgr7ws/maxresdefault.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"> SITIO EN CONSTRUCCIÓN.</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Ventas de Perfiles de Acero y Galvatex.</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Estamos creando la mejor experiencia para ti y nuestros clientes. <br/> <br/> Contáctanos a nuestro teléfono o email.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                +569 952312015
                
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                ventas@grupomaestra.cl 
            </a>  
            
        </div>
    </div>
</section>


        
        
      
    </>
  )
}

export default App
