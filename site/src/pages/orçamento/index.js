import{ useState} from "react"
import { Link } from "react-router-dom";
import sitOrcamento from "../../service/orcamento.js";
import '../home/index.scss';

export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [numbertwo,setNumbertwo] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificar(){
        let x = sitOrcamento(numberone, numbertwo)
        setResposta(x);
    }
    return (
        <main>
            <div className="ct1-home">
                <Link className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Situação Orçamento</h1>
                <div className="ct2-list">
                    <div>
                        Valor Total dos Ganhos: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Valor Total dos Gastos: <input type="number" value={numbertwo} onChange={e => setNumbertwo(Number(e.target.value))}></input>
                    </div>
                    <div>
                        <button onClick ={verificar}>Verificar</button>
                    </div>
                    <div>{resposta}</div>
                </div>
                <br></br>
                <div className="ct2-list">
                    <h2>Acesse Outras Ferramentas</h2>
                    <Link className="link" to='/febre'>Você Está com Febre?</Link>
                    <br></br>
                    <Link className="link" to='/gramas'>Valor Total do seu Sorvete</Link>
                    <br></br>
                    <Link className="link" to='/libra'>Você é do Signo de Libra?</Link>
                    <br></br>
                    <Link className="link" to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
                    <br></br>
                    <Link className="link" to='/salario'>Qual o seu Salário Liquído?</Link>
                    <br></br>
                    <Link className="link" to='/ingresso'>Valor Total dos Seus Ingressos pro Cinema</Link>
                </div>
            </div>

            
        </main>
    )
}