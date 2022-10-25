
function mediaArr(arr) {
    let soma = 0
    for(let i = 0; i < arr.length; i++) {
      soma = soma + arr[i]
    }
    let média = soma / arr.length;
    return média;
}

let z = mediaArr([2,2,2]);
console.log(z);
