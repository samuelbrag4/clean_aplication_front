import styles from './login.module.css';

export default function Corpo() {
    return (
        <div>
            <div className={styles.container}>
                {/* Div para o login */}
                <div className={styles.loginSection}>
                    <h2>Entrar</h2>
                    <form className={styles.loginForm}>
                        <input type="text" placeholder="Usuário" className={styles.input} />
                        <input type="email" placeholder="E-mail" className={styles.input} />
                        <input type="password" placeholder="Senha" className={styles.input} />
                        <button className={styles.loginButton}>Entrar</button>
                    </form>
                    <p>ou</p>
                    <button className={styles.socialButton}>Entrar com Google</button>
                    <button className={styles.socialButton}>Entrar com Facebook</button>
                    <p className={styles.createAccountText}>
                        Não tem conta? <a href="/signup">Criar uma</a>
                    </p>
                </div>

                {/* Div para a imagem */}
                <div className={styles.imageSection}>
                    <img
                        src="/images/butterfly.jpg"
                        alt="Borboleta"
                        className={styles.butterflyImage}
                    />
                </div>
            </div>
        </div>
    );
};