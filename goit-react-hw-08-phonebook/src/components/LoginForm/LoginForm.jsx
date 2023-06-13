import { useState, useMemo } from 'react';
import { useDispatch } from "react-redux";
import { login } from "redux/Auth/auth-operations";
import { nanoid } from "nanoid";
import styles from "./LoginForm.module.css";
const init = {
    email: '',
    password: '',
};

function LoginForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState(init);
    const { email, password } = form;
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);
    
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        setForm(init);
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label htmlFor={emailId}>Email: </label>
                <input className={styles.input} id={emailId} onChange={handleChange}
                    label="User email"
                    name="email"
                    value={email}
                    type="email"
                    placeholder="email"
                    required={true} />
            </div>
            <div>
                <label htmlFor={passwordId}>Password: </label>
                <input className={styles.input} id={passwordId} onChange={handleChange}
                    label="User password"
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password (min 6 symbols)"
                    required={true} />
            </div>
            <button onClick={handleSubmit} className={styles.btn} >Login</button>
        </form>
    )
}
export default LoginForm;