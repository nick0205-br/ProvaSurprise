export default function criarArray(tamanho) {
    let notas = [];
    for (let volta = 1; volta <= tamanho; volta++) {
        notas.push(0);
    }
    return notas;
}
