// The button for random Pokemons is not working correct.
// You can get only once a Pokemon, you have to refresh everytime.
// I couldn't fixed it, so i made a Searchbar.
// You can find the names for testing in the Console.

// Opmerkingen: ik ben vergeten om eerst mobiel first te werken.
// Jammer dan, laat maar lekker gaan, ik moet verder, komt wel goed met de volgende opdracht :-)
// Die JavaScript is mijn grootse uitdaging.
// Volgende opdracht ga ik weer SASS gebruiken.

// Ik weet dat dit veel korter kan, Ik herhaal een hele blockcode.
// Komt ook wel goed de volgende keer :-)

// ===I wanna have a list of all the Pokemon names in the console ===//
const listPoKeMonNamesOnConsole = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const getPoKemonNames = await fetch(url);
  const pokeMonNames = await getPoKemonNames.json();
  console.log(pokeMonNames);
};
listPoKeMonNamesOnConsole();
// === End I wanna have a list of all the Pokemon names in the console ===//

const mainTwo = document.querySelector('.main_two');
const errortext = document.querySelector('.error_text').classList.add('hidden');
let ranDomNum = Math.floor((Math.random() *200) +1);
 
//!!!!! =====  API CONNECTION ===== !!!!!// 
const poKeMonsDaTa = async (id) => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const respons = await fetch(baseUrl);
    const result = await respons.json();
    return result;
  } catch (error) {
    return (error.status == '404')
    ? document.querySelector('.error_text').classList.add('show') 
    : document.querySelector('.error_text').classList.remove('hidden');
    }
};
poKeMonsDaTa(ranDomNum)
 //export { poKeMonsDaTa }; 
//!!!!! ===== End API CONNECTION ===== !!!!!// 

// ===== Click on the Blauwe Round Button ===== //
const bleuRoundButton = document.querySelector('.bleu_round_button_image');
bleuRoundButton.addEventListener('click', e => {
  document.querySelector('.title').innerHTML = 'Find your Pokemon';
  document.querySelector('.click_on_bleu_button').classList.add('hidden');
  document.querySelector('.main').classList.add('hidden');
  document.querySelector('.search_box').classList.add('show');
  document.querySelector('.input_field').classList.add('show');
  document.querySelector('.button_search').classList.add('show');
});
// ===== End click on the Blauwe Round Button ===== //

// ===== Show Searched Input Pokemon ===== //
const searchButton = document.querySelector('.button_search');
searchButton.addEventListener('click', (e) => {
  document.querySelector('.error_text').classList.add('hidden');
  const inPutField = document.querySelector('.input_field').value;
  const mainTwo = document.querySelector('.main_two');
  outPut = '';
  const showMeInPutPoKeMons = async () => {
    const poKeMon = await poKeMonsDaTa(inPutField);
    let poKeMonImage = poKeMon.sprites.front_default;
    let poKeMonName = poKeMon.name;
    let poKeMonWeight = poKeMon.weight;
    let poKeMonHeight = poKeMon.height;
    let poKeMonAbilities = poKeMon.abilities[1].ability.name;
    outPut = `
              <div class="card_pokemon_box">
                <div class="card_pokemon">
                    <img class"card_image_pokemon" src="${poKeMonImage}" alt="">
                    <p class="card_pokemon_name" >Name: ${poKeMonName}</p>      
                </div> 
                <div class="card_pokemon_info">
                    <div class="card_pokemon_weight">Weight: ${poKeMonWeight} Pounds</div>
                    <div class="card_pokemon_height">Heigth: ${poKeMonHeight} Cm</div>
                    <p class="card_pokemon_ability_text">Ability: ${poKeMonAbilities}</p>
                    <div ></div>
                </div> 
              </div>             
    `;
    mainTwo.innerHTML = outPut;
  };
  showMeInPutPoKeMons(inPutField);
});
// ===== End Show Searched Input Pokemon ===== //

// ===== Show Random Pokemon ===== //
const anotherPokemonButton = document.querySelector('.another_one_button');
anotherPokemonButton.addEventListener('click', (e) => {
  let outPut = '';
  const mainTwo = document.querySelector('.main_two');
  const showMeAPoKeMon = async () => {
    const poKeMon = await poKeMonsDaTa(ranDomNum);
    let poKeMonImage = poKeMon.sprites.front_default;
    let poKeMonName = poKeMon.name;
    let poKeMonWeight = poKeMon.weight;
    let poKeMonHeight = poKeMon.height;
    let poKeMonAbilities = poKeMon.abilities[1].ability.name;
    outPut = `
              <div class="card_pokemon_box">
                <div class="card_pokemon">
                    <img class"card_image_pokemon" src="${poKeMonImage}" alt="">
                    <p class="card_pokemon_name" >Name: ${poKeMonName}</p>      
                </div> 
                <div class="card_pokemon_info">
                    <div class="card_pokemon_weight">Weight: ${poKeMonWeight} Pounds</div>
                    <div class="card_pokemon_height">Heigth: ${poKeMonHeight} Cm</div>
                    <p class="card_pokemon_ability_text">Ability: ${poKeMonAbilities}</p>
                    <div ></div>
                </div> 
              </div>             
    `;
    mainTwo.innerHTML = outPut;
  };
  showMeAPoKeMon(ranDomNum)
});
// ===== End Show Random Pokemon ===== //







 
