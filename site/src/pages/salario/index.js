import{ useState} from "react"
import { Link } from "react-router-dom";
import calcularSalario from "../../service/salario.js"

export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [numbertwo,setNumbertwo] = useState('');
    const [numberthree,setNumberthree] = useState('');
    const [resposta,setResposta]= useState();

    async function verificar(){
        let x = calcularSalario(numberone, numbertwo, numberthree)
        setResposta(x);
    }
    return (
        <main>
            <Link to='/'>Menu</Link>
            <h1>Valor Final Salário</h1>

            <div>
                Valor do Salário:<input type="number" value={numberone} onChange={e => setNumberone (Number(e.target.value))}></input>
            </div>
            <div>
                Porcentagem do Bonûs:<input type="number" value={numbertwo} onChange={e => setNumbertwo(Number(e.target.value))}></input>
            </div>
            <div>
                Valor de Desconto:<input type="number" value={numberthree} onChange={e => setNumberthree(Number(e.target.value))}></input>
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
            <Link to='/paradas'>Quantas Vezes Você Vai Abastecer?</Link>
        </main>
        
    )
}