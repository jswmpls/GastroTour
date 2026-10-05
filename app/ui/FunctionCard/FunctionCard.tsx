import styles from "./FunctionCard.module.scss";

type FunctionCard = Readonly<{
  title: string;
  description: string;
}>;

export default function FeatureCard({ title, description }: FunctionCard) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
