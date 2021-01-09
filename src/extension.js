const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "danjuanjijin.helloWorld",
    function (uri) {
      vscode.window.showInformationMessage(
        `当前文件(夹)路径是：${uri ? uri.path : "空"}`
      );
    }
  );

  context.subscriptions.push(disposable);
}
function deactivate() {
  console.log("您的扩展已被释放！");
}

module.exports = {
  activate,
  deactivate,
};
