import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">Zolar Web page</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active">Pagina principal</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/service" class="nav-link active">Servicios</Link>
                    </li>                        
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link active">Contacto</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );

}
