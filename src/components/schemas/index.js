import * as yup from "yup"

const nameRules = yup
.string()
.matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'Nombre Completo tiene que cumplir con el Formato"');

export const basicSchema = yup.object().shape({
    name: yup
    .string()
    .matches(nameRules, {message: "Nombre completo es requerido"})
    .required("Requerido"),
    email: yup
    .string()
    .email("Ingresar un correo valido")
    .required("Requerido"),

});