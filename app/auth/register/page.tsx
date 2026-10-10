import styles from "./page.module.scss";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Регистрация</h1>
      <form action="#" className={styles.form}>
        <div className={styles.block}>
          <label htmlFor="name">Введите ваше имя:</label>
          <input type="text" name="name" placeholder="Имя" />
        </div>
        <div className={styles.block}>
          <label htmlFor="email">Введите ваш email:</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.block}>
          <label htmlFor="password">Введите ваш пароль:</label>
          <input type="password" placeholder="Пароль" />
        </div>
        <button className={styles.button}>Зарегистироваться</button>
      </form>
      <section className={styles.reg}>
        <p>У вас есть аккаунт? </p>
        <Link href="/auth/login" className={styles.link}>
          Войти
        </Link>
      </section>
    </main>
  );
}
