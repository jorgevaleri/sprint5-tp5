/*ESTE COMPONENTE MUESTRA EL LOGO Y LA NAVEGACION DEL SITIO.*/

import React from 'react'
import logo from '/assets/logo.png'
import { Link } from 'react-router-dom'
import { Home, BookOpen, Users } from 'lucide-react' //ICONOS

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
      {/* LOGO */}
      <img src={logo} alt="Logo" className="h-16 drop-shadow-lg" />

      {/* NAVEGACION */}
      <nav className="flex space-x-6 items-center text-blue-500">
        <Link
          to="/"
          className="flex items-center font-medium transition transform duration-300 hover:scale-110"
        >
          <Home className="w-5 h-5 mr-1" />
          Home
        </Link>

        <Link
          to="/items"
          className="flex items-center font-medium transition transform duration-300 hover:scale-110"
        >
          <BookOpen className="w-5 h-5 mr-1" />
          Lista de Libros
        </Link>
        
        <Link
          to="/aboutus"
          className="flex items-center font-medium transition transform duration-300 hover:scale-110"
        >
          <Users className="w-5 h-5 mr-1" />
          Nosotros
        </Link>
      </nav>
    </header>
  )
}

export default Header