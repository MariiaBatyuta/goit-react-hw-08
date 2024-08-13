import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.container}>
            <NavLink to="/" className={({ isActive }) => clsx(css.link, { [css.activeLink]: isActive })}>Home</NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={({ isActive }) => clsx(css.link, { [css.activeLink]: isActive })}>Contacts</NavLink>
            )}
        </nav>
    );
};