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
                />
            </section>
            
        </div>
    );
};