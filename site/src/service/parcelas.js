
export default function parcelas(entrada, valor, taxa, periodo){
    let a = valor - entrada;
    let b = (1 + taxa);
    let c = a * Math.pow(b, periodo);
    let d = periodo * 12;
    let e = c / d;
    e = e.toFixed(2);
    let f = "R$ " + e;
    return f;
}