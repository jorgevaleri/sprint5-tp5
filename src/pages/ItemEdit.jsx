/*ESTE COMPONENTE ES LA PAGINA PARA EDITAR UN LIBRO EXISTENTE.
SE UTILIZA useParams PARA OBTENER EL id DEL LIBRO DESDE LA URL, SE CARGA LA INFORMACION ACTUAL MEDIANTE useContext.*/

import React, { useState, useContext, useEffect } from 'react'
import { ItemContext } from '../context/ItemContext'
import { useNavigate, useParams, Link } from 'react-router-dom'

const ItemEdit = () => {
  const { id } = useParams() //OBTENEMOS EL ID
  const { items, updateItem } = useContext(ItemContext)
  const navigate = useNavigate()

  //BUSCAMOS EL LIBRO A EDITAR
  const itemToEdit = items.find(book => book.id === id)

  // DEFINIMOS EL ESTADO LOCAL
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    coverImage: ''
  })
  const [errors, setErrors] = useState({}) //ESTADO PARA MANEJAR LOS ERRORES DE VALIDACION DEL FORMULARIO

  // CUANDO itemToEdit CAMBIA, SE PRECARGAN LOS DATOS DEL LIBRO EN EL FORMULARIO
  useEffect(() => {
    if (itemToEdit) {
      setFormValues({
        title: itemToEdit.title || '',
        author: itemToEdit.author || '',
        year: itemToEdit.year || '',
        description: itemToEdit.description || '',
        coverImage: itemToEdit.coverImage || ''
      })
    }
  }, [itemToEdit])

  // PARAMETROS DE VALIDACION
  const validate = () => {
    const newErrors = {}
    if (!formValues.title.trim()) newErrors.title = 'El título es requerido'
    if (!formValues.author.trim()) newErrors.author = 'El autor es requerido'
    if (!formValues.year.trim() || isNaN(formValues.year)) newErrors.year = 'El año debe ser numérico'
    if (!formValues.description.trim()) newErrors.description = 'La descripción es requerida'
    if (!formValues.coverImage.trim()) newErrors.coverImage = 'La URL de la imagen es requerida'
    return newErrors
  }

  // handleChange ACTUALIZA EL ESTADO formValues CADA VEZ QUE EL USUARIO MODIFICA UN CAMPO.
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  //handleSubmit SE EJECUTA AL ENVIAR EL FORMULARIO, VALIDA LOS DATOS, Y SI NO HAY ERRORES, LLAMA A updateItem PARA ACTUALIZAR EL LIBRO.
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors)
      return
    }
    await updateItem(id, formValues)
    navigate('/items')
  }

  // ERROR POR SI NO SE ENCUENTRA EL LIBRO
  if (!itemToEdit) {
    return (
      <div className="container mx-auto p-4 mt-20">
        <h2 className="text-xl font-bold">Libro no encontrado</h2>
        <Link to="/items" className="text-blue-500">Volver al listado</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Editar Libro</h2>

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
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Actualizar
          </button>
          <Link to="/items" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ItemEdit
