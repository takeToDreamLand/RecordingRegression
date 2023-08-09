const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_sleepdialog.tmodel");

    //启动应用 "sleepdialog.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\sleepdialog.exe");

    //设置选中状态为 true
    await modelWin.getCheckBox("should_sleep?").toggleCheck(true); //此操作会等很久后再抛出错误

    //点击 "Yes"
    await modelWin.getButton("Yes").click();

    //点击 "关闭"
    await modelWin.getButton("关闭").click();

    //释放 "Group"
    await modelWin.getGeneric("Group").drop(479, 228);

    //按键 "\u0003"
    await modelWin.getEdit("终端_1，node_运行命令:_切换屏幕阅读器辅助功能模式以").pressKeys("\u0003");


})();