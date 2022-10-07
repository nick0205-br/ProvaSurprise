export default function libra(mes, dia){
    let resultado = "";
    if(mes = "outubro" ){
      if(dia >= 1 && dia <= 22){
        resultado = "É do Signo de Libra? Sim";
        return resultado;
      }
      else if(dia < 1 && dia > 31){
        resultado = "Dia Inválido";
        return resultado;
      }
      else{
        resultado = "É do Signo de Libra? Não";
        return resultado;
      }
    }
    else if(mes = "setembro"){
      if(dia >= 23 && dia <= 30){
        resultado = "É do Signo de Libra? Sim";
        return resultado;
      }
      else if(dia < 1 && dia > 30){
        resultado = "Dia Inválido";
        return resultado;
      }
      else{
        resultado = "É do Signo de Libra? Não";
        return resultado;
      }
    }
    else{
      resultado = "É do Signo de Libra? Não";
      return resultado;
    }
  }
