
function maiorArr(arr){
    let maior = 0;
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] > maior ) {
           maior = arr[i];
        }
     }
    return maior;
}

let x = maiorArr([1,2,3,4,5,6,7,10,9]);
console.log(x);