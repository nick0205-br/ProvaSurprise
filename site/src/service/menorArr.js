
function menorArr(arr){
    let menor = 11;
    for (var i = arr.length; i >= 0; i--) {
        if ( menor > arr[i] ) {
           menor = arr[i];
        }
     }
    return menor;
}

let y = menorArr([5,6,7,10,9]);
console.log(y);