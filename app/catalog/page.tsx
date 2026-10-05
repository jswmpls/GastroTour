import CardCatalog from "../ui/Card/CardCatalog";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

import { places } from "../data/places";
import heart0 from "../../public/icons/favorite/Heart0.svg";
import heart1 from "../../public/icons/favorite/Heart1.svg";

function CatalogPage() {
  return (
    <main className={styles.catalog}>
      <h1 className={styles.title}>Все заведения</h1>
      <ul className={styles.list}>
        {places.map((place) => (
          <li key={place.slug}>
            <div className={styles.item}>
              <Link href={`/catalog/${place.slug}`} className={styles.cardLink}>
                <CardCatalog {...place} />
              </Link>
              <button
                className={styles.favorite}
                aria-label="Добавить в избранное"
              >
                <Image
                  src={heart0}
                  alt="Кнопка добавить в избранное"
                  className={styles.image}
                  fill
                  sizes="25px"
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default CatalogPage;
