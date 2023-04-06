import RegisterForm from "components/RegisterForm/RegisterForm";
import styles from "../LoginPage/LoginPage.module.css";

export default function RegisterPage () {

    
    return (
        <div className={styles.container}>
            <h1>Register page</h1>
            <RegisterForm />
        </div>
    )
}