import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const isLogedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink to="/" className={css.link}>Home</NavLink>
            {isLogedIn && <NavLink to="/contacts" className={css.link}>Contacts</NavLink>}
        </nav>
    )
}