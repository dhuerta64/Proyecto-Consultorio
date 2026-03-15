import React from "react";
import { Link } from "react-router-dom";
import "./headerpasiente.css";

export default function HeaderPasiente() {

  return (
    <header className="header">

      <div className="header__left">
        <img
          src="/imagenes/Regina-04(este_es) 2.png"
          alt="Logo consultorio"
          className="header__logo"
        />
        <span className="header__title">
          Consultorio Médico General
        </span>
      </div>

      <nav className="header__nav">
        <Link to="/about">Acerca de nosotros</Link>

        <div className="header__dropdown">
          <button className="dropdown__btn">
            Servicios ▾
          </button>

          <div className="dropdown__menu">
            <Link to="/servicio">Consulta General</Link>
            <Link to="/crearcita">Agendar cita</Link>
          </div>
        </div>

        <Link to="/Perfil">Perfil</Link>
        <Link to="/notificaciones">Notificaciones</Link>
      </nav>

      <Link to="/" className="header__loginBtn">
        Cerrar Sesión 
      </Link>

    </header>
  );
}
