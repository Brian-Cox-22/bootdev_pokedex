import { Location } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandExplore(state: State, location: string) {
    // This is the first argument that uses more than the first word in the command line,
    // having some issues with that
    // Can't test the actual return part of this until I sort that out; looks like I might need to edit my main repl somewhat

    const location_data = await state.pokeAPI.fetchLocation(location); // this has the caching built in
    // Parse the Pokemon's names from the response and display them to the user.
    console.log(`Exploring ${location}...`)
    if (location_data.pokemon_encounters){
      console.log("Found Pokemon")
    }
    for (const loc of location_data.pokemon_encounters) {
    console.log(`- ${loc.pokemon.name}`);
  }
}