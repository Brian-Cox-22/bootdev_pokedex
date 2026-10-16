import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand } from "./state.js";
import { commandMapBack, commandMapForward } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

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
    catch: {
      name: "catch",
      description: "Attempts to catch the named pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "View the stats of the specified pokemon",
      callback: commandInspect,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
  };
}