/*PAGINA QUE MUESTRA EL DETALLE DE UN LIBRO SELECCIONADO A TRAVES DEL id.*/

import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ItemContext } from '../context/ItemContext'

const ItemDetail = () => {
  const { id } = useParams()
  // SE BUSCA EL LIBRO CUYO id COINCIDE CON EL PARAMETRO DE LA URL.
  const { items } = useContext(ItemContext)
  const item = items.find(book => book.id === id)

  // SI NO SE ENCUENTRA EL LIBRO, SE MUESTRA UN MENSAJE DE ERROR.
  if (!item) {
    return (
      <div className="container mx-auto p-4 mt-20">
        <h2 className="text-xl font-bold">Libro no encontrado</h2>
        <Link to="/items" className="text-blue-500">Volver al listado</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4  mt-20">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={item.coverImage} alt={item.title} className="w-full md:w-1/3 h-auto object-cover rounded" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="mb-2"><strong>Autor:</strong> {item.author}</p>
          <p className="mb-2"><strong>Año:</strong> {item.year}</p>
          <p className="mb-4"><strong>Descripción:</strong> {item.description}</p>
          <Link to="/items" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
            Volver al listado
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
