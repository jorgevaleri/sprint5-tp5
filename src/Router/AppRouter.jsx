/*ESTE ARCHIVO DEFINE LAS RUTAS DE LA APLICACION UTILIZANDO React Router.
SE IMPORTAN LOS COMPONENTES DE LAS PAGINAS CORRESPONDIENTE Y SE CONFIGURAN LAS RUTAS.*/

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom' //NO SE INCLUYE BrowserRouter AQUI, YA ESTA EN main.jsx
import Welcome from '../pages/Welcome' //PAGINA DE BIENVENIDA
import ItemList from '../pages/ItemList' //LISTADO DE LIBROS
import ItemDetail from '../pages/ItemDetail' //DETALLE DE UN LIBRO
import ItemCreate from '../pages/ItemCreate' //FORMULARIO PARA AGREGAR UN NUEVO LIBRO
import ItemEdit from '../pages/ItemEdit' //FORMULARIO PARA EDITAR UN LIBRO
import NotFound from '../pages/NotFound' //PAGINA 404
import AboutUs from '../pages/AboutUs' //PAGIAN NOSOTROS


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/items" element={<ItemList />} />
      <Route path="/items/create" element={<ItemCreate />} />
      <Route path="/items/:id" element={<ItemDetail />} />
      <Route path="/items/:id/edit" element={<ItemEdit />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/404" element={<NotFound />} />
      {/* REDIRIGIE CUALQUIER RUTA DESCONOCIDA A LA PAGINA 404 */}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default AppRouter
