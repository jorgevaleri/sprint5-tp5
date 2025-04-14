/*ESTE ARCHIVO UTILIZA LA Context API PARA GESTIONAR EL ESTADO GLOBAL DE LOS LIBROS Y DEFINIR LAS OPERACIONES CRUD.*/

import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const ItemContext = createContext()

export const ItemProvider = ({ children }) => {
  // URL BASE DE LA API (MockAPI).
  const API_URL = "https://67f7c4642466325443ea9f58.mockapi.io/books"
  // ESTADO PARA GUARDAR LA LISTA DE LIBROS.
  const [items, setItems] = useState([])

  // FUNCION QUE NORMALIZA UN REGISTRO. RETORNA null SI EL REGISTRO ES UN ARRAY (SIN id).
  const normalizeItem = (item) => {
    if (Array.isArray(item)) {
      return null
    }
    if (typeof item === 'object' && item !== null && item.id) {
      return item
    }
    return null
  }

  // FUNCION PARA OBTENER LOS LIBROS DE LA API Y NORMALIZARLOS.
  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL)
      console.log("Datos recibidos:", response.data)
      const normalizedItems = response.data
        .map(normalizeItem)
        .filter(item => item !== null)
      console.log("Datos normalizados:", normalizedItems)
      setItems(normalizedItems)
    } catch (error) {
      console.error("Error al cargar los libros:", error)
      toast.error("Error al conectar con la API")
    }
  }

  // CARGA INICIAL DE LIBROS.
  useEffect(() => { fetchItems() }, [])

  // FUNCION PARA CREAR UN NUEVO LIBRO. LA API ASIGNA AUTOMATICAMENTE EL ID.
  const createItem = async (itemData) => {
    try {
      const response = await axios.post(API_URL, itemData)
      setItems([...items, response.data])
      toast.success("Libro creado correctamente")
    } catch (error) {
      console.error("Error al crear el libro:", error)
      toast.error("Error al crear el libro")
    }
  }

  // FUNCION PARA ACTUALIZAR UN LIBRO.
  const updateItem = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData)
      setItems(items.map(item => (item.id === id ? response.data : item)))
      toast.success("Libro actualizado correctamente")
    } catch (error) {
      console.error("Error al actualizar el libro:", error)
      toast.error("Error al actualizar el libro")
    }
  }

  // FUNCION PARA ELIMINAR UN LIBRO
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setItems(items.filter(item => item.id !== id))
      toast.success("Libro eliminado correctamente")
    } catch (error) {
      console.error("Error al eliminar el libro:", error)
      toast.error("Error al eliminar el libro")
    }
  }

  return (
    <ItemContext.Provider value={{ items, createItem, updateItem, deleteItem, fetchItems }}>
      {children}
    </ItemContext.Provider>
  )
}
