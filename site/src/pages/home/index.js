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
                <ul>
                    <li> <Link className="link" to='/acai'>Cálculo Açaí</Link> </li>
                    <li> <Link className="link" to='/gramas'>Cálculo Gramas</Link> </li>
                    <li> <Link className="link" to='/libra'> Libra </Link> </li>
                    <li> <Link className="link" to='/febre'> Verificar Temperatura </Link> </li>
                    <li> <Link className="link" to='/paradas'> Verificar Paradas </Link> </li>
                    <li> <Link className="link" to='/salario'> Valor final Salário </Link> </li>
                    <li> <Link className="link" to='/contarAte'> Contador entre Números </Link> </li>
                    <li> <Link className="link" to='/linha'> Criar Uma Linha </Link> </li>
                    <li> <Link className="link" to='/retangulo'> Criar Um Retângulo </Link> </li>
                </ul>
                </div>
            </div>
        </main>
    )
}