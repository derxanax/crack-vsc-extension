"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Crack Language Support активировано!');
    const disposable = vscode.commands.registerCommand('crack.helloWorld', () => {
        vscode.window.showInformationMessage('Привет от языка Crack! 💻');
    });
    context.subscriptions.push(disposable);
    vscode.window.showInformationMessage('✅ Crack Language Support загружено');
}
exports.activate = activate;
function deactivate() {
    console.log('Crack Language Support деактивировано');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map