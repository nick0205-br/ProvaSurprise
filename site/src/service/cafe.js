export default function cafe(alunos, capacidade, qtdMl){
    let a = ((qtdMl / 1000) * alunos) / capacidade;
    if(a % capacidade){
        return a;
    }
    else{
        for (let cont = 0; a !== a % capacidade; cont++) { 
            a++;
            return a;           
        }
        return a;
    }
}
