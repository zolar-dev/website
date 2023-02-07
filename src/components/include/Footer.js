import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Informacion de la empresa</h6>
                        <hr/>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable
                        </p>
                    </div>
                    <div className="row col-md-4">
                        <h6>Navegar</h6>
                        <hr/>
                        <Link to="/">Pagina principal</Link>
                        <Link to="/Service">Servicios</Link>
                        <Link to="/Contact">Contacto</Link>
                    </div>
                    <div className="col-md-4">
                        <h6>Informacion de contacto</h6>
                        <hr/>
                        <p className="text-white mb-1">4 C Oriente No.3A Antigua Guatemala</p>
                        <p className="text-white mb-1">Numero +123581237</p>
                        <p className="text-white mb-1">123098123908123</p>
                        <p className="text-white mb-1">zolar@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
