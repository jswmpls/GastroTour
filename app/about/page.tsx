import FunctionCard from "../ui/FunctionCard/FunctionCard";
import styles from "./page.module.scss";

const functions = [
  {
    title: "Каталог заведений",
    description:
      "Просмотр всех добавленных кофеен и ресторанов с фотографиями и описанием.",
  },
  {
    title: "Карточка заведения",
    description:
      "Карточка заведения: фотография, описание, меню, адрес, часы работы.",
  },
  {
    title: "Избранное",
    description: "Сохранение понравившихся заведений для быстрого доступа.",
  },
];

function AboutPage() {
  return (
    <main className={styles.about}>
      <h1 className={styles.title}>О проекте</h1>
      <p className={styles.description}>
        GastroMap помогает быстро находить кофейни и рестораны, смотреть
        фотографии, меню и расположение на карте, а также сохранять любимые
        заведения в избранное.
      </p>
      <section className={styles.functions}>
        <h2 className={styles.title}>Основные функции</h2>
        <div className={styles.cards}>
          {functions.map((f) => (
            <FunctionCard
              title={f.title}
              description={f.description}
              key={f.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
