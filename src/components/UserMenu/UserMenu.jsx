import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    return (
        <div className={css.wrapper}>
            <h3 className={css.username}>Welcome, {user.name}</h3>
            <button type="button" onClick={() => dispatch(logOut())}><b>Logout</b></button>
        </div>
    )
}