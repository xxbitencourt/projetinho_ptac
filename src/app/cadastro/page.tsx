"use client"; 
import Usuario from '../interfaces/usuario';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
    const [usuario,setUsuario] = useState<Usuario>({nome:"",email:"",senha:"",tipo:"cliente"});
    const [erro, setErro] = useState('');
    const router = useRouter();

    const alterarNome = (novoNome:string) =>{
        setUsuario((prevUsuario) =>({
            ...prevUsuario,
            nome: novoNome
        })
    )
    } 
    const alterarEmail = (novoEmail:string) =>{
        setUsuario((prevUsuario) =>({
            ...prevUsuario,
            email: novoEmail
        })
    )
    } 
    const alterarSenha = (novaSenha:string) =>{
        setUsuario((prevUsuario) =>({
            ...prevUsuario,
            senha: novaSenha
        })
    )
    } 
    
    const cadastro = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        if (  usuario.email=== "" &&  usuario.senha=== "" ) {
            setErro('Cade o cadastro');  
        } else {
            router.push('/'); 
        }
    }
    

    return (
        <div style={styles.container}>  
            <form onSubmit={cadastro} style={styles.form}>
                <h2 >Cadastro</h2>
                <div style={styles.inputGroup}>
                    <label htmlFor="name">Nome:</label>
                    <input  
                        type="name"
                        id="name"
                        value={usuario.nome}
                        onChange={(e) => alterarNome(e.target.value)}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={usuario.email}
                        onChange={(e) => alterarEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={usuario.senha}
                        onChange={(e) => alterarSenha(e.target.value)}
                        required
                    />
                </div> 
                <button type="submit" style={styles.button}>Cadastro</button>
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
