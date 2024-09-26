"use client";  // Correção aqui

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Correção: usar o useRouter

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const router = useRouter();  // Correção: instanciar o useRouter

    const login = (e) => {
        e.preventDefault();
    
        if (email === "gustavo.silva19@estudante.ifms.edu.br" && senha === "123456789") {
            router.push('/Index');  // Correção: usar router.push para redirecionamento client-side
        } else {
            setErro('Login falhou. Por favor, verifique suas credenciais.');
        }
    }

    return (
        <div style={styles.container}>
            <form onSubmit={login} style={styles.form}>
                <h2>Login</h2>
                <div style={styles.inputGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
                {erro && <p style={styles.error}>{erro}</p>}
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        padding: '2rem',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    inputGroup: {
        marginBottom: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginTop: '1rem',
    },
};
