import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <section className="footer bg-dark text-white">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <h6>Informacion de la empresa</h6>
                        <hr/>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable
                        </p>
                    </div>
                    <div className="row col-md-4">
                        <h6>Quick links</h6>
                        <hr/>
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>
                    <div className="col-md-4">
                        <h6>Informacion de contact</h6>
                        <hr/>
                        <p className="text-white mb-1">4 C Oriente No.3A Antigua Guatemala</p>
                        <p className="text-white mb-1">Numero +123581237</p>
                        <p className="text-white mb-1">123098123908123</p>
                        <p className="text-white mb-1">zolar@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
