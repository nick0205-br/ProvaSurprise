
export default function juros(entrada, valor, taxa, periodo){
    let a = valor - entrada;
    let b = (1 + taxa);
    let c = a * Math.pow(b, periodo);
    let d = c - a;
    d = d.toFixed(2);
    let e = "R$ " + d;
    return e; 
}

