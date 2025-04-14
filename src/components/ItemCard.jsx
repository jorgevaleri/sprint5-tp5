/*ESTE COMPONENTE MUESTRA LA INFORMACION DE UN LIBRO Y CUENTA CON BOTONES PARA VER DETALLE, EDITAR Y ELIMINAR.*/

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'

const ItemCard = ({ item }) => {
  const { deleteItem } = useContext(ItemContext)
  const navigate = useNavigate()

  // MANEJA LA ELIMINACION DEL LIBRO CON CONFIRMACION MEDIANTE SweetAlert2.
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    })
    if (result.isConfirmed) {
      await deleteItem(item.id)
    }
  }

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img src={item.coverImage} alt={item.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="font-bold text-xl">{item.title}</h3>
      <p className="text-gray-600">Autor: {item.author}</p>
      <p className="text-gray-600">Año: {item.year}</p>

      {/* BOTONES */}
      <div className="mt-auto flex flex-wrap justify-between gap-2">
        <Link to={`/items/${item.id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
          Ver Detalle
        </Link>
        <button onClick={() => navigate(`/items/${item.id}/edit`)} className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
          Editar
        </button>
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
          Eliminar
        </button>
      </div>

    </div>
  )
}

export default ItemCard
