
export default function montante(entrada, valor, taxa, periodo){
    let a = valor - entrada;
    let b = (1 + taxa);
    let c = a * Math.pow(b, periodo);
    c = c.toFixed(2);
    let d = "R$ " + c;
    return d;
}