import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    console.log("Enviado");
    await new Promise((resolve) => setTimeout(resolve, 1000)); //Es una simulacion de cuando se envie el formulario
    actions.resetForm()
}

const BasicForm = () => {
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
    initialValues:{
        name: "",
        email: "",
        message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
});

    console.log(errors);

    return (
        <div className="Form">
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="name">Nombre Completo</label>
                <input
                    value={values.name}
                    onChange={handleChange}
                    id="name"
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
                    id="email"
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
                    id="message" 
                    type="message"
                    placeholder="Ingresa tu mensaje"
                />
                <button disabled={isSubmitting} type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default BasicForm;
