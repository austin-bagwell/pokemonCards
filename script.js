"use strict";

// gets API data for a random Pokemon

function getRandomPokemon() {
  const randomPokeID = Math.floor(Math.random() * 899);
  const url = "https://pokeapi.co/api/v2/pokemon/" + randomPokeID;

  const pokeName = document.querySelector("#pokemon-name");
  // const abilityList = document.querySelector(".ability-list");
  const frontSprite = document.querySelector("#front-sprite");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(`Pokemon promise data: `, data);
      pokeName.innerText = data.name;
      frontSprite.src = data.sprites.front_default;
      // works only for abilities[0]
      // let firstAbility = data.abilities[0].ability.name;
      // let allAbilities = [];
      // data.abilities.forEach((ability) => allAbilities.push(ability));
      // console.log(`First Ability: ${firstAbility}`);
      // console.log(`All ability objects? ${allAbilities}`);
    })
    .catch((err) => {
      console.log(`Error ${err}`);
    });
}

document
  .querySelector("#choose-random")
  .addEventListener("click", getRandomPokemon);
