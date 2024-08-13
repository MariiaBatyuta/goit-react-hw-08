import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { register } from "../../redux/auth/operations";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
            .unwrap()
            .then(() => {
                toast.success("Congratulations 🎉 you are registered.");
                navigate('/');
                actions.resetForm();
            })
            .catch((error) => {
                toast.error("Registration failed. Please try again.");
                console.log(error);
            });
    };

    const validateData = Yup.object().shape({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
        email: Yup.string().email().required("Required!"),
        password: Yup.string().min(8, "Too short!").required("Required!"),
    });

    return (
        <div className={css.registrationContainer}>
            <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={handleSubmit} validationSchema={validateData}>
                <Form className={css.registration}>
                    <label htmlFor="name" className={css.formLabel}>Username</label>
                    <Field type="text" name="name" id="name" className={css.formInput} />
                    <ErrorMessage className={css.error} component="div" name="name" />

                    <label htmlFor="email" className={css.formLabel}>Email</label>
                    <Field type="email" name="email" id="email" className={css.formInput} />
                    <ErrorMessage className={css.error} component="div" name="email" />

                    <label htmlFor="password" className={css.formLabel}>Password</label>
                    <Field type="password" name="password" id="password" className={css.formInput} />
                    <ErrorMessage className={css.error} component="div" name="password" />

                    <button type="submit" className={css.formButton}>Register</button>

                    <NavLink to="/login" className={css.link}>Have an account? Log in</NavLink>
                </Form>
            </Formik>
        </div>
    );
};