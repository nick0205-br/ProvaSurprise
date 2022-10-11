import{ useState} from "react"
import { Link } from "react-router-dom";
import calcularParadas from "../../service/paradas.js"

export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [numbertwo,setNumbertwo] = useState('');
    const [numberthree,setNumberthree] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificar(){
        let x = calcularParadas(numberone, numbertwo, numberthree)
        setResposta(x);
    }
    return (
        <main>
            <Link to='/'>Menu</Link>
            <h1>Total de Paradas</h1>

            <div>
                Capacidade em Litros: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
            </div>
            <div>
                Consumo em Litros: <input type="number" value={numbertwo} onChange={e => setNumbertwo(Number(e.target.value))}></input>
            </div>
            <div>
                Distância em Quilômetros: <input type="number" value={numberthree} onChange={e => setNumberthree(Number(e.target.value))}></input>
            </div>
            <div>
                <button onClick ={verificar}>Verificar</button>
            </div>
            <div>{resposta}</div>
            <Link to='/açaí'>Valor Total do seu Açaí</Link>
            <br></br>
            <Link to='/febre'>Você Está com Febre?</Link>
            <br></br>
            <Link to='/gramas'>Valor Total do seu Sorvete</Link>
            <br></br>
            <Link to='/libras'>Você é do Signo de Libra?</Link>
            <br></br>
            <Link to='/salario'>Qual o seu Salãrio Liquído?</Link>
        </main>
    )
}