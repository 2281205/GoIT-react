import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/Auth/auth-operations";
import { getUser } from "redux/Auth/auth-selectors";
import styles from "./NavbarUserMenu.module.css";

export default function NavbarUserMenu() {
    const dispatch = useDispatch();
    const {name, email} = useSelector(getUser);
    
    const onlogout = () => {
        dispatch(logout());
    }
    return (
        <div>
            <p>Hi, <b>{name}</b>! email: {email}</p>
            <button onClick={onlogout} className={styles.btn}>logout</button>
        </div>
    )
}