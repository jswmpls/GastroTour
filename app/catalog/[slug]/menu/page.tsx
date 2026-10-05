import { notFound } from "next/navigation";
import { getPlace } from "@/app/data/places";
import Link from "next/link";
import styles from "./page.module.scss";
import MenuCard from "@/app/ui/MenuCard/MenuCard";

type MenuPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function MenuPage({ params }: MenuPageProps) {
  const { slug } = await params;
  const place = getPlace(slug);

  if (!place) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title} id="top">
        Меню заведения - {place.title}
      </h1>
      <section className={styles.filters}>
        <ul className={styles.list}>
          {place.menu.map((item) => (
            <li className={styles.item} key={item.title}>
              <Link href={`/catalog/${place.slug}/menu#${item.slug}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.menu}>
        <ul className={styles.categories}>
          {place.menu.map((menu) => (
            <li key={menu.slug} className={styles.category} id={menu.slug}>
              <h2 className={styles.categoryTitle}>{menu.title}</h2>

              <ul className={styles.items}>
                {menu.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <MenuCard {...item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <a href="#top" className={styles.up}>
        ⬆
      </a>
    </main>
  );
}
