import type { ExtensionContext } from "@hare-ide/hare";
import { Explorer } from "./fileExplorer";
import { renameFile } from "./commands";

export function activate(context: ExtensionContext) {
  const explorer = new Explorer(context)
  context.window.registerTreeViewProvider("fileExplorer", explorer);
  context.commands.registerCommand("fileExplorer.renameFile", renameFile, context);
}

// this method is called when your extension is deactivated
export function deactivate() {}