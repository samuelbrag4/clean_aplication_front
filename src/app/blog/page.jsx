import styles from "./blog.module.css"
import Header from '../components/header';
import Card from '../components/card';
import Hero from '../components/hero';

export default function Blog() {
    return (
        <div>
            <Header corHeader={"#00DAC7"}/>

            <Hero
            linkImage={"https://i.pinimg.com/736x/cc/d7/f1/ccd7f15523a1891ec4b20fc2002221c4.jpg"}
            heroTitulo={"Conheça e encotre dicas incríveis!!"}
            heroTexto={"Aqui, você encontrará dicas, tendências e informações sobre skincare, produtos de beleza e cuidados com o corpo. Nosso objetivo é ajudar você a escolher os melhores produtos para a sua rotina, entender os ingredientes e descobrir novas formas de cuidar da sua pele. Fique por dentro das novidades e aproveite nossas recomendações para realçar sua beleza da melhor forma!"}
            textoPrimeiroBotao={"Dicas"}
            corBotao={"#00DAC7"}
            textoSegundoBotao={"Vídeos"}
            />

            <section className={styles.cardContainer}>
                <Card 
                capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"} 
                textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                categoria={"Skincare"}
                titulo={"Hidratação com Argila"}
                descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                corBorda={"#00DAC7"}
                corCategoria={"#00DAC7"}
                />
            </section>
            
        </div>
    );
};