import styles from "./cards.module.css";

const Card = ({capa, textoAlt, categoria, titulo, descricao, caminhoArtigo}) => {
    return (
        <div className={styles.card}>
            <img className={styles.imageCard} src={capa} alt={textoAlt} />
            <div className={styles.textCard}>
                <p className={styles.categoria}>{categoria}</p>
                <h3 className={styles.tituloCard}>{titulo}</h3>
                <p className={styles.descricao}>{descricao}</p>
                <button className={styles.botaoCard}><a className={styles.linkBotao} href={caminhoArtigo}>Ver Mais</a></button>
            </div>
        </div>
    );
};

export default Card;