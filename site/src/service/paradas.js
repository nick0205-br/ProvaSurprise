export default function calcularParadas(capacidade, consumo, distancia){
    if(capacidade < 0){
        let a = "Capacidade Inválida";
        return a;
    }
    else if(consumo < 0 ){
        let a = "Consumo Inválido";
        return a;
    }
    else if(distancia < 0){
        let a = "Consumo Inválido";
        return a;
    }
    else{
        let a = (distancia / consumo) / capacidade;
        let b = Math.ceil(a);
        let resp = "Você precisará fazer " + b + " paradas para abastecer."
        return resp;
    }
}
