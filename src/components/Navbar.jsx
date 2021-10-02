import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 flex-shrink-0">
        <li
          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          <Link to="/">
            <button>Logo</button>
          </Link>
        </li>
        <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          <Link to="/admin/ventas">
            <button>Ventas</button>
          </Link>
        </li>
        <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          <Link to="admin/usuarios">
            <button>Usuarios</button>
          </Link>
        </li>
        <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          <Link to="admin/index">
            <button>Administracion</button>
          </Link>
        </li>
        <li className="px-3">
          <Link to="/login">
            <button className="bg-indigo-400 p-2 text-white rounded-lg shadow-md hover:bg-indigo-800">
              Iniciar Sesion
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
