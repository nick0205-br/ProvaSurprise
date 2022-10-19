import{ useState } from "react"
import { Link } from "react-router-dom";
import retanguloStar from "../../service/retanguloStar.js"
import retanguloCircle from "../../service/retanguloCircle.js";
import retanguloQuarter from "../../service/retanguloQuarter.js";
import retanguloPhoto from "../../service/retanguloFoto.js";
import '../home/index.scss';


export default function Index() {
    const [numberone,setNumberone] = useState('');
    const [numbertwo,setNumbertwo] = useState('');
    const [respostaS,setRespostaS]= useState([]);
    const [respostaC,setRespostaC]= useState([]);
    const [respostaQ,setRespostaQ]= useState([]);
    const [respostaP,setRespostaP]= useState([]);

    async function verificar(){
        let x = retanguloStar(numberone, numbertwo)
        setRespostaS(x);

        let y = retanguloQuarter(numberone, numbertwo)
        setRespostaQ(y);

        let z = retanguloCircle(numberone, numbertwo)
        setRespostaC(z);

        let a = retanguloPhoto(numberone, numbertwo)
        setRespostaP(a)
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
                        Base: <input type="number" value={numbertwo} onChange={e => setNumbertwo(Number(e.target.value))}></input>
                    </div>
                    <div>
                        <button onClick ={verificar}> Verificar </button>
                    </div>
                    <br></br>
                    <div>{respostaS.map(respostaS => <p>{respostaS}</p>)}</div>
                    <div>{respostaQ.map(respostaQ => <p>{respostaQ}</p>)}</div>
                    <div>{respostaC.map(respostaC => <p>{respostaC}</p>)}</div>
                    <div>{respostaP.map(respostaP => <p>{respostaP}</p>  )}</div>
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