"use strict";

// gets API data for a random Pokemon
function getRandomPokemon() {
  const randomPokeID = Math.floor(Math.random() * 899);
  const url = "https://pokeapi.co/api/v2/pokemon/" + randomPokeID;

  const pokeName = document.querySelector("#pokemon-name");
  const frontSprite = document.querySelector("#front-sprite");
  const hitPoints = document.querySelector("#hit-points");
  const ability1 = document.querySelector("#ability-1");
  const ability2 = document.querySelector("#ability-2");
  const icons = document.querySelectorAll(".icon");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(`Pokemon promise data: `, data);
      pokeName.innerText = data.name;
      frontSprite.src = data.sprites.front_default;
      // update all icon src, alt based on
      icons.forEach((icon) => {
        icon.classList = "icon " + data.types[0]?.type?.name;
        icon.src = "./assets/icons/" + data.types[0]?.type?.name + ".svg";
        icon.removeAttribute("hidden");
      });
      hitPoints.innerText = data.stats[0]?.base_stat + " HP";

      // make HTML template for the ability section
      // use insertAdjacentHTML to create correct # of abilities
      //
      ability1.innerText = data.abilities[0]?.ability?.name;
      // if no ability 2, need option to
      ability2.innerText = data.abilities[1]?.ability?.name;
    })
    .catch((err) => {
      console.log(`Error ${err}`);
    });
}

document
  .querySelector("#choose-random")
  .addEventListener("click", getRandomPokemon);
