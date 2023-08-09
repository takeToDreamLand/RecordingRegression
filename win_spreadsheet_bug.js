const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_spreadsheet.tmodel");


    //启动应用 "spreadsheet.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\spreadsheet.exe");

    //双击 "15/6/2006"
    await modelWin.getDataItem("15/6/2006").dblClick(83, 14);

    //点击 "15/6/2006"
    await modelWin.getDataItem("15/6/2006").click(87, 14);

    //点击 "30"
    await modelWin.getDataItem("30").click(11, 10);

    //释放 "301"
    // 录出来一个drop
    await modelWin.getDataItem("301").drop(11, 10);

    //点击 "关闭"
    await modelWin.getButton("关闭").click();

})();