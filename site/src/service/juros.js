export default function JurosComposto(e, v, t, p){
    let x = v - e;
    let m = x * Math.pow (1+ (t / 100) ,p);
    let vp = m / (p * 12);
    let j = m - x;

    let msg = "Montante:" + m.toFixed(2) + " o Juros:" + j.toFixed(2) + " e o Valor da Parcela: " + vp.toFixed(2);

    return msg;
   }