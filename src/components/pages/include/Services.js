import React from "react"
import { Link } from "react-router-dom";
import Service1 from '../../images/img.jpg';

function Services(){
    return(
        <section className="section border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5 text-center">
                    <h3 className="main-heading">Nuestros servicios</h3>
                    <div className="underline mx-auto"></div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow">
                        <img src={Service1} className="w-100 border-bottom" alt="Servicios"/>
                        <div className="card-body">
                            <h6>Servicio 1</h6>
                            <div className="underline"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p> 
                            <Link to="/services" className="btn btn-link">Leer mas</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow">
                        <img src={Service1} className="w-100 border-bottom" alt="Servicios"/>
                        <div className="card-body">
                            <h6>Servicio 2</h6>
                            <div className="underline"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p> 
                            <Link to="/services" className="btn btn-link">Leer mas</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow">
                        <img src={Service1} className="w-100 border-bottom" alt="Servicios"/>
                        <div className="card-body">
                            <h6>Servicio 3</h6>
                            <div className="underline"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p> 
                            <Link to="/services" className="btn btn-link">Leer mas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
    );
}
export default Services;