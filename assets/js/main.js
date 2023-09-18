// Pega o conteúdo html com o ID cards-pokemons e armazena na variável cards
let cards = document.getElementById('cards-pokemons')

// Pega o conteúdo html com o ID cards-pokemons e armazena na variável cards
let btnPaginacao = document.getElementById('btnPaginacao')


// Função para criar dinamicamente os cards dos pokemons através da API
function convertePokemonEmHTML(pokemon) {
   // cria um objeto vazio
   let poke = {}

   // Armazena os dados dentro do objeto
   poke.nome = pokemon.name
   poke.id = pokemon.id
   poke.imagem = pokemon.sprites.other.dream_world.front_default
   poke.tipo1 = pokemon.types[0]['type']['name']

   if (!pokemon.types[1]) {
      poke.tipo2 = ''
   } else {
      poke.tipo2 = pokemon.types[1]['type']['name']
   }


   return `
      <div class="pokemon ${poke.tipo1}">
         <span class="numero"> ${poke.id}  </span>
         <span class="titulo"> ${poke.nome} </span>
         <div class="box">
            <ul class="pokemon-textos">
               <li class="tipo ${poke.tipo1}">${poke.tipo1}</li>
               <li class="tipo ${poke.tipo2}">${poke.tipo2}</li>
            </ul>
            <img src="${poke.imagem}" alt="Alt">
         </div>
      </div>`
}


// Cria a função de colocar mais pokemons na tela.
btnPaginacao.addEventListener("click", () => {

   offset += limit
   // fetchPokemonLista(offset, limit);
   fetchPokemonLista();
})