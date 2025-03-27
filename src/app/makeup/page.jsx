import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';

export default function Maquiagem() {
    return (
        <div>
            <Header corHeader={"#F05080"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"}
                heroTitulo={"A arte de se maquiar!"}
                heroTexto={"Descubra a arte de se maquiar e transforme sua beleza em confiança! Aprenda técnicas, desde o básico até looks incríveis, para realçar sua beleza natural. Com a maquiagem, você pode expressar sua personalidade, aumentar sua autoestima e celebrar o que tem de mais único. Comece hoje e brilhe!"}
                textoPrimeiroBotao={"Ler Mais"}
                corBotao={"#F05080"}
                textoSegundoBotao={"Sobre"}
            />

            <Footer />
        </div>
    );
};