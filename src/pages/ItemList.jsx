/*PAGINA QUE MUESTRA LA LISTA GENERAL DE LIBROS, MAPEANDO CADA UNO CON EL COMPONENTE ItemCard.*/

import React, { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'
import ItemCard from '../components/ItemCard'
import { Link } from 'react-router-dom'

const ItemList = () => {
  // SE OBTIENE LA LISTA DE LIBROS DEL CONTEXTO
  const { items } = useContext(ItemContext)

  return (
    <div className="container mx-auto p-4">

      {/* ENCABEZADO CON TITULO Y BOTON PARA AGREGAR LIBRO */}
      <div className="flex justify-between items-center mb-4 mt-20">
        <h2 className="text-2xl font-bold">Listado de Libros</h2>
        <Link to="/items/create" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Agregar Libro
        </Link>
      </div>

      {/* GRID QUE MAPEA CADA LIBRO CON ItemCard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.length > 0 ? items.map(item => (
          <ItemCard key={item.id} item={item} />
        )) : <p>No hay libros para mostrar</p>}
      </div>
    </div>
  )
}

export default ItemList
