import imagem from "../images/imagem.jpg"

export default function retanguloPhoto(altura, base){
    const arrLine = [];
    const arrTotal = [];
    for(let cont = 1; cont <= base; cont++) {
        arrLine[cont] = <img widt="80em" height= "120em" src={imagem} alt=""/> ;        
    }
    for(let cont = 1; cont <= altura; cont++) {
        arrTotal[cont] = arrLine;        
    }
    return arrTotal;
} 
