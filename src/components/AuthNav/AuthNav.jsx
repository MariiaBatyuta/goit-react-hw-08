import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { clsx } from "clsx";

export default function AuthNav() {
    return (
        <div className={css.container}>
            <NavLink to="/register" className={({ isActive }) => clsx(css.link, { [css.activeLink]: isActive })}>Registration</NavLink>
            <NavLink to="/login" className={({ isActive }) => clsx(css.link, { [css.activeLink]: isActive })}>Login</NavLink>
        </div>
    )
}