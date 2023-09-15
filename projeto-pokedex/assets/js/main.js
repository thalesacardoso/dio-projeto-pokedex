// Pega o conteúdo html com o ID cards-pokemons e armazena na variável cards
let cards = document.getElementById('cards-pokemons')
let btnPaginacao = document.getElementById('btnPaginacao')


// Função para criar dinamicamente os cards dos pokemons através da API
function convertePokemonEmHTML(pokemon) {
   return `
      <div class="pokemon ${pokemon[3]}">
         <span class="numero">#${pokemon[0]}</span>
         <span class="titulo">${pokemon[1]}</span>
         <div class="box">
            <ul class="pokemon-textos">
               <li class="tipo ${pokemon[3]}">${pokemon[3]}</li>
               <li class="tipo ${pokemon[4]}">${pokemon[4]}</li>
            </ul>
            <img src="${pokemon[2]}" alt="${pokemon[1]} ">
         </div>
      </div>`
}


// Chamada da função da API
fetchPokemon(1,15);


// Chama a função de paginação
function aumentarPokemons() {
   fetchPokemon(16,30);
}


btnPaginacao.addEventListener("click", () => {
   aumentarPokemons();
} )