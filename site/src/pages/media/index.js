import{ useState } from "react"
import { Link } from "react-router-dom";
import maiorArr from "../../service/maiorArr";
import menorArr from "../../service/menorArr";
import mediaArr from "../../service/médiaArr";
import '../home/index.scss';


export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [respostaS,setRespostaS]= useState([]);
    const [respostaMa,setRespostaMa]= useState(0);
    const [respostaMe,setRespostaMe]= useState(0);
    const [respostaMd,setRespostaMd]= useState(0);

    function Alunos(){
        
    }

    async function verificar(){
        let x = Alunos(numberone)
        setRespostaS(x);

        let y = maiorArr(numberone)
        setRespostaMa(y);

        let z = menorArr(numberone)
        setRespostaMe(z);

        let a = mediaArr(numberone)
        setRespostaMd(a)
    }
    return (
        <main>
            <div className="ct1-home">
                <Link  className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Criar Retângulo</h1>
                <div className="ct2-list">
                    <div>
                        Altura: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
                    </div>
                    <div>
                        <button onClick ={verificar}> Verificar </button>
                    </div>
                    <br></br>
                    <div>{respostaS.map(respostaS => <p>{respostaS}</p>)}</div>
                    <div>{respostaMa.map(respostaMa => <p>{respostaMa}</p>)}</div>
                    <div>{respostaMe.map(respostaMe => <p>{respostaMe}</p>)}</div>
                    <div>{respostaMd.map(respostaMd => <p>{respostaMd}</p>  )}</div>
                    <button onClick ={calcular}> Calcular </button>
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