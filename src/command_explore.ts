import { Location } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandExplore(state: State, location: string) {

    const location_data = await state.pokeAPI.fetchLocation(location); // this has the caching built in
    // Parse the Pokemon's names from the response and display them to the user.
    console.log(`Exploring ${location}...`)
    if (location_data.pokemon_encounters){
      console.log("Found Pokemon")
    }
    for (const loc of location_data.pokemon_encounters) {
    console.log(`- ${loc.pokemon.name}`);
  }
  state.prevLocationsURL = `https://pokeapi.co/api/v2/location-area/${location}`;
}