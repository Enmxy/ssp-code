// Script to disable GitHub Copilot

// This script works by modifying the settings of the VSCode editor to disable the Copilot extension
// Use with caution as it will change the built-in behavior of VSCode.

const vscode = require('vscode');

function deactivateCopilot() {
    const settings = vscode.workspace.getConfiguration();
    settings.update('github.copilot.enable', false, vscode.ConfigurationTarget.Global);
    console.log('GitHub Copilot extension has been disabled.');
}

deactivateCopilot();