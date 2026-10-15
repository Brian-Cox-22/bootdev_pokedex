import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";
import { commandMapBack, commandMapForward } from "./command_map.js";
import { commandExplore } from "./command_explore.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
        name: "map",
        description: "Displays the next location in the Pokemon world",
        callback: commandMapForward,
    },
    mapb: {
        name: "mapb",
        description: "Displays the prior location in the Pokemon world",
        callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Displays information about the specified location",
      callback: commandExplore,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
  };
}