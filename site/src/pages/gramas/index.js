import{ useState} from "react"
import { Link } from "react-router-dom";
import calcularGramas from "../../service/gramas.js";
import '../home/index.scss';

export default function Index() {
    const [number,setNumber] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificarResultado(){
        let x = calcularGramas(number);
        setResposta(x);
    }
    return (
        <main>
            <div className="ct1-home">
                <Link className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Valor Total Sorvete</h1>
                <div className="ct2-list">
                    <div>
                        Peso em Gramas: <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))}></input>
                    </div>
                    <div>
                        <button onClick ={verificarResultado}>Verificar</button>
                    </div>
                    <div>{resposta}</div>
                </div>
                <br></br>
                <div className="ct2-list">
                    <h2>Acesse Outras Ferramentas</h2>
                    <Link className="link" to='/acai'>Valor Total do seu Açaí</Link>
                    <br></br>
                    <Link className="link" to='/febre'>Você Está com Febre?</Link>
                    <br></br>
                    <Link className="link" to='/libra'>Você é do Signo de Libra?</Link>
                    <br></br>
                    <Link className="link" to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
                    <br></br>
                    <Link className="link" to='/salario'>Qual o seu Salário Liquído?</Link>
                </div>
                
            </div>
            
            
        </main>
    )
}