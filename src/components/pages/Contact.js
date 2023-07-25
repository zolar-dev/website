import React from "react";
import BasicForm from "../include/ContactForm";

function Contact() {
    return(
        <div className="App">
                <nav>
                    <h3>Formulario de contacto</h3>
                </nav>
                <BasicForm/>
                <meta name="description" content="Fill out our contact form to get in touch with us." />
        </div>
    );
}

export default Contact;