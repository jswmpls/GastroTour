import Image from "next/image";
import styles from "./CardCatalog.module.scss";

type CardCatalogProps = {
  title: string;
  type: string;
  kitchen: string;
  price: string;
  address: string;
  rating: number;
  reviewsCount: number;
  image: string;
  imageAlt: string;
};

export default function CardCatalog(props: CardCatalogProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={props.image}
          className={styles.image}
          alt={props.imageAlt}
          fill
          sizes="300px"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.type}>{props.type}</p>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.kitchen_price}>
          <p className={styles.kitchen}>{props.kitchen}</p>
          <p>•</p>
          <p className={styles.price}>{props.price}</p>
        </div>
        <p className={styles.address}>{props.address}</p>
        <p className={styles.rating}>
          <span aria-hidden="true">★</span>
          {props.rating} ({props.reviewsCount})
        </p>
      </div>
    </div>
  );
}
