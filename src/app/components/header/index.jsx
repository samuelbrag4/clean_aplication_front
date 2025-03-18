import Link from 'next/link';
import styles from './header.module.css';

const Header = ({ page }) => {
    // Define a classe do header com base na propriedade `page`
    const headerClass = `${styles.header} ${styles[`header-${page}`]}`; // Exemplo: header header-home

    return (
        <header className={headerClass}>
            <nav>
                <Link href="/" className={styles.navTitulo}>
                    Clean.
                </Link>
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
                <Link href="/signin" className={styles.navsign}>
                    Sign In
                </Link>
                <Link href="/signup" className={styles.button}>
                    Sign Up
                </Link>
            </nav>
        </header>
    );
};

export default Header;