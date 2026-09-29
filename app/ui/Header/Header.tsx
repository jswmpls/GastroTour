"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Link href="/">GastroTour</Link>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname == link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/auth/login">Войти</Link>
    </header>
  );
}
