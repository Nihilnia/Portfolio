var pokemonz = `
<div class="container">
  <div class="row">
    <div class="col">
      <img src='Pokemons/Pokemon_0.png' id = 'pokemon_0' class='poke' onClick="selectedPokemon(this.id)"/>
    </div>
    <div class="col">
      <img src='Pokemons/Pokemon_1.png' id = 'pokemon_1' class='poke' onClick="selectedPokemon(this.id)"/>
    </div>
    <div class="col">
      <img src='Pokemons/Pokemon_2.png' id = 'pokemon_2' class='poke' onClick="selectedPokemon(this.id)"/>
    </div>
  </div>
</div>`;

var pointz = -1;
function selectedPokemon(f) {
  var pokedex = $(`#${f}`);

  switch (pokedex.attr('id')) {
    case "Pokemon_0":
      console.log("Pikachu selected.");
      break;

    case "Pokemon_1":
      console.log("Squirtel selected");
      break;

    case "Pokemon_2":
      console.log("Idk this pokemons' s name (fat one) selected");
  };

  pointz++;
  // console.log(pokedex);

  //Stage placement
  var divWelcome = $('#divWelcome');
  divWelcome.html(stage);


  // $().insertAfter($("#divWelcome"));

  // var terminal = `
  // <div id='terminal' style='color: aliceblue; position: relative;'>Terminal
  // </div>
  // `;
  // $('body').append(terminal);

  //Placement
  function randomNumb(x) {
    return Math.floor(Math.random() * x);
  };
  var getRND = randomNumb(21);

  var getLocation = $(`#coordinate_${getRND}`);


  console.log("%ccurrentLocation:", "color: orange", getLocation.attr('id'));

  //Pokemonke spawning random.

  getLocation.html(pokedex);


  pokedex.click(() => {

    pokedex.html("");

  })


  //Terminal rain
  var getTerminal = $('#terminal');
  getTerminal.append(`<p style = 'color: green;'>Current location: ${getLocation.attr('id')}</p>`)
  getTerminal.append(`<span style = 'color: orange;'>Points: ${pointz}<span>`)



};