const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_dockwidgets.tmodel");


    //启动应用 "dockwidgets.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\dockwidgets.exe");

    //双击 "100"
    await modelWin.getDataItem("100").dblClick(59, 11);

    //按键 "001"
    await modelWin.getWindow("Dock_Widgets").pressKeys("001");

    //点击 "BartonZora"
    await modelWin.getDataItem("BartonZora").click(29, 18);

    //点击 "BartonZora"
    await modelWin.getDataItem("BartonZora").click(29, 18);

    //点击 "BartonZora"
    await modelWin.getDataItem("BartonZora").click(29, 18);

    //双击 "BartonZora"
    await modelWin.getDataItem("BartonZora").dblClick(29, 18);

    //按键 "Will{ENTER}"
    await modelWin.getWindow("Dock_Widgets").pressKeys("Will{ENTER}");

    //点击 "M"
    await modelWin.getDataItem("M").click(44, 7);

    //双击 "M"
    await modelWin.getDataItem("M").dblClick(44, 7);

    //按键 "{BS}M"
    await modelWin.getWindow("Dock_Widgets").pressKeys("{BS}M");

    //双击 "34"
    await modelWin.getDataItem("34").dblClick(27, 11);

    //按键 "100"
    await modelWin.getWindow("Dock_Widgets").pressKeys("100");

    //拖拽 "Position"
    await modelWin.getGeneric("Position").drag(180, 2);

    //释放 "ChaucerBeck"
    await modelWin.getDataItem("ChaucerBeck").drop(26, 19);

    //切换到标签页 "2nd Table"
    await modelWin.getTab("1st_Table").activate("2nd Table");

    //点击 "--Status--"
    await modelWin.getGeneric("--Status--").click(173, 1);

    //点击 "Button"
    await modelWin.getButton("Button").click();

    //释放 "Button1"
    await modelWin.getButton("Button1").drop();

    //点击 "Edit"
    await modelWin.getMenuItem("Edit").click(14, 4);

    //点击 "Undo"
    await modelWin.getMenuItem("Undo").click(44, 8);

    //按键 "\u0003"
    await modelWin.getEdit("终端_1，node_运行命令:_切换屏幕阅读器辅助功能模式以").pressKeys("\u0003");


})();