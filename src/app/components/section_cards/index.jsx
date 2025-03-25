import styles from "./section-cards.module.css"

const SectionCards = ({ children }) => {
    return (
        <section className={styles.sectionCards}>
            <div className={styles.cards}>{children}</div>
            <button className={styles.botao}>
                Encontre mais artigos
            </button>
        </section>
    );
};

export default SectionCards;