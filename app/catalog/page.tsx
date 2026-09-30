import CardCatalog from "../ui/Card/CardCatalog";
import styles from "./page.module.scss";
import Link from "next/link";

import { places } from "../data/places";

function CatalogPage() {
  return (
    <main className={styles.catalog}>
      <h1 className={styles.title}>Все заведения</h1>
      {places.map((place) => (
        <Link href={place.id} key={place.id}>
          <CardCatalog {...place} />
        </Link>
      ))}
    </main>
  );
}

export default CatalogPage;
