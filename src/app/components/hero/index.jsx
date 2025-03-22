import styles from "./hero.module.css";

const Hero = ({ heroTitulo, heroTexto, textoPrimeiroBotao, textoSegundoBotao, linkImage, textoAlt, corBotao }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.containerInformacao}>
                <h1 className={styles.heroTitulo}>{heroTitulo}</h1>
                <p className={styles.heroTexto}>{heroTexto}</p>
                <div className={styles.heroBotoes}>
                    <button className={styles.heroPrimeiroBotao} style={{ backgroundColor: corBotao}}>{textoPrimeiroBotao}</button>
                    <button className={styles.heroSegundoBotao}>{textoSegundoBotao}</button>
                </div>
            </div>
            <div className={styles.containerImagem}>
                <img className={styles.imagem} src={linkImage} alt={textoAlt} />
            </div>
        </section>
    );
};

export default Hero;