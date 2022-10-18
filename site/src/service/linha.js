export default function linha(qtd){
    const arrNum = [];
    for(let cont = 1; cont <= qtd; cont++) {
        arrNum[cont] = '* ';        
    }
    return arrNum;
}

