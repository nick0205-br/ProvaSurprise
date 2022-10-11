import{ useState} from "react"
import { Link } from "react-router-dom";
import situacaoFebre from "../../service/febre.js";

export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificar(){
        let x = situacaoFebre(numberone)
        setResposta(x);
    }
    return (
        <main>
            <Link to='/'>Menu</Link>
            <h1>Verificação de Temperatura</h1>

            <div>
                Temperatura:<input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
            </div>
            <div>
                <button onClick ={verificar}>Verificar</button>
            </div>
            <div>A situação para sua temperatura é {resposta} </div>
            <br></br>
            <h2>Acesse Outras Ferramentas</h2>
            <Link to='/açaí'>Valor Total do seu Açaí</Link>
            <br></br>
            <Link to='/gramas'>Valor Total do seu Sorvete</Link>
            <br></br>
            <Link to='/libras'>Você é do Signo de Libra?</Link>
            <br></br>
            <Link to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
            <br></br>
            <Link to='/salario'>Qual o seu Salãrio Liquído?</Link>
        </main>
    )
}