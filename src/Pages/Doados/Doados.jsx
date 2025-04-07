
import S from './doados.module.scss'
import Protagonista from '../../assets/protagonista.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Doados(){

    const [livros, setLivros] = useState([])
    
    const getLivros = async () => {
        try{
            const response = await axios.get("https://desafio-2-api-livros-6kj3.onrender.com/livros")
        setLivros(response.data)
        } catch (error){
            console.error("Erro, livro não encontrado", error)
        }
        
    }

    useEffect(()=>{
        getLivros()
    }, [])

    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxCard}>
                <article>
                    <img src={Protagonista} alt="capa do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade
                    </p>
                    <p>Ficção</p>
                </article>
                {livros.map((item)=>(
                    <article key={item.id}>
                        <img src={item.imagem_url} alt="" />
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                        
                    </article>
                ))}
            </section>
        </section>
        
    )
}