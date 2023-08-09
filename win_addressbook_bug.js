const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_addressbook.tmodel");


    //启动应用 "addressbook.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\addressbook.exe");

    //切换到标签页 "ABC"
    await modelWin.getTab("Address_Book1").activate("ABC"); //Error: Can't get automation pattern by a automation element

    //点击 "关闭"
    await modelWin.getButton("关闭").click();

    //释放 "Group"
    await modelWin.getGeneric("Group").drop(488, 231);

    //按键 "\u0003"
    await modelWin.getEdit("终端_1，node_运行命令:_切换屏幕阅读器辅助功能模式以").pressKeys("\u0003");


})();