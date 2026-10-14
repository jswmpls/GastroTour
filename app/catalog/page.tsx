import styles from "./page.module.scss";
import CatalogList from "./_components/CatalogList/CatalogList";

function CatalogPage() {
  return (
    <main className={styles.catalog}>
      <h1 className={styles.title}>Все заведения</h1>
      <CatalogList />
    </main>
  );
}

export default CatalogPage;
