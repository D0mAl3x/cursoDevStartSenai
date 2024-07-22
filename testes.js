let notasOrdenadas = [
    [7.88, 8.42, 9.34, 10, 10],
    [7, 8, 9.33, 10, 10],
    [7, 8, 9.5, 9.5, 10],
    [9, 9.5, 10, 10, 10]
]

let notasValidadas = [];

notasOrdenadas.forEach(function (notas, i) {
    notasValidadas.push(notas.slice(1, 4));
    return notasValidadas;
});

console.log("Notas Ordenadas:");
console.log(notasOrdenadas);

console.log("Notas Válidas:");
console.log(notasValidadas);
