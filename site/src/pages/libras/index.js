import{ useState} from "react"
import libra from "../../service/libras";

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
            <h1>Libra</h1>

            <div>
                Mês em Que Você Nasceu:<input type="text" value={month} onChange={e => setMonth(e.target.value)}></input>
            </div>
            <div>
                Dia em Que você Nasceu:<input type="text" value={numberone} onChange={e => setNumberone(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificarResultado}>Verificar</button>
            </div>
            <div> {resposta}</div>
        </main>
    )
}