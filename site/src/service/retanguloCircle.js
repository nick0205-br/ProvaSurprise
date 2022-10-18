
export default function retanguloCircle(altura, base){
    const arrLine = [];
    const arrTotal = [];
    for(let cont = 1; cont <= base; cont++) {
        arrLine[cont] = '● ';        
    }
    for(let cont = 1; cont <= altura; cont++) {
        arrTotal[cont] = arrLine;        
    }
    return arrTotal;
} 
