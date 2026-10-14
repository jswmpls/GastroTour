"use client";

import styles from "./PhotoModal.module.scss";
import Image from "next/image";
import type { PlacePhoto } from "@/app/data/types";
import { useEffect, useState } from "react";

type PlaceGalleryProps = {
  photos: PlacePhoto[];
};

export default function PhotoModal({ photos }: PlaceGalleryProps) {
  const [selected, setSelected] = useState<PlacePhoto | null>(null);

  useEffect(() => {
    if (!selected) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelected(null);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <>
      <div className={styles.placeImages}>
        <ul className={styles.list}>
          {photos.map((photo) => (
            <li key={photo.src}>
              <button onClick={() => setSelected(photo)}>
                <Image
                  src={photo.src}
                  className={styles.image}
                  alt={photo.alt}
                  width={300}
                  height={200}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <button className={styles.close} onClick={() => setSelected(null)}>
            ❌
          </button>
          <Image
            src={selected.src}
            className={styles.image}
            alt={selected.alt}
            width={800}
            height={600}
          />
        </div>
      )}
    </>
  );
}
