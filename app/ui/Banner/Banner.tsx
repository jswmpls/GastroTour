import Image from "next/image";
import bannerImage from "../../../public/banner.jpg";
import styles from "./Banner.module.scss";

function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        src={bannerImage}
        alt="Изображение ресторана"
        className={styles.image}
      />
      <div className={styles.dark_back}></div>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Открой
          <br /> вкусные места своего города
        </h1>
        <p className={styles.description}>
          Кафе, рестораны, бары - в одном месте. <br /> Каталог, меню и
          избранное!
        </p>
      </div>
    </section>
  );
}

export default Banner;
