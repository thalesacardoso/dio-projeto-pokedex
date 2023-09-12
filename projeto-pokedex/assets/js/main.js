// Pega o conteúdo html com o ID cards-pokemons e armazena na variável cards
let cards = document.getElementById('cards-pokemons')

// Função para criar dinamicamente os cards dos pokemons através da API
function convertePokemonEmHTML(pokemon) {
   return `
      <div class="pokemon">
         <span class="numero">#001</span>
         <span class="titulo">${pokemon.name}</span>
         <div class="box">
            <ul class="pokemon-textos">
               <li class="tipo">Grass</li>
               <li class="tipo">Poison</li>
            </ul>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name} ">
         </div>
      </div>`
}