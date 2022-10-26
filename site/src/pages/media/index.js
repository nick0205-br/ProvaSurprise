import{ useState } from "react"
import { Link } from "react-router-dom";
import maiorArr from "../../service/maiorArr";
import menorArr from "../../service/menorArr";
import mediaArr from "../../service/médiaArr";
import criarArray from "../../service/criarArr";
import '../home/index.scss';


export default function Index() {
    const [qtd, setQtd] = useState(0);
  const [notasAlunos, setNotasAlunos] = useState([]);
  const [media, setMedia] = useState(0);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);


  function okQtd() {
    const x = criarArray(qtd);
    setNotasAlunos(x);
  }

  function alterar(pos, novoValor) {
    notasAlunos[pos] = Number(novoValor);
    setNotasAlunos([...notasAlunos]);
  }

  function calcular() {
    const a = mediaArr(notasAlunos);
    const b = maiorArr(notasAlunos);
    const c = menorArr(notasAlunos);

    setMedia(a);
    setMaior(b);
    setMenor(c);
  }
    return (
        <main>
            <div className="ct1-home">
                <Link  className="linkh" to='/'>Menu</Link>
            </div>
            <div className="ct2-conteudo">
                <h1>Calcular Média</h1>
                <div className="ct2-list">
                    <div>
                        Qtd. Alunos: <input type='text' value={qtd} onChange={e => setQtd(e.target.value)} />
                        <button onClick={okQtd}> ok </button>
                    </div>

                    {notasAlunos.map((item, pos) => 
                        <div>
                            Aluno {pos+1}: <input type='text' value={notasAlunos[pos]} onChange={e => alterar(pos, e.target.value)} />
                        </div>  
                    )}
                    <br></br>
                    <div>
                        Média: {media}
                    </div>
                    <div>
                        Maior: {maior}
                    </div>
                    <div>
                        Menor: {menor}
                    </div>
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