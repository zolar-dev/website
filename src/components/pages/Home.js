import React from "react";
import CoreValues from "./include/CoreValues";
import SolarSystem from "./include/SolarSystem"
import { FechaContador, ProyectosContador, CuentaRegresivaContador, ClientesContador } from "./include/Counts.js"

export default function Home() {
    return(
        <div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Empresa</h3>
                            <div className="underline mx-auto"></div>
                            <p className="text-justify">
                            Somos una empresa enfocada en brindar soluciones personalizadas en el área de tecnología e innovación desde hace más de 10 años, 
                            nuestro principal objetivo es entender las necesidades de nuestros clientes y proporcionarles el desarrollo y/o implementación de las herramientas que 
                            hagan sus procesos más fluidos y les permita enfocarse en hacer crecer su negocio.
                            </p>
                            <div className="subtitle">
                                Servicios y/o productos de Zolar
                                <ul>
                                    <li>Asesoría tecnológica.</li>
                                    <li>Desarrollo de aplicaciones y sistemas a medida.</li>
                                    <li>Creación de páginas web.</li>
                                    <li>Implementación de sistemas ERP.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <SolarSystem/>

        <div>
            <FechaContador/>
            <ProyectosContador/>
            <CuentaRegresivaContador/>
            <ClientesContador/>
        </div>

        {/* Nuestra mision, vision y valores etc.*/}
        <CoreValues/>

        </div>
    );

}
