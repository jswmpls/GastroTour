"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BurgerMenu.module.scss";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((v) => !v);
  }

  return (
    <>
      <header className={`${styles.header} ${dark ? styles.dark : ""}`}>
        <Link href="/" className={styles.logo}>
          GastroTour
        </Link>
        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
        >
          <span aria-hidden="true">☰</span>
        </button>
      </header>
      {isOpen && (
        <div className={styles.burderModal}>
          <nav>
            <ul className={styles.list}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/auth/login"
              onClick={() => setIsOpen(false)}
              className={`${styles.link} ${styles.login}`}
            >
              Войти
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
