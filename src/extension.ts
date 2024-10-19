import { activate2 } from "./a";

export function activate(context:any) {
  activate2()
  
  context.readFile("/home/javier/Code/Tests/package.json").then((new_extensions:any) => {
        console.log("AAAAAAAAAAAAAAAAAAAAA")
  })
}

// this method is called when your extension is deactivated
export function deactivate() {}