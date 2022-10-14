
export default function totalCompra(inteiras, meias, diaSemana, nacional){
    let b = "";
    if(diaSemana === "quarta-feira"){
        if(nacional === true){
            let a = (inteiras + meias) * 5;
            b = "O total a se pagar pelos ingressos é R$ " + a;
        }
        else if(nacional === false){
            let a = (inteiras + meias) * 14.25;
            b = "O total a se pagar pelos ingressos é R$ " + a;
        }
    }
    
    else{
        if(nacional === true){
            let a = (inteiras + meias) * 5;
            b = "O total a se pagar pelos ingressos é R$ " + a;
        }
        else if(nacional === false){
            let a = (inteiras * 28.5) + (meias * 14.25);
            b = "O total a se pagar pelos ingressos é R$ " + a;
        }
        
    }
    return b;
}

