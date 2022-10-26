import { Link } from "react-router-dom";
import './index.scss'



export default function Index() {
    return(
        <main className="page-home">
            <div className="ct1-home">
                <h1>Home</h1>
            </div>
            <div className="ct2-conteudo">
                <div className="ct2-list">
                <h2>Conteúdos</h2>

                    <Link className="link" to='/acai'>Cálculo Açaí</Link> 
                    <Link className="link" to='/gramas'>Cálculo Sorvete</Link> 
                    <Link className="link" to='/libra'> Libra </Link> 
                    <Link className="link" to='/febre'> Verificar Temperatura </Link> 
                    <Link className="link" to='/paradas'> Verificar Paradas </Link> 
                    <Link className="link" to='/salario'> Valor final Salário </Link> 
                    <Link className="link" to='/orcamento'> Situação Orçamento </Link>
                    <Link className="link" to='/ingresso'> Valor Cinema </Link>
                    <Link className="link" to='/contarAte'> Contador entre Números </Link>
                    <Link className="link" to='/linha'> Criar Uma Linha </Link>
                    <Link className="link" to='/retangulo'> Criar Um Retângulo </Link>
                    <Link className="link" to='/cafe'> Calcular Quantidade de Café </Link>
                    <Link className="link" to='/empreendimento'> Calcular as Parcelas do seu Empreendimento </Link>
                    <Link className="link" to='/media'> Calcular a Média de Nota dos seus Alunos </Link>
                </div>
            </div>
        </main>
    )
}