import{ useState } from "react"
import { Link } from "react-router-dom";
import juros from "../../service/juros.js";
import montante from "../../service/montante.js";
import parcelas from "../../service/parcelas.js"
import '../home/index.scss';

export default function Index() {
    const [numberone,setNumberone] = useState(0);
    const [numbertwo,setNumbertwo] = useState(0);
    const [numberthree,setNumberthree] = useState(0);
    const [numberfour,setNumberfour] = useState(0);
    const [respostaJ,setRespostaJ]= useState('');
    const [respostaM,setRespostaM]= useState('');
    const [respostaP,setRespostaP]= useState('');

    async function verificar(){
        let x = juros(numberone, numbertwo, numberthree, numberfour)
        setRespostaJ(x);

        let y = montante(numberone, numbertwo, numberthree, numberfour)
        setRespostaM(y);

        let z = parcelas(numberone, numbertwo, numberthree, numberfour)
        setRespostaP(z);
    }
    return (
        <main>
            <div className="ct1-home">
                <Link  className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Calcular Empreendimento</h1>
                <div className="ct2-list">
                    <div>
                        Entrada: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Valor do Empreendimento: <input type="number" value={numbertwo} onChange={e => setNumbertwo(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Taxa(Anual): <input type="number" value={numberthree} onChange={e => setNumberthree(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Período(Em Anos): <input type="number" value={numberfour} onChange={e => setNumberfour(Number(e.target.value))}></input>
                    </div>
                    <div>
                        <button onClick ={verificar}> Verificar </button>
                    </div>
                    <br></br>
                    <div>Valor do Montante: {respostaM}</div>
                    <div>Valor do Juros: {respostaJ}</div>
                    <div>Valor das Parcelas: {respostaP}</div>
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