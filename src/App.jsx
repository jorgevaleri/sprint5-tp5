/*ESTE ES EL COMPONENTE RAIZ DE LA APLICACION.
ENVUELVE TODA LA APP EN EL ItemProvider (Context API) PARA COMPARTIR EL ESTADO DE LOS LIBROS Y CONFIGURA LA ESTRUCTURA GLOBAL (header, main y footer).*/

import React from 'react'
import AppRouter from './Router/AppRouter' //MANEJO DE RUTAS
import { ItemProvider } from './context/ItemContext' //PROVEEDOR DEL ESTADO GLOBAL DE LOS ITEMS
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    //ItemProvider COMPARTE EL ESTADO Y FUNCIONES CRUD A LOS HIJOS
    <ItemProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className='flex-grow'>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </ItemProvider>
  )
}

export default App
