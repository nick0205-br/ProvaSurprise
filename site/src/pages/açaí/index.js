import{ useState} from "react"
import { Link } from "react-router-dom";
import calcularAcai from "../../service/acai.js"
import '../home/index.scss';

export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [numbertwo,setNumbertwo] = useState('');
    const [numberthree,setNumberthree] = useState('');
    const [numberfour,setNumberfour] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificar(){
        let x = calcularAcai(numberone, numbertwo, numberthree, numberfour)
        setResposta(x);
    }
    return (
        <main>
            <div className="ct1-home">
                <Link  className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Valor Total Açaí</h1>
                <div className="ct2-list">
                    <div>
                        Quantidade Pequeno: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Quantidade Médio: <input type="number" value={numbertwo} onChange={e => setNumbertwo(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Quantidade Grande: <input type="number" value={numberthree} onChange={e => setNumberthree(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Desconto: <input type="number" value={numberfour} onChange={e => setNumberfour(Number(e.target.value))}></input>
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
                </div>
            </div>

            
        </main>
    )
}