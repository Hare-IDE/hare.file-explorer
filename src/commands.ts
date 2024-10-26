import type { ExtensionContext } from "@hare-ide/hare";

export function renameFile (...args:any) {
  const context = args[0] as ExtensionContext;
  const selected: string[] = context.context.selected;

  // Only rename 1 at a time
  if (selected.length === 1) {
    console.log("Rename File:",selected[0]);
  }

  context.commands.executeBackendCommand("fileExplorer.renameFolder", JSON.stringify({data :"hola"})).then((content:string) => {
    console.log(content);
  })
}