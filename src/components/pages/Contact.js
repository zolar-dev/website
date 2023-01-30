import React from "react";

function Contact() {
    return(
        <div>
            {/* <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4> Contact</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                            Home / Contact
                            </h6>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-boy">
                            <div className="row">
                                <div className="col-md-6 border-right">
                                    <h6> Formulario de Contacto</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Nombre Completo</label>
                                        <input type="text" className="form-control" placeholder=" Ingrese su nombre"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Numero de telefono</label>
                                        <input type="text" className="form-control" placeholder=" Ingrese su numero"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email</label>
                                        <input type="text" className="form-control" placeholder=" Ingrese su correo electonico"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Mensaje</label>
                                        <textarea rows="3" className="form-control" placeholder="Escriba su mensaje..."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100">Enviar mensaje</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-left">
                                    <h5 className="main-heading">Informacion de contacto</h5>
                                    <div className="underline"></div>
                                    <p>
                                        ubicacion
                                    </p>
                                    <p>
                                        Numero de telefono de la empresa 128937
                                    </p>
                                    <p>
                                        Correo electronico: asjdkh@gmail.com
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    );

}

export default Contact;