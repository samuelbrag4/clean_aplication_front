import styles from "./popularProducts.module.css";

export default function PopularProducts() {
  return (
    <section className={styles["produtos-populares"]}>
      <h2 className={styles["produtos-populares-h2"]}>Produtos populares</h2>
      <p className={styles["produtos-populares-p"]}>
        Os produtos mais procurados da internet! Onde você encontra eles? Aqui mesmo.
      </p>
      <div className={styles["cards-container"]}>
        <div className={`${styles.card} ${styles.vazio}`}></div>
        <div className={`${styles.card} ${styles.vazio}`}></div>
        <div className={`${styles.card} ${styles.vazio}`}></div>
      </div>
      <button className={styles["ver-mais"]}>Ver mais</button>
    </section>
  );
}