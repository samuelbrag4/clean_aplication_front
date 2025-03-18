import styles from "./cards.module.css";

const Card = ({capa, textoAlt, categoria, titulo}) => {
    return (
        <div className={styles.card}>
            <img className={styles.imageCard} src={capa} alt={textoAlt} />
            <div className={styles.textCard}>
                <p className={styles.categoria}>{categoria}</p>
                <h3>{titulo}</h3>
            </div>
        </div>
    );
};

export default Card;