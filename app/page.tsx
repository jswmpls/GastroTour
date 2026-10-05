import Banner from "./ui/Banner/Banner";
import CardCatalog from "./ui/Card/CardCatalog";
import { places } from "./data/places";
import Link from "next/link";

import styles from "./page.module.scss";

function MainPage() {
  return (
    <main className={styles.main}>
      <Banner />
      <section className={styles.popular}>
        <h2 className={styles.title}>Популярное</h2>
        <ul className={styles.list}>
          {places.map((place) => (
            <li key={place.slug}>
              <Link key={place.slug} href={`/catalog/${place.slug}`}>
                <CardCatalog {...place} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MainPage;
