export default function contarAte(inicio, fim){
    let arrLength = 0;
    const arrNum = [];
    for(let cont = inicio; cont <= fim; cont++) {
        arrNum[arrLength] = cont;
        arrLength ++;
        
    }
    return arrNum;
}

