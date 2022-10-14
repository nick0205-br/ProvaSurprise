import{ useEffect, useState} from "react";
import { Link } from "react-router-dom";
import totalCompra from "../../service/ingresso.js";
import '../home/index.scss';

export default function Index() {
    const [numberone,setNumberone] = useState(0);
    const [numbertwo,setNumbertwo] = useState(0);
    const [weekendDay,setWeekendDay] = useState('');
    const [nationality,setNationality] = useState(false);
    const [resposta,setResposta]= useState('');


    useEffect(() => {
        verificar();
    })

    async function verificar(){
        let x = totalCompra(numberone, numbertwo, weekendDay, nationality)
        setResposta(x);
    }
    console.log(resposta)
    
    return (
        <main>
            <div className="ct1-home">
                <Link className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Valor Total Ingressos</h1>
                <div className="ct2-list">
                    <div>
                        Quantidade Inteiras: <input type="number" value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
                    </div>
                    <div>
                        Quantidade Meia Entrada: <input type="number" value={numbertwo}  onChange={e => setNumbertwo(Number(e.target.value))}></input>
                    </div>
                    <div>
                       Dia da Semana: <select value={weekendDay}onChange={e => setWeekendDay(e.target.value)}>
                            <option value="segunda-feira"> Segunda-Feira </option>
                            <option value="terça-feira"> Terça-Feira </option>
                            <option value="quarta-feira"> Quarta-Feira </option>
                            <option value="quinta-feira"> Quinta-Feira </option>
                            <option value="sexta-feira"> Sexta-Feira </option>
                            <option value="sábado"> Sábado </option>
                            <option value="domingo"> Domingo </option>
                        </select>
                    </div>
                    <div>
                        Filme Nacional?  <input className="check" type="checkbox" value={nationality} onChange={e => setNationality(e.target.checked)}/>
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
                    <br></br>
                    <Link className="link" to='/orcamento'>Seus Gastos estão Dentro do seu Orçamento?</Link>
                    <br></br>
                    <Link className="link" to='/ingresso'>Valor Total dos Seus Ingressos pro Cinema</Link>
                </div>
            </div>

            
        </main>
    )
}