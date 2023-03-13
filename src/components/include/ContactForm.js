import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import'../../Form.css';

const BasicForm = () => {
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        isSubmitting
    } = useFormik({
        initialValues:{
            name: "",
            email: "",
            message: "",
        },
        validationSchema: basicSchema,
        errorClassname: 'error',
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log("Enviando formulario...", values);
            emailjs.sendForm(
                'service_uy6u7p9',
                'template_ryflvvo',
                form.current,
                'DCmzaLmf72d0jcB0s'
            )
            .then((result) => {
                console.log(result.text);
                console.log("Mensaje enviado");
                resetForm();
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setSubmitting(false);
                setIsSending(false);
            });
        }
    });

    const form = useRef();
    const [setIsSending] = useState(false);

    return (
        <div className="Form">
            <form onSubmit={handleSubmit} autoComplete="off" ref={form}>
                <label htmlFor="name">Nombre Completo</label>
                <input
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    type="name"
                    placeholder="Ingresa tu Nombre Completo"
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "input-error" : ""}
                />
                {errors.name && touched.name && <p className="error">{errors.name}</p>}
                <label htmlFor="email">Email</label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "input-error" : ""}
                />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                <label htmlFor="message">Mensaje</label>
                <input
                    value={values.message}
                    onChange={handleChange}
                    name="message" 
                    type="message"
                    placeholder="Ingresa tu mensaje"
                />
                <button type="submit" disabled={!isValid || isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
};

export default BasicForm;
