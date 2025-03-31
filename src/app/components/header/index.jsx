import Link from 'next/link';
import styles from './header.module.css';

const Header = ({ corHeader }) => {
    return (
        <header className={styles.header} style={{ backgroundColor: corHeader }}>
            <section className={styles.logoTitulo}>
                <h1 className={styles.titulo}>Clean.</h1>
            </section>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navText}>
                    Home
                </Link>
                <Link href="/products" className={styles.navText}>
                    Produtos
                </Link>
                <Link href="/blog" className={styles.navText}>
                    Blog
                </Link>
                <Link href="/contacts" className={styles.navText}>
                    Contato
                </Link>
                <Link href="/account" className={styles.navText}>
                    Minha Conta
                </Link>
            </nav>
        </header>
    );
};

export default Header;