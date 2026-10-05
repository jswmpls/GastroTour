"use client";

import Image from "next/image";
import styles from "./CardCatalog.module.scss";
import { usePathname } from "next/navigation";
import type { Place } from "../../data/types";

export default function CardCatalog(props: Place) {
  const pathname = usePathname();

  return (
    <div
      className={`${styles.card} ${pathname === "/" ? styles.main : undefined}`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={props.photos[0].src}
          className={styles.image}
          alt={props.photos[0].alt}
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
