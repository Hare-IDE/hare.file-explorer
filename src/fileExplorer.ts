import React,{ useState } from "react";
import {TreeItem, TreeItemState, type ExtensionContext, type TreeViewProvider} from "@hare-ide/hare"

interface entry {
	contextValue: string,
	fileName: string,
	url: string,
}

interface entryRust {
	context_value: string,
	file_name: string,
	url: string,
}

export class Explorer implements TreeViewProvider<entry> {
  context: ExtensionContext;

	constructor(context: ExtensionContext) {
    this.context = context
	}

	async getChildren(element?: entry | undefined) {
		var childs: entry[] = [];
		var url: string = "/home/javier";

		if (element !== undefined) {
			url = element.url;
		}

		await this.context.readDir(url).then((content:entryRust[]) => {
			content.forEach((element:entryRust) => {
				childs.push({
					contextValue: element.context_value,
					fileName: element.file_name,
					url: element.url,
				})
			});
		})

		if (childs.length === 0) {
			return undefined
		}

		return childs;
	}

	async getTreeItem(element: entry) {
		const treeItem: TreeItem = new TreeItem(element.fileName, (element.contextValue === "file") ? TreeItemState.None : TreeItemState.Collapsed);
		treeItem.contextValue = element.contextValue;
		treeItem.id = element.url;
		treeItem.tooltip = element.url;
		// treeItem.description = element.contextValue;
		if (treeItem.contextValue === "file") {
			treeItem.iconPath = await this.context.getAbsolutePath("media/file.svg");
		} else {
			treeItem.iconPath = await this.context.getAbsolutePath("media/folder.svg");
		}

		if (treeItem.contextValue === "file") {
			treeItem.command = "hare.open";
		}

		return treeItem;
	}
}