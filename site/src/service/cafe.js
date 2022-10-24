export default function cafe(N,L,D) { 
      
    let qtdPorDia = N * D; 

    let calculo = qtdPorDia / 1000; 

    let resp = L; 

    for(let i = L; calculo > i; i++ ){ 
        resp = resp + L; 
     
    } 

    return(resp); 

} 

// let x = Cafe(2,1,2000); 
// console.log(x); 
