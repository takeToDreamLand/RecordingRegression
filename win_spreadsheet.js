const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_spreadsheet.tmodel");


    //启动应用 "spreadsheet.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\spreadsheet.exe");

    //双击 "AirportBus"
    await modelWin.getDataItem("AirportBus").dblClick(60, 6);

    //按键 "Beats{ENTER}"
    await modelWin.getWindow("Spreadsheet").pressKeys("Beats{ENTER}");

    //点击 "15/6/2006"
    await modelWin.getDataItem("15/6/2006").click(44, 14);

    //双击 "15/6/2006"
    await modelWin.getDataItem("15/6/2006").dblClick(44, 14);

    //点击 "15/6/2006"
    await modelWin.getDataItem("15/6/2006").click(89, 12);

    //点击 "30"
    await modelWin.getDataItem("30").click(17, 7);

    //释放 "301"
    // await modelWin.getDataItem("301").drop(17, 7);

    //双击 "150"
    await modelWin.getDataItem("150").dblClick(54, 27);

    //按键 "1700"
    await modelWin.getWindow("Spreadsheet").pressKeys("1700");

    //点击 "NOK"
    await modelWin.getDataItem("NOK").click(45, 19);

    //双击 "NOK"
    await modelWin.getDataItem("NOK").dblClick(45, 19);

    //按键 "{BS}USD"
    await modelWin.getWindow("Spreadsheet").pressKeys("{BS}USD");

    //双击 "1"
    await modelWin.getDataItem("1").dblClick(50, 20);

    //双击 "1"
    await modelWin.getDataItem("1").dblClick(50, 20);

    //按键 "2"
    await modelWin.getWindow("Spreadsheet").pressKeys("2");

    //点击 "1700"
    await modelWin.getDataItem("1700").click(28, 19);

    //释放 "3400"
    await modelWin.getDataItem("3400").drop(28, 19);

    //点击 "Cell"
    await modelWin.getMenuItem("Cell").click(22, 10);

    //点击 "Add"
    await modelWin.getMenuItem("Add").click(104, 15);

    //点击 "OK"
    await modelWin.getButton("OK").click();

    //点击 "关闭"
    await modelWin.getButton("关闭").click();

    //按键 "\u0003"
    await modelWin.getEdit("终端_1，node_运行命令:_切换屏幕阅读器辅助功能模式以").pressKeys("\u0003");


})();