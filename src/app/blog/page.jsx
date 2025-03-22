import styles from "./blog.module.css"
import Header from '../components/header';
import Card from '../components/card';

export default function Blog() {
    return (
        <div>
            <Header />

            <section className={styles.cardContainer}>
                <Card 
                capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"} 
                textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                categoria={"Skincare"}
                titulo={"Hidratação com Argila"}
                descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                />
            </section>
            
        </div>
    );
};