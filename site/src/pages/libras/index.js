import{ useState} from "react"
import { Link } from "react-router-dom";
import libra from "../../service/libras";
import '../home/index.scss';

export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [month,setMonth] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificarResultado(){
        let x = libra(month, numberone);
        setResposta(x);
    }
    return (
        <main>
            <div className="ct1-home">
                <Link className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Libra</h1>
                <div className="ct2-list">

                    <div>
                        Mês em Que Você Nasceu: <input type="text" value={month} onChange={e => setMonth(e.target.value)}></input>
                    </div>
                    <div>
                        Dia em Que você Nasceu: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
                    </div>
                    <div>
                        <button onClick ={verificarResultado}>Verificar</button>
                    </div>
                    <div> {resposta}</div>
                </div>

                <br></br>
                <div className="ct2-list">
                    <h2>Acesse Outras Ferramentas</h2>
                    <Link className="link" to='/acai'>Valor Total do seu Açaí</Link>
                    <br></br>
                    <Link className="link" to='/febre'>Você Está com Febre?</Link>
                    <br></br>
                    <Link className="link" to='/gramas'>Valor Total do seu Sorvete</Link>
                    <br></br>
                    <Link className="link" to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
                    <br></br>
                    <Link className="link" to='/salario'>Qual o seu Salãrio Liquído?</Link>
                    <br></br>
                    <Link className="link" to='/orcamento'>Seus Gastos estão Dentro do seu Orçamento?</Link>
                    <br></br>
                    <Link className="link" to='/ingresso'>Valor Total dos Seus Ingressos pro Cinema</Link>
                </div>
            </div>
            
        </main>
    )
}