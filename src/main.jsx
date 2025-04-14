/*ESTE ARCHIVO ES EL PUNTO DE ENTRADA DE LA APLICACION.
AQUI SE MONTA EL COMPONENTE RAIZ (App) EN EL ELEMENTO CON ID "root" Y SE ENVUELVE EN BrowserRouter PARA PERMITIR LA NAVEGACION A TRAVES DE React Router.
TAMBIEN SE IMPORTA ToastContainer PARA MOSTRAR NOTIFICACIONES.*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//IMPORTAMOS ToastContainer Y SUS ESTILOS PARA LAS NOTIFICACIONES VISUALES.
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//IMPORTAMOS BrowserRouter PARA ENVOLVER LA APLICACION Y HABILITAR RUTAS.
import { BrowserRouter } from 'react-router-dom'

//RENDERIZAMOS LA APLICACION
ReactDOM.createRoot(document.getElementById('root')).render(
    //BrowserRouter ENVUELVE LA App PARA QUE LA NAVEGACION FUNCIONE.
    <BrowserRouter>
        <App />
        <ToastContainer />
    </BrowserRouter>
)
