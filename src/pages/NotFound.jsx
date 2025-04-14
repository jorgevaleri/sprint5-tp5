/*PAGINA PARA MOSTRAR UN MENSAJE DE ERROR CUANDO LA RUTA NO COINCIDE CON NINGUNA DEFINIDA.*/

import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center  mt-20">
      <h2 className="text-3xl font-bold mb-4">404 - Página no encontrada</h2>
      <Link to="/" className="text-blue-500">Volver a la página principal</Link>
    </div>
  )
}

export default NotFound
