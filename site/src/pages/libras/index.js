import{ useState} from "react"
import { Link } from "react-router-dom";
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
            <Link to='/'>Menu</Link>
            <h1>Libra</h1>

            <div>
                Mês em Que Você Nasceu:<input type="text" value={month} onChange={e => setMonth(e.target.value)}></input>
            </div>
            <div>
                Dia em Que você Nasceu:<input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
            </div>
            <div>
                <button onClick ={verificarResultado}>Verificar</button>
            </div>
            <div> {resposta}</div>
            <Link to='/açaí'>Valor Total do seu Açaí</Link>
            <br></br>
            <Link to='/febre'>Você Está com Febre?</Link>
            <br></br>
            <Link to='/gramas'>Valor Total do seu Sorvete</Link>
            <br></br>
            <Link to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
            <br></br>
            <Link to='/salario'>Qual o seu Salãrio Liquído?</Link>
        </main>
    )
}