"use client";

import Link from "next/link";
import styles from "./CatalogList.module.scss";
import { places } from "../../../data/places";
import CardCatalog from "../../../ui/Card/CardCatalog";
import { useState } from "react";

export default function CatalogList() {
  const [activeType, setActiveType] = useState("Все");
  const [activeKitchen, setActiveKitchen] = useState("Все");

  const types = ["Все", ...new Set(places.map((p) => p.type))];
  const kitchens = ["Все", ...new Set(places.map((p) => p.kitchen))];

  const filtered = places.filter((p) => {
    const type = activeType === "Все" || p.type === activeType;
    const kitchen = activeKitchen === "Все" || p.kitchen === activeKitchen;
    return type && kitchen;
  });

  return (
    <>
      <section className={styles.filter}>
        <div>
          <label htmlFor="type-filter">Тип заведения</label>
          <select
            id="type-filter"
            value={activeType}
            onChange={(e) => setActiveType(e.target.value)}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="kitchen-filter">Кухня</label>
          <select
            id="kitchen-filter"
            value={activeKitchen}
            onChange={(e) => setActiveKitchen(e.target.value)}
          >
            {kitchens.map((kitchen) => (
              <option key={kitchen} value={kitchen}>
                {kitchen}
              </option>
            ))}
          </select>
        </div>
      </section>

      {filtered.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul className={styles.list}>
          {filtered.map((place) => (
            <li key={place.slug} className={styles.item}>
              <Link href={`/catalog/${place.slug}`}>
                <CardCatalog {...place} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
