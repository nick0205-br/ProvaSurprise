import{ useState} from "react"
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
            <h1>Valor Sorvete</h1>

            <div>
                Peso em Gramas:<input type="text" value={number} onChange={e => setNumber(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificarResultado}>Verificar</button>
            </div>
            <div>{resposta}</div>
        </main>
    )
}