// filepath: c:\Users\Aluno\Documents\clean_website\src\app\account\page.jsx
"use client";

import Footer from '../components/footer';
import Header from '../components/header';
import styles from './account.module.css';

export default function Conta() {
    return (
        <div>
            <Header corHeader={"#F05080"} />
            <div className={styles.container}>
                <h1 className={styles.title}>Bem-vindo à sua conta</h1>
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.accountButton} 
                        onClick={() => window.location.href = '/login'}
                    >
                        Entrar em sua conta
                    </button>
                    <button 
                        className={styles.accountButton} 
                        onClick={() => window.location.href = '/signup'}
                    >
                        Criar uma conta
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};