import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../estilos/Menu.css";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand ms-3 text-goldenrod" href="#">Menu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-goldenrod" href="#landscapes">Fotos de Paisajes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-goldenrod" href="#nasa">API de la NASA</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-goldenrod" href="#recipes">Recetas de Temporada</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-goldenrod" href="../../public/tetris.html">Tetris</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
