import * as Yup from "yup";


const LoginValidationSchema = Yup.object().shape({
    password: Yup.string()
        .required("Field is required")
        .min(8, "Password must be at least 8 characters")
        .max(40, "Password must not exceed 40 characters"),
    email: Yup.string()
        .required("Field is required"),


});

export { LoginValidationSchema };