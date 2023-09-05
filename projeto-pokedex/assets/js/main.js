console.log("teste");

// Indica a partir de qual ordem vai chamar os elementos
const offset = 0;

// Limita a quantidade de dados por página
const limit = 5;

// URL de onde estará puxando as informações
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

// A Função fetch() é responsável por fazer a Requisição dos dados externos( API )
// A Função then() é responsável por mostrar o que veio de resposta.
fetch(url).then(function (response) {
   // Mostra o que veio como resposta da requisição
   console.log(response);
});