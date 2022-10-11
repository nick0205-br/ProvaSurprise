export default function calcularSalario(salario, bonus, desc){
    if(bonus < 0){
        let a = "Bonûs Inválido"
        return a;
    }
    else if(desc < 0){
        let a = "Desconto Inválido"
        return a;
    }
    else if(salario < 1200){
        let a = "Salário Abaixo do Salário Mínimo Permitido por Lei, Que é de R$1200."
        return a;
    }
    else{
        let a = (salario / 100) * bonus;
        let b = salario + a - desc;
        let c = "Seu salário liquido é de R$ " + b;
        return c;
    }
}