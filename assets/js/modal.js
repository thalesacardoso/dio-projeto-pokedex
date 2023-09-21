let modalPokemonHTML = document.getElementById('modal')


// Faz a requisição do pokemon pelo ID
async function modalChamaPokemon(id = 10) {
   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

   await fetch(url)
      .then(response => response.json())
      .then(dados => {
         modalPokemonHTML.innerHTML = modalPokemon(dados)
      })
}

// função HTML do modal
function modalPokemon(pokemon) {

   // cria um objeto vazio
   let poke = {}

   // Armazena os dados dentro do objeto
   poke.nome = pokemon.name
   poke.id = pokemon.id
   poke.imagem = pokemon.sprites.other.dream_world.front_default

   poke.altura = pokemon.height / 10
   poke.peso = pokemon.weight / 10
   poke.tipo1 = pokemon.types[0]['type']['name']

   if (!pokemon.types[1]) {
      poke.tipo2 = ''
   } else {
      poke.tipo2 = pokemon.types[1]['type']['name']
   }

   poke.hp = pokemon.stats[0].base_stat
   poke.ataque = pokemon.stats[1].base_stat
   poke.defesa = pokemon.stats[2].base_stat
   poke.espAtaque = pokemon.stats[3].base_stat
   poke.espDefesa = pokemon.stats[4].base_stat
   poke.velocidade = pokemon.stats[5].base_stat

   // retorna o HTML com os dados da API incluso
   return `
   <div class="content ${poke.tipo1}">
   <div class="topo">
      <span> <a href="#" onclick="mostrarModal()"><i class="bi bi-arrow-left"></i> </a></span>
      <span class="titulo"> ${poke.nome} </span>
      <span class="numero"> ${poke.id} </span>
   </div>

   <div class="imagem">
      <img src="${poke.imagem}" alt="Alt">
   </div>

   <div class="informacoes">
      <p>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio et, est aliquid
         exercitationem saepe sint.
      </p>

      <div class="info_abas">
         <button type="button" class="btn1" >Perfil</button>
         <button type="button" class="btn2 ativo" >Habilidades</button>
      </div>

      <div id="info_pokemon"><!-- Inicio informaç Perfil -->
         <div class="lista_perfil"> <!-- Inicio Lista Perfil -->
            <div>
               <h4>Altura</h4>
               <span>${poke.altura} m</span>
            </div>

            <div>
               <h4>Peso</h4>
               <span>${poke.peso} kg</span>
            </div>

            <div>
               <h4>Tipo</h4>
               <span class="tipo ${poke.tipo1}">${poke.tipo1}</span>
               <span class="tipo ${poke.tipo2}">${poke.tipo2}</span>
            </div>
         </div><!-- Fim Lista Perfil -->

         <div class="lista_status ativo"> <!-- Inicio Lista STATUS -->
            <div class="status">
               <h4>HP</h4>
               <span>${poke.hp}</span>
               <div class="barra">
                  <div class="progress-bar fire" style="width: ${poke.hp / 2}%"> </div>
               </div>
            </div>

            <div class="status">
               <h4>Ataque</h4>
               <span>${poke.ataque}</span>
               <div class="barra">
                  <div class="progress-bar fire" style="width: ${poke.ataque / 2}%"> </div>
               </div>
            </div>

            <div class="status">
               <h4>Defesa</h4>
               <span>${poke.defesa}</span>
               <div class="barra">
                  <div class="progress-bar fire" style="width: ${poke.defesa / 2}%"> </div>
               </div>
            </div>

            <div class="status">
               <h4>Esp. Ataque</h4>
               <span>${poke.espAtaque}</span>
               <div class="barra">
                  <div class="progress-bar fire" style="width: ${poke.espAtaque / 2}%"> </div>
               </div>
            </div>

            <div class="status">
               <h4>Esp. Defesa</h4>
               <span>${poke.espDefesa}</span>
               <div class="barra">
                  <div class="progress-bar fire" style="width: ${poke.espDefesa / 2}%"> </div>
               </div>
            </div>

            <div class="status">
               <h4>Velocidade</h4>
               <span>${poke.velocidade}</span>
               <div class="barra">
                  <div class="progress-bar fire" style="width: ${poke.velocidade / 2}%"> </div>
               </div>
            </div>
         </div><!-- Fim Lista STATUS -->
      </div>
   </div>
</div>`
}

modalChamaPokemon()