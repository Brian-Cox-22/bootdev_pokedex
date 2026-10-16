import { commandExplore } from "./command_explore.js";
import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];

  // adding functionality here different from boot.dev version:
  // I only want you to be able to catch pokemon that are in the same area as you
  
  
  // grabbing the pokemon (makes sure it's in the cache)
  //console.log(state.prevLocationsURL);


  // now check which pokemon are in the area around the explored region
  if (state.prevLocationsURL === ""){
    console.log("Explore to find some pokemon!");
    return;
  }

  const pokemon_around = await state.pokeAPI.pokemonAround(state.prevLocationsURL)
  //console.log(pokemon_around);
  if (!pokemon_around.includes(name)){
    console.log("That pokemon isn't around you!");
    return;
  }

  const pokemon = await state.pokeAPI.fetchPokemon(name);

  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  const res = Math.floor(Math.random() * pokemon.base_experience);
  if (res > 40) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }

  console.log(`${pokemon.name} was caught!`);
  console.log("You may now inspect it with the inspect command.");
  state.caughtPokemon[pokemon.name] = pokemon;
}