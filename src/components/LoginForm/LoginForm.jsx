import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    }
    
    return (
        <Formik initialValues={{email: "", password: ""}} onSubmit={handleSubmit}>
            <Form className={css.registration}>
                <label htmlFor="email" className={css.formLabel}>Email</label>
                <Field type="email" name="email" id="email" className={css.formInput} />
                
                <label htmlFor="password" className={css.formLabel}>Password</label>
                <Field type="password" name="password" id="password" className={css.formInput} />

                <button type="submit" className={css.formButton}>Log In</button>

                <NavLink to="/register" className={css.link}>
                    Don't have an account? Registration
                </NavLink>
            </Form>
        </Formik>
    )
}