"use context";

import styles from "./MenuCard.module.scss";

type MenuCardProps = Readonly<{
  name: string;
  description?: string;
  price: number; // в рублях, без копеек
  weight?: string; // "250 г", "0.5 л"
}>;

export default function MenuCard({
  name,
  description,
  price,
  weight,
}: MenuCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>
        {description} {weight}
      </p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}
