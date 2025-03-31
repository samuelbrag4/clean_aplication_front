import styles from './signup.module.css';

export default function Signup() {
    return (
        <div>
            <div className={styles.container}>
                {/* Div para o cadastro */}
                <div className={styles.signupSection}>
                    <h2>Criar Conta</h2>
                    <form className={styles.signupForm}>
                        <input type="text" placeholder="Nome Completo" className={styles.input} />
                        <input type="email" placeholder="E-mail" className={styles.input} />
                        <input type="password" placeholder="Senha" className={styles.input} />
                        <button className={styles.signupButton}>Criar Conta</button>
                    </form>
                    <p>ou</p>
                    <button className={styles.socialButton}>Cadastrar com Google</button>
                    <button className={styles.socialButton}>Cadastrar com Facebook</button>
                    <p className={styles.loginText}>
                        Já tem uma conta? <a href="/login">Entrar</a>
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