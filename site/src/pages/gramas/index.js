import{ useState} from "react"
import { Link } from "react-router-dom";
import calcularGramas from "../../service/gramas.js";

export default function Index() {
    const [number,setNumber] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificarResultado(){
        let x = calcularGramas(number);
        setResposta(x);
    }
    return (
        <main>
            <Link to='/'>Menu</Link>
            <h1>Valor Sorvete</h1>

            <div>
                Peso em Gramas:<input type="number" value={number} onChange={e => setNumber(Number(e.target.value))}></input>
            </div>
            <div>
                <button onClick ={verificarResultado}>Verificar</button>
            </div>
            <div>{resposta}</div>
            <br></br>
            <h2>Acesse Outras Ferramentas</h2>
            <Link to='/açaí'>Valor Total do seu Açaí</Link>
            <br></br>
            <Link to='/febre'>Você Está com Febre?</Link>
            <br></br>
            <Link to='/libras'>Você é do Signo de Libra?</Link>
            <br></br>
            <Link to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
            <br></br>
            <Link to='/salario'>Qual o seu Salãrio Liquído?</Link>
        </main>
    )
}