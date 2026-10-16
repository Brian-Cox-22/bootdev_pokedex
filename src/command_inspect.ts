import { State } from "./state.js";

export async function commandInspect(state: State, pokemon: string){
    const pokedata = state.caughtPokemon[pokemon];
    if (!pokedata){
        console.log(`You have not yet caught a ${pokemon}!`);
        return;
    }
    console.log(`name: ${pokedata.name}`);
    console.log(`height: ${pokedata.height}`);
    console.log(`weight: ${pokedata.weight}`);

    // gotta fix these now

    //console.log(`stats: ${pokedata.stats}`);
    console.log("Stats:")
    for (let stat of pokedata.stats){
        console.log(`    -${stat.stat.name}: ${stat.base_stat}`);
    }

    //console.log(`Types: ${pokedata.types}`);
    console.log("Types:")
    for (let type of pokedata.types){
        console.log(`    -${type.type.name}`);
    }
}