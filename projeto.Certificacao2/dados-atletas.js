class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // MÉTODOS PARA ACESSO AOS ATRIBUTOS DO OBJETO:

    obtemNomeAtleta(){
        return this.nome;
    }

    obtemIdadeAtleta(){
        return this.idade;
    }

    obtemPesoAtleta(){
        return this.peso;
    }

    obtemAlturaAtleta(){
        return this.altura;
    }

    obtemNotasAtleta(){
        return this.notas;
    }

    // MÉTODOS PARA O CÁLCULO E OBTENÇÃO DA CATEGORIA E DO IMC DO(A) ATLETA:

    // Regras para calcular a categoria:

    // Infantil: 9 a 11 anos
    // Juvenil: 12 e 13 anos
    // Intermediário: 14 e 15 anos
    // Adulto: 16 a 30 anos
    // Sem categoria: demais idades

    calculaCategoria(idade){
        let categoria;
        if((idade<9)||(idade>30)){
            categoria = "Sem categoria";
        }else{
            if(idade <= 11){
                categoria = "Infantil";
            }else{
                if(idade <= 13){
                    categoria = "Juvenil";
                }else{
                    if(idade <= 15){
                        categoria = "Intermediário";
                    }else{
                        categoria = "Adulto";
                    }
                }
            }
        }
        return categoria;
    }

    // Para calcular o IMC, usamos a fórmula: imc = peso / (altura x altura):

    calculaIMC(peso, altura){
        return peso/(altura*altura);
    }

    obtemCategoria(){
        return this.calculaCategoria(this.obtemIdadeAtleta()); // fornecemos a idade armazenada no atributo idade.
    }

    obtemIMC(){
        return this.calculaIMC(
            this.obtemPesoAtleta(),this.obtemAlturaAtleta() // fornecemos o peso e a altura armazenados nos respectivos
        );                                                  // atributos do objeto
    }

    // MÉTODOS PARA O CÁLCULO E A OBTENÇÃO DA MÉDIA VÁLIDA DO ATLETA:

    ordenaNotas(notas) {
        let notasOrdenadas = notas.sort(function (a, b) { // usamos o método .sort() para ordenar as notas
                    return a - b;
                });
        return notasOrdenadas;
    }

    extraiNotasValidas(notasOrdenadas) {                                           // utilizamos o método .slice()
        let notasValidas = notasOrdenadas.slice(1,this.obtemNotasAtleta().length-1); // para obter um sub-array contendo
        return notasValidas;                                                       // apenas as notas válidas. No seu
    }                                                                              // segundo argumento consultamos o
                                                                                // tamanho do array de notas (atributo
                                                                                // do objeto) para evitar o hardcoding.
    somarNotasValidas(notasValidas) {
        let total = 0;
        total = notasValidas.reduce(function (soma,contador) { // usamos o método .reduce() para calcular o somatório
            return soma + contador;                            // das notas válidas.
        });
        return total;
    }

    calculaMediaValida(notasValidas, somatorioNotas) { // calculamos a média dividindo o somatório das notas válidas
        return somatorioNotas / notasValidas.length;   // pelo tamanho do array que as armazena.
    }

    obtemMediaValida() {
        let notasValidas = this.extraiNotasValidas(this.ordenaNotas(this.obtemNotasAtleta()));
        let somatorio = this.somarNotasValidas(notasValidas);
        return this.calculaMediaValida(notasValidas, somatorio); // aqui criamos as variáveis locais apenas para
    }                                                            // facilitar a chamada ao método calculaMediaValida().
}


// O CÓDIGO ABAIXO FOI UTILIZADO PARA TESTES:

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(">>>>>>>>>> VERIFICANDO SE O OBJETO FOI CRIADO: >>>>>>>>>>")
console.log();
console.log(atleta);
console.log();
console.log();
console.log(">>>>>>>>>> SAÍDA SOLICITADA: >>>>>>>>>>")
console.log();
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()} anos`);
console.log(`Peso: ${atleta.obtemPesoAtleta()} kg`);
console.log(`Altura: ${atleta.obtemAlturaAtleta().toFixed(2)} metros`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC().toFixed(2)}`); 
console.log(`Média Válida: ${atleta.obtemMediaValida().toFixed(4)}`);
  