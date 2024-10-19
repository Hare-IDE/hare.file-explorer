import { Explorer } from "./fileExplorer";
export function activate(context) {
    context.window.registerTreeViewProvider("fileExplorer", new Explorer(context));
}
// this method is called when your extension is deactivated
export function deactivate() { }
//# sourceMappingURL=extension.js.map