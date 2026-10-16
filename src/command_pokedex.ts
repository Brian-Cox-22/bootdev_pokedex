import { State } from "./state.js";


export async function commandPokedex(state: State) {
    console.log("Your pokedex:");
    for (const pokemon in state.caughtPokemon){
        console.log(`    -${pokemon}`);
    }
}