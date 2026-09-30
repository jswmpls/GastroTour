"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О проекте" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`${styles.header} ${pathname === "/" ? styles.dark : ""}`}
    >
      <Link href="/" className={styles.logo}>
        GastroTour
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/auth/login" className={`${styles.link} ${styles.login}`}>
        Войти
      </Link>
    </header>
  );
}
