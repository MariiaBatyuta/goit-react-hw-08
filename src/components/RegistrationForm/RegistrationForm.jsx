import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { register } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    }

    const validateData = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
        email: Yup.string().email().required("Required!"),
        password: Yup.string().min(8, "Too short!").required("Required!"),
    })

    return (
        <Formik initialValues={{name: "", email: "", password: ""}} onSubmit={handleSubmit} validationSchema={validateData}>
            <Form className={css.registration}>
                <label htmlFor="name" className={css.formLabel}>
                    Username
                    <ErrorMessage className={css.error} component="div" name="name"/>
                </label>
                <Field type="text" name="name" id="name" className={css.formInput} />
                
                <label htmlFor="email" className={css.formLabel}>
                    Email
                    <ErrorMessage className={css.error} component="div" name="email" />
                </label>
                <Field type="email" name="email" id="email" className={css.formInput} />
                
                <label htmlFor="password" className={css.formLabel}>
                    Password
                    <ErrorMessage className={css.error} component="div" name="password"/>
                </label>
                <Field type="password" name="password" id="password" className={css.formInput} />

                <button type="submit" className={css.formButton}>Register</button>
                
                <NavLink to="/login" className={css.link}>
                    Already have an account? Log in
                </NavLink>
            </Form>
            
        </Formik>
    )
}