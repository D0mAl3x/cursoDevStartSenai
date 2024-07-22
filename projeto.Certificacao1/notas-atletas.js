class Atleta {
  constructor(atletas) {      // O construtor recebe a matriz de objetos como argumento.
    this.atletas = atletas;
  }

  ordenaNotas() {
    let notasOrdenadas = []; // matriz gerada para armazenar as notas ordenadas de cada atleta.
    for (let i = 0; i < this.atletas.length; i++) { // usei um laço for() para iterar sobre a matriz de objetos
      notasOrdenadas.push(this.atletas[i].notas.sort(function (a, b) { // ordenando cada array de notas com o
        return a - b;                                                  // método .sort(), armazenando em seguida
      }));                                                             // na variável criada.
    }
    return notasOrdenadas;
  }

  notasValidas(notasOrdenadas) {
    let notasValidadas = []; // matriz gerada para armazenar as notas válidas para o cálculo da média. 
    notasOrdenadas.forEach(function (notas, i) {    // usei um .forEach() para iterar na matriz recebida como
      return notasValidadas.push(notas.slice(1, 4));// parâmetro e extrair as notas válidas de cada atleta
    });                                             // usando o .slice() e o .push().
    return notasValidadas;
  }

  somatorioNotasValidas(notasValidadas) {
    let totais = []; // array criado para armazenar os somatórios das notas válidas de cada atleta.
    notasValidadas.forEach(function (notas, i) {
      return totais.push(notas.reduce(function (soma, contador) { // utilizei o método .reduce() para somar as notas e
        return soma + contador;                                // usei o .push() para adicionar os resultados no array.
      }, 0))
    });
    return totais;
  }

  calculoMediaValida(validadas, somaNotasValidas) {
    let medias = []; // array criado para armazenar as médias de cada atleta.
    for (let i = 0; i < validadas.length; i++) { // o loop itera sobre a matriz de notas validadas
      medias.push(somaNotasValidas[i] / validadas[i].length); // cada somatório é dividido pela quantidade
    }                                                       // de itens dos arrays de notas validadas.
    return medias;
  }
}



/*
  O código abaixo foi utilizado para testes de leitura de dados e de funcionamento do objeto 
  e dos métodos criados:
*/

// Dados fornecidos para entrada:
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

ginasta = new Atleta(atletas); // Objeto criado para invocar os métodos que usaremos para manipular os dados.
console.log(">>>>>>>>>> Confirmando se o objeto foi criado:");
console.log(ginasta);
console.log("");

console.log(">>>>>>>>>> Verificando se as notas dos atletas estão armazenadas:");
ginasta.atletas.forEach(function (atleta) { // Como no comando anterior as notas não estavam visíveis,
  console.log(atleta.notas);              // resolvi averiguar se estavam armazenadas.
});
console.log("");

console.log(">>>>>>>>>> Exibindo Notas ordenadas:");
console.log(ginasta.ordenaNotas()); // Invocação do método de ordenação das notas
console.log("");
let ordenadas = ginasta.ordenaNotas(); // O método retorna um array que será usado posteriormente.

console.log(" >>>>>>>>>> Exibindo Notas Válidas:");
console.log(ginasta.notasValidas(ginasta.ordenaNotas())); // Invocação do método para extrair as notas válidas
console.log("");
let validadas = ginasta.notasValidas(ordenadas); // O array retornado contém somente as notas válidas 

console.log(">>>>>>>>>> Exibindo Somatório das Notas Válidas:");
console.log(ginasta.somatorioNotasValidas(validadas)); // Invocação do método que soma as notas válidas de cada atleta
console.log("");
let somaNotasValidas = ginasta.somatorioNotasValidas(validadas); // O array retornado contém os totais de cada atleta

console.log(">>>>>>>>>> Exibindo Média das Notas Válidas:");
//  Invocação do método que calcula as médias de cada atleta. Aqui passamos dois argumentos: o array de notas
//  validadas e o array com os somatórios. Ambos necessários para o cálculo da média, pois o primeiro usamos
//  para obter a quantidade de notas somadas e o segundo para obter o somatório das notas de cada Atleta.
console.log(ginasta.calculoMediaValida(validadas, somaNotasValidas));
console.log("");
let mediasAtletas = ginasta.calculoMediaValida(validadas, somaNotasValidas)


console.log(">>>>>>>>>> EXIBINDO RESULTADOS:");

for (let i = 0; i < ginasta.atletas.length; i++) {
  console.log(`Atleta: ${ginasta.atletas[i].nome}`);
  console.log(`Notas Obtidas: ${ginasta.atletas[i].notas}`);
  console.log(`Média Válida: ${mediasAtletas[i].toFixed(2)}`);
  console.log("");
  console.log("");
}



