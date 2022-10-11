import{ useState} from "react"
import { Link } from "react-router-dom";
import situacaoFebre from "../../service/febre.js";
import '../home/index.scss';

export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificar(){
        let x = situacaoFebre(numberone)
        setResposta(x);
    }
    return (
        <main>
            <div className="ct1-home">
                <Link  className="linkh" to='/'>Menu</Link>
            </div>

            <div className="ct2-conteudo">
                <h1>Verificação de Temperatura</h1>
                <div className="ct2-list">
                    <div>
                        Temperatura: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
                    </div>
                    <div>
                        <button onClick ={verificar}>Verificar</button>
                    </div>
                    <div>A situação para sua temperatura é {resposta} </div>
                </div>
                <br></br>
                <div className="ct2-list">
                    <h2>Acesse Outras Ferramentas</h2>
                    <Link className="link" to='/acai'>Valor Total do seu Açaí</Link>
                    <br></br>
                    <Link className="link" to='/gramas'>Valor Total do seu Sorvete</Link>
                    <br></br>
                    <Link className="link" to='/libra'>Você é do Signo de Libra?</Link>
                    <br></br>
                    <Link className="link" to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
                    <br></br>
                    <Link className="link" to='/salario'>Qual o seu Salãrio Liquído?</Link>
                </div>
                
            </div>
            
        </main>
    )
}