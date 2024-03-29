import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import '../../Footer.css';

export default function Footer(){
    const[linkedinUrl] = useState('www.linkedin.com/in/zolar-dev-659a88266');
    const[facebookUrl] = useState('https://www.facebook.com/profile.php?id=100090554225339');

    return(
        <footer className="footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Informacion de la empresa</h6>
                        <hr/>
                        <p>
                        Zolar es una empresa de tecnología enfocada en dar soluciones informaticas.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Navegar</h6>
                        <hr/>
                        <ul>
                            <li>
                            <Link to="/">Pagina principal</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6>Informacion de contacto</h6>
                        <hr/>
                        <ul>
                            <li>
                                <a href={linkedinUrl}>
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href={facebookUrl}>
                                    <FaFacebook />
                                </a>
                            </li>
                        </ul>
                        <p className="text-white mb-1">Numero +502 5017-6977</p>
                        <a href="mailto:zolar@gmail.com">zolar@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
