export default function calcularAcai(qtdPeq, qtdMed, qtdGra, desc){
    if(desc < 0 || desc > 100){
      let a = "Desconto Inválido"
      return a;
    }
    else if(qtdGra < 0 || qtdMed < 0 || qtdPeq < 0){
      let a = "Quantidade de Produto Inválido"
      return a;
    }
    else{
      let a = (qtdPeq * 13.50) + (qtdMed * 15.00) + (qtdGra * 17.50);
      let c = (a / 100) * (100 - desc);
      let b = "Total à pagar é R$ " + c;
      return b;
    }
  }