import { notFound } from "next/navigation";
import { getPlace } from "../../data/places";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import mealIco from "../../../public/icons/Meal.svg";
import timeIco from "../../../public/icons/Time.svg";
import priceIco from "../../../public/icons/price.svg";
import PlaceMapClient from "./PlaceMapClient";

type PlacePageProps = {
  params: Promise<{ slug: string }>;
};

function nowDate(): number {
  const today = new Date().getDay();
  if (today === 0) return 2;
  if (today === 6 || today === 5) return 1;
  return 0;
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = getPlace(slug);

  if (!place) {
    notFound();
  }

  const information = [
    {
      icons: mealIco,
      title: "Кухня",
      text: place.kitchen,
    },
    {
      icons: priceIco,
      title: "Средний чек",
      text: place.price,
    },
    {
      icons: timeIco,
      title: "Часы работы",
      text: place.hours[nowDate()].time,
    },
  ];

  return (
    <main className={styles.place}>
      <section className={styles.placeCard}>
        <div className={styles.dark_back}></div>
        <div className={styles.imageWrap}>
          <Image
            src={place.photos[0].src}
            className={styles.image}
            alt={place.photos[0].alt}
            fill
            sizes="300px"
          />
        </div>
        <div className={styles.info}>
          <p className={styles.type}>{place.type}</p>
          <h1 className={styles.title}>{place.title}</h1>
          <div className={styles.kitchen_price}>
            <p className={styles.kitchen}>{place.kitchen}</p>
            <p>•</p>
            <p className={styles.price}>{place.price}</p>
          </div>
          <p className={styles.address}>{place.address}</p>
          <p className={styles.rating}>
            <span aria-hidden="true">★</span>
            {place.rating} ({place.reviewsCount})
          </p>
        </div>
      </section>

      <section className={styles.placeImages}>
        <ul className={styles.list}>
          {place.photos.slice(1).map((photo) => (
            <li key={photo.src}>
              <Image
                src={photo.src}
                className={styles.image}
                alt={photo.alt}
                width={300}
                height={200}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.placeDescription}>
        {/* Описание, инфо, карта */}
        <section className={styles.info}>
          <p className={styles.description}>{place.description}</p>
          <ul className={styles.list}>
            {information.map((info) => (
              <li className={styles.item} key={info.title}>
                <div className={styles.title}>
                  <Image
                    src={info.icons}
                    width={20}
                    height={20}
                    alt={info.title}
                  ></Image>
                  <h4>{info.title}</h4>
                </div>
                <p>{info.text}</p>
              </li>
            ))}
          </ul>
          <div id="first_map" className={styles.map}>
            <PlaceMapClient
              lat={place.coordinates.lat}
              lng={place.coordinates.lng}
            />
          </div>
        </section>

        {/* Меню */}
        <section className={styles.placeMenu}>
          <h2 className={styles.title}>Меню</h2>
          <ul className={styles.list}>
            {place.menu.map((category) => (
              <li key={category.title} className={styles.item}>
                <Link
                  href={`/catalog/${place.slug}/menu#${category.slug}`}
                  key={category.title}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
