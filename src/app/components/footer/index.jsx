import style from "./footer.module.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* Parte Superior: Logo e Descrição */}
      <div className={style.topSection}>
        <h2 className={style.logo}>Clean.</h2>
        <p className={style.description}>
          O site Clean oferece produtos de skincare, maquiagem e cuidados com a pele, com um design minimalista e fácil de navegar. Além disso, possui um blog com dicas de beleza, cuidados diários e resenhas de produtos. Ideal para quem busca qualidade e informações sobre bem-estar.
        </p>
      </div>

      {/* Linha de Separação */}
      <div className={style.separator}></div>

      {/* Parte Inferior: Conecte-se, Relevantes e Newsletter */}
      {/* Conecte-se */}
      <div className={style.bottomSection}>

        <div className={style.connect}>
          <h3>CONECTE-SE</h3>
          <ul>
            <li><a href="#"><FaInstagram size={20} color="white" /> Instagram</a></li>
            <li><a href="#"><FaFacebook size={20} color="white" /> Facebook</a></li>
            <li><a href="#"><FaTwitter size={20} color="white" /> Twitter</a></li>
            <li><a href="#"><FaTiktok size={20} color="white" /> Tiktok</a></li>
          </ul>
        </div>

        {/* Relevantes */}
        <div className={style.links}>
          <h3>RELEVANTES</h3>
          <ul>
            <li><a href="#">Produtos de Skincare</a></li>
            <li><a href="#">Produtos de Maquiagem</a></li>
            <li><a href="#">Produtos de Corpo</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={style.newsletter}>
          <h3>NEWSLETTER</h3>
          <p>Receba nossas novidades!</p>
          <div className={style.inputGroup}>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <button className={style.button}>ASSINAR</button>
          </div>
          <p className={style.paragrafo}>Ao clicar em “assinar” você concorda em receber e-mails da Re Petit e aceita a Politica de Privacidade e Termos e Uso.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;