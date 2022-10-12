"use strict";

// gets API data for a random Pokemon
function getRandomPokemon() {
  const randomPokeID = Math.floor(Math.random() * 899);
  const url = "https://pokeapi.co/api/v2/pokemon/" + randomPokeID;

  const pokeName = document.querySelector("#pokemon-name");
  const frontSprite = document.querySelector("#front-sprite");
  const ability1 = document.querySelector("#ability-1");
  const ability2 = document.querySelector("#ability-2");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(`Pokemon promise data: `, data);
      pokeName.innerText = data.name;
      frontSprite.src = data.sprites.front_default;

      ability1.innerText = data.abilities[0]?.ability?.name;
      ability2.innerText = data.abilities[1]?.ability?.name;
    })
    .catch((err) => {
      console.log(`Error ${err}`);
    });
}

document
  .querySelector("#choose-random")
  .addEventListener("click", getRandomPokemon);
