import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import css from "./LoginForm.module.css";
import toast from "react-hot-toast";

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap()
            .then(() => {
                toast.success("You logged in successfully 🙂");
                actions.resetForm();
            })
            .catch((error) => {
                toast.error("Email or password is wrong. Try again.");
                console.log(error);
            });
    };

    return (
        <div className={css.contactFormContainer}>
            <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
                <Form className={css.contactForm}>
                    <div className={css.card}>
                        <label htmlFor="email" className={css.label}>Email</label>
                        <Field type="email" name="email" id="email" className={css.input} />

                        <label htmlFor="password" className={css.label}>Password</label>
                        <Field type="password" name="password" id="password" className={css.input} />

                        <button type="submit" className={css.formButton}>Log In</button>

                        <NavLink to="/register" className={css.link}>
                            Don't have an account? Register
                        </NavLink>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};