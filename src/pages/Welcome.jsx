/*ESTA PAGINA MUESTRA LA BIENVENDIA AL "GESTOR DE LIBROS".*/

import React from 'react'
import fondo from '/assets/fondo.jpg'

const Welcome = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* TITULO */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-outline-black drop-shadow-lg">
        Bienvenido al Gestor de Libros
      </h1>

      {/* PARRAFO */}
      <p className='text-lg font-bold drop-shadow-lg text-black'>
        Explora, organiza y disfruta de tu biblioteca digital de forma fácil y creativa.
      </p>
    </div>
  )
}

export default Welcome
