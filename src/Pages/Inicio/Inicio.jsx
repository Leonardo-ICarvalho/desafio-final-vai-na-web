import S from './inicio.module.scss'
import network from '../../assets/card-1.png'
import read from '../../assets/card-2.png'
import transform from '../../assets/card-3.png'
import balance from '../../assets/card-4.png'

export default function Inicio(){
    return(
        <main>
            <section className={S.banner}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={network} alt="" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={read} alt="" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transform} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={balance} alt="" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}