/*ESTA PAGINA EXPLICA QUIENES SOMOS Y EL PROPOSITO DEL "GESTOR DE LIBROS"*/

import React from 'react'

const Nosotros = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-10 text-justify mt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow">
        Nosotros
      </h1>

      <p className="text-lg max-w-3xl text-gray-700 mb-6">
        En el "Gestor de Libros", creemos que los libros son el puente entre el conocimiento y la imaginación.
        Creamos esta plataforma para ayudarte a organizar tu biblioteca personal, descubrir nuevas lecturas y mantener tus títulos favoritos siempre a mano.
      </p>

      <p className="text-lg max-w-3xl text-gray-700 mb-6">
        Nuestro equipo está compuesto por entusiastas de la tecnología y amantes de la lectura que trabajan para ofrecerte una experiencia sencilla, rápida y agradable.
      </p>

      <p className="text-lg max-w-3xl text-gray-700">
        ¡Gracias por confiar en nosotros! Si tenés sugerencias o querés ser parte del proyecto, no dudes en contactarnos.
      </p>
    </div>
  )
}

export default Nosotros
