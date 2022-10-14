
export default function sitOrcamento(ganhos, gastos){
    if(ganhos < 0 || gastos < 0){
        let a = "Valores Inválidos";
        return a;
    }
    else{
        let a = ganhos / 100;
    let b = gastos / a;
    if(b > 100){
        let c = "Orçamento Comprometido! Hora de rever seus gastos!";
        return c;
    }

    else if(b >= 81 && b <= 100){
        let c = "Cuidado, seu orçamento pode ficar comprometido!";
        return c;
    }

    else if(b >= 51 && b <= 80){
        let c = "Atenção, melhor conter seus gastos!";
        return c;
    }

    else if(b >= 21 && b <= 50){
        let c = "Muito Bem, seus gastos não ultrapassam metade dos seus ganhos!";
        return c;
    }

    else if(b >= 0 && b <= 20){
        let c = "Parabéns, está gerenciando bem seu orçamento!";
        return c;
    }
    }
}