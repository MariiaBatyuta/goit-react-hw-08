import { useDispatch } from "react-redux";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    
    return (
        <div className={css.wrapper}>
            <button type="button" onClick={() => dispatch(logOut())} className={css.logout}><b>Logout</b></button>
        </div>
    )
}