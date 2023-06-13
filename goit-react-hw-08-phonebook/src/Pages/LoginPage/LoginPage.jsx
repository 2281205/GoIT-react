import LoginForm from "components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title} >Login page</h1>
            <LoginForm />
        </div>
    )
}