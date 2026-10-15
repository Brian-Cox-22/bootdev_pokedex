import { State } from "./state.js";

export async function startREPL(state: State) {
  state.readline.prompt();

  // listen for a newline
  state.readline.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      state.readline.prompt();
      return;
    }

    const commandName = words[0];

    const cmd = await state.commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      state.readline.prompt();
      return;
    }

    try {
      if (commandName === "explore"){
        await cmd.callback(state, words[1]);
      }
      else{
        await cmd.callback(state);
      }
    } catch (e) {
      // log any error
      console.log(e);
    }
    // make the prompt to the cli
    state.readline.prompt();
  });
}

export function cleanInput(input: string): string[] {
  // turn everything lowercase, remove any nasty spacing and split on spaces. We only care about the first word.
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
