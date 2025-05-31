import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Crack Language Support активировано!');

  const disposable = vscode.commands.registerCommand('crack.helloWorld', () => {
    vscode.window.showInformationMessage('Привет от языка Crack! 💻');
  });

  context.subscriptions.push(disposable);

  vscode.window.showInformationMessage('✅ Crack Language Support загружено');
}

export function deactivate() {
  console.log('Crack Language Support деактивировано');
} 