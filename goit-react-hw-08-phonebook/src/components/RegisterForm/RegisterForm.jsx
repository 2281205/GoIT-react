import { useState, useMemo } from 'react';
import { signup } from "redux/Auth/auth-operations";
import { nanoid } from "nanoid";
import styles from "../LoginForm/LoginForm.module.css";
import { useDispatch } from 'react-redux';

const init = {
    name: '',
    email: '',
    password: ''
};

export default function RegisterForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState(init);
    const { name, email, password } = form;
    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);
    
    const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch (signup ({ name, email, password }) );
        setForm(init);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <label htmlFor={nameId}>Name: </label>
                <input className={styles.input} id={nameId} onChange={handleChange}
                    name="name"
                    value={name}
                    type="text"
                    label="User name"
                    placeholder="name"
                    required={true} />
            </div>
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
