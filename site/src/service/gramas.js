export default function calcularGramas(gramas){
    if(gramas > 0){
      if(gramas >= 1000){
        let a = (gramas / 100) * 3;
        let b = "O total a Pagar é R$" + a;
        return b;
      }
      else if(gramas < 0){
        let a = "Peso Inválido"
        return a;
      }
      else{
        let a = (gramas / 100) * 3.50;
        let b = "O total a Pagar é R$" + a;
        return b;
      }
    }
    else{
      let a = "Peso Inválido"
      return a;
    }
    
  }