"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О проекте" },
];

function isHeaderDark(pathname: string) {
  if (pathname === "/") return true;
  const segment = pathname.split("/").filter(Boolean);
  return segment[0] === "catalog" && segment.length === 2;
}

export default function Header() {
  const pathname = usePathname();
  const dark = isHeaderDark(pathname);

  return (
    <header className={`${styles.header} ${dark ? styles.dark : ""}`}>
      <Link href="/" className={styles.logo}>
        GastroTour
      </Link>
      <nav>
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
