class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    obtemNotasAtleta(){
        return this.notas;
    }

    ordenaNotas(notas) {
        let notasOrdenadas = notas.sort(function (a, b) {
                    return a - b;
                });
        return notasOrdenadas;
    }

    extraiNotasValidas(notasOrdenadas) {
        let notasValidas = notasOrdenadas.slice(1,4);
        return notasValidas;
    }

    somarNotasValidas(notasValidas) {
        let total = 0;
        total = notasValidas.reduce(function (soma,contador) {
            return soma += contador;
        });
        return total;
    }

    calculaMediaValida(notasValidas, somatorioNotas) {
        return somatorioNotas / notasValidas.length;
    }

    obtemMediaValida() {
        let notasValidas = []
        notasValidas.push(this.extraiNotasValidas(this.ordenaNotas(this.obtemNotasAtleta())));
        let somatorio = this.somarNotasValidas(notasValidas);
        return this.calculaMediaValida(notasValidas, somatorio);
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Obtem notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Notas Ordenadas: ${atleta.ordenaNotas(atleta.obtemNotasAtleta())}`);
let ordenadas = atleta.ordenaNotas(atleta.obtemNotasAtleta());
console.log(`Notas Válidas: ${atleta.extraiNotasValidas(ordenadas)}`);
let validas = atleta.extraiNotasValidas(ordenadas);
console.log(`Somatório das Notas Válidas: ${atleta.somarNotasValidas(validas)}`);
let somatorio = atleta.somarNotasValidas(validas);
console.log(`Média Válida: ${atleta.calculaMediaValida(validas, somatorio)}`);