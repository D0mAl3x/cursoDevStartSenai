# Nome do Projeto:
<p>
	projetocertificacao2_devstart
</p>
<br><br>

# Descrição do Projeto:
<p>
	Projeto criado para obtenção de certificação no curso <b>DevStart Senai - Trilha 1 - Lógica de Programação</b>. 
	Trata-se de um algoritmo escrito em JavaScript que recebe as informações de um atleta (nome, idade, peso, altura 
	e notas recebidas), exibindo em seguida a categoria à qual ele pertence (Infantil, Juvenil, Intermediário, Adulto
	ou Sem Categoria); seu Índice de Massa Corporal - IMC; Média Válida Calculada (segundo a metodologia usada no Projeto
	de Certificação 1); e demais informações que foram coletadas.
</p>
<br><br>

# Começando:
<p>
	Durante a elaboração do código utilizei um notebook Asus, Intel core i3, 1.5GHz, 4GB de ram, com sistema operacional 
	Windows 10 Home Single Language, x64. Usei ainda o Visual Studio Code, com as seguintes configurações:
</p>

<br><br>
<ul>
  <li>Version: 1.91.1 (user setup)</li>
  <li>Commit: f1e16e1e6214d7c44d078b1f0607b2388f29d729</li>
  <li>Date: 2024-07-09T22:06:49.809Z</li>
  <li>Electron: 29.4.0</li>
  <li>ElectronBuildId: 9728852</li>
  <li>Chromium: 122.0.6261.156</li>
  <li>Node.js: 20.9.0</li>
  <li>V8: 12.2.281.27-electron.0</li>
  <li>OS: Windows_NT x64 10.0.19045</li>
</ul>
<br><br>

# Desenvolvimento
Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:
<br><br>
<i>cd "diretório de sua preferência"</i><br>
<i>git clone https://github.com/D0mAl3x/dados-atletas.git</i>
<br><br>

# Construção:
Não se aplica. O projeto em tela é composto de um único arquivo .js que pode ser executado diretamente no Visual Studio Code
ou em qualquer interpretador JavaScript.
<br><br>

# Caracteristicas:
O algoritmo contém um objeto da classe Atleta, criado para receber e manipular os dados de entrada, quais sejam, nome, idade, altura, 
peso e notas obtidas em uma competição. Possui ainda os métodos descritos abaixo:
<br><br>
<h2> Métodos para acesso aos atributos do objeto da classe Atleta:</h2>
<ul>
	<li><b>obtemNomeAtleta():</b> retorna o conteúdo do atributo nome.</li>
	<li><b>obtemIdadeAtleta():</b> retorna o conteúdo do atributo idade.</li>
	<li><b>obtemPesoAtleta():</b> retorna o conteúdo do atributo peso.</li>
	<li><b>obtemAlturaAtleta():</b> retorna o conteúdo do atributo altura.</li>
	<li><b>obtemNotasAtleta():</b> retorna o conteúdo do atributo notas.</li>
</ul>
<br><br>
<h2>Métodos para o cálculo e obtenção da categoria e do IMC do(a) atleta:</h2>
<ul>
	<li><b>calculaCategoria():</b> verifica, a partir da idade, em qual categoria o(a) atleta se enquadra.</li>
	<li><b>calculaIMC():</b> calcula, com base no peso e na altura informados, qual é o valor do IMC do(a) atleta.</li>
	<li><b>obtemCategoria():</b> retorna a categoria do(a) atleta, mediante chamada ao método calculaCategoria()</li>
	<li><b>obtemIMC():</b> retorna o valor do IMC do(a) atleta, mediante chamada ao método calculaIMC()</li>
</ul>
<br><br>
<h2>Métodos para o cálculo e obtenção da média válida do(a) atleta:</h2>
<p>
    Para o cálculo da média válida, foi-nos requisitado que observássemos a mesma metodologia do projeto de certificação 1, qual seja:
    <blockquote cite="https://app.devstart.tech/learn/logica-de-programacao/projetos-de-certificacao/projeto-de-certificacao-1-pontuacao-dos-atletas">
        <p>
            <ol>
                <li>Cada jurado pode fornecer uma nota de um (1) a dez (10);</li>
                <li>A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.</li>
            </ol>
        </p>
    </blockquote>
    Em atendimento às condições impostas, criamos os métodos descritos abaixo:
</p>
<ul>
	<li><b>ordenaNotas():</b> recebe o atributo notas (array de números) e o retorna em ordem crescente.</li>
	<li><b>extraiNotasValidas():</b> recebe o array de notas ordenado e devolve uma cópia, onde foram excluídas a menor e a maior notas obtidas.</li>
	<li><b>somarNotasValidas():</b> recebe o array de notas válidas e devolve o somatório de seus valores.</li>
	<li><b>calculaMediaValida():</b> calcula a média das notas constantes no array de notas válidas, dividindo o somatório pelo total de índices do array.</li>
    <li><b>obtemMediaValida():</b> retorna a média válida calculada, mediante chamada ao método calculaMediaValida() e a seus antecessores.</li>
</ul>
<br><br> 

# Configuração:
Para executar o projeto, não há configurações adicionais a realizar. Basta apenas carregar o arquivo em um editor que suporte
a interpretação de scripts JS e executar o arquivo "dados-atletas.js".
<br><br>

# Testes:
Os testes realizados no script estão devidamente identificados no arquivo. Eles começam a partir da linha 104. Adicionei comentários que considerei pertinentes em alguns trechos do código.
<br><br>

# Contribuições:
Contribuições são sempre bem-vindas! Para contribuir lembre-se sempre de adicionar testes unitários para as novas classes com 
a devida documentação.
<br><br>

# Links:
Não há links a serem adicionados.
<br><br>

# Licença:
Não se aplica.
