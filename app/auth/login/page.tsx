import styles from "./page.module.scss";
import Link from "next/link";

function LoginPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Вход</h1>
      <form action="#" className={styles.form}>
        <div className={styles.block}>
          <label htmlFor="email">Введите ваш email:</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.block}>
          <label htmlFor="password">Введите ваш пароль:</label>
          <input type="password" placeholder="Пароль" />
        </div>
        <button className={styles.button}>Войти</button>
      </form>
      <section className={styles.reg}>
        <p>У вас нет аккаунта? </p>
        <Link href="/auth/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </section>
    </main>
  );
}

export default LoginPage;
