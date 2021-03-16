// Voorbeeld Pomekons Names:
// igglybuff  politoed   nidoran-m   skiploom   kabutops 


const mainTwo = document.querySelector('.main_two');
const errortext = document.querySelector('.error_text').classList.add('hidden');
let ranDomNum = Math.floor((Math.random() *200) +1);
 
//!!!!! =====  API CONNECTION ===== !!!!!// 
const poKeMonsDaTa = async (id) => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    const respons = await fetch(baseUrl);
    const result = await respons.json();
    console.log(result)
    return result;
  } catch (error) {
    return (error.status == '404')
    ? document.querySelector('.error_text').classList.add('show') 
    : document.querySelector('.error_text').classList.remove('hidden');
    }
};
poKeMonsDaTa(ranDomNum)
 //export { daTaPokemons }; 
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
  anotherPokemonButton.innerHTML = 'Another';
  let outPut = '';
  const mainTwo = document.querySelector('.main_two');
  const showMeAPoKeMon = async () => {
    const poKeMon = await poKeMonsDaTa(ranDomNum);
    let poKeMonImage = poKeMon.sprites.front_default;
    let poKeMonName = poKeMon.name;
    let poKeMonWeight = poKeMon.weight;
    let poKeMonHeight = poKeMon.height;
    let poKeMonAbilities = poKeMon.abilities[1].ability.name;
    let poKeMonAbilitiesUrl = poKeMon.abilities[1].ability.url;
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







 
