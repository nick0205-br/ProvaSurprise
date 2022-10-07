import{ useState} from "react"
import { Link } from "react-router-dom";
import calcularAcai from "../../service/acai.js"

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
            <ul>
                    <li> <Link to='/'>Menu</Link> </li>
            </ul>
            <h1>Valor Total Açaí</h1>

            <div>
                Quantidade Pequeno:<input type="number" value={numberone} onChange={e => setNumberone(e.target.value)}></input>
            </div>
            <div>
                Quantidade Médio:<input type="number" value={numbertwo} onChange={e => setNumbertwo(e.target.value)}></input>
            </div>
            <div>
                Quantidade Grande:<input type="number" value={numberthree} onChange={e => setNumberthree(e.target.value)}></input>
            </div>
            <div>
                Desconto:<input type="number" value={numberfour} onChange={e => setNumberfour(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificar}>Verificar</button>
            </div>
            <div>{resposta}</div>
        </main>
    )
}