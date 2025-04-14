/*COMPONENTE CON UN FORMULARIO CONTROLADO PARA CREAR UN NUEVO LIBRO.
SE VALIDA LA INFORMACION Y SE UTILIZA LA FUNCION createItem DEL CONTEXTO PARA ENVIAR LOS DATOS.*/

import React, { useState, useContext } from 'react'
import { ItemContext } from '../context/ItemContext'
import { useNavigate, Link } from 'react-router-dom'

const ItemCreate = () => {
  const { createItem } = useContext(ItemContext)
  const navigate = useNavigate()

  // ESTADO PARA MANEJAR LOS VALORES DEL FORMULARIO.
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    coverImage: ''
  })
  // ESTADO PARA MANEJAR LOS ERRORES DE VALIDACION.
  const [errors, setErrors] = useState({})

  // FUNCION DE VALIDACION QUE VERIFICA QUE TODOS LOS CAMPOS ESTEN COMPLETOS.
  const validate = () => {
    const newErrors = {}
    if (!formValues.title.trim()) newErrors.title = 'El título es requerido'
    if (!formValues.author.trim()) newErrors.author = 'El autor es requerido'
    if (!formValues.year.trim() || isNaN(formValues.year)) newErrors.year = 'El año debe ser numérico'
    if (!formValues.description.trim()) newErrors.description = 'La descripción es requerida'
    if (!formValues.coverImage.trim()) newErrors.coverImage = 'La URL de la imagen es requerida'
    return newErrors
  }

  // ACTUALIZA EL ESTADO CON CADA CAMBIO EN EL FORMULARIO.
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // MANEJA EL ENVIO DEL FORMULARIO, VALIDA Y LLAMA A LA FUNCION createItem.
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors)
      return
    }
    await createItem(formValues)
    navigate('/items')
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Libro</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow p-4 rounded">

        {/* TITULO */}
        <div className="mb-4">
          <label className="block mb-1 font-bold">Título</label>
          <input
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* AUTOR */}
        <div className="mb-4">
          <label className="block mb-1 font-bold">Autor</label>
          <input
            type="text"
            name="author"
            value={formValues.author}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>

        {/* AÑO */}
        <div className="mb-4">
          <label className="block mb-1 font-bold">Año</label>
          <input
            type="text"
            name="year"
            value={formValues.year}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
        </div>

        {/* DESCRIPCION */}
        <div className="mb-4">
          <label className="block mb-1 font-bold">Descripción</label>
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* IMAGEN DE PORTADA */}
        <div className="mb-4">
          <label className="block mb-1 font-bold">URL de la Imagen</label>
          <input
            type="text"
            name="coverImage"
            value={formValues.coverImage}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.coverImage && <p className="text-red-500 text-sm">{errors.coverImage}</p>}
        </div>

        {/* BOTONES */}
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Guardar
          </button>
          <Link to="/items" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
            Cancelar
          </Link>
        </div>

      </form>
    </div>
  )
}

export default ItemCreate
