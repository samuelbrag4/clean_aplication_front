import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';

export default function Skincare() {
    return (
        <div>
            <Header corHeader={"#5FCED4"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/de/bd/c6/debdc6010488eb75240d7becba969c92.jpg"}
                heroTitulo={"Beleza começa com uma pele bem cuidada."}
                heroTexto={"Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"}
                textoPrimeiroBotao={"Dicas"}
                corBotao={"#5FCED4"}
                textoSegundoBotao={"Vídeos"}
            />

            <Footer />
        </div>
    );
};