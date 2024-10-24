import { Explorer } from "./fileExplorer.js";
import { renameFile } from "./commands.js";
export function activate(context) {
    const explorer = new Explorer(context);
    context.window.registerTreeViewProvider("fileExplorer", explorer);
    context.commands.registerCommand("fileExplorer.renameFile", renameFile, context);
}
// this method is called when your extension is deactivated
export function deactivate() { }
//# sourceMappingURL=extension.js.map