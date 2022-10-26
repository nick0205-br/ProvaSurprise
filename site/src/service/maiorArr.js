
export default function maiorArr(arr){
    let maior = 0;
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] > maior ) {
           maior = arr[i];
        }
     }
    return maior;
}
