const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_positionpanel.tmodel");


    //启动应用 "positionpanel.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\positionpanel.exe");

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(93, 98);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(83, 171);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(198, 192);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(264, 70);

    //拖拽 "QWidget"
    await modelWin.getGeneric("QWidget").drag(263, 69);

    //释放 "QWidget"
    await modelWin.getGeneric("QWidget").drop(306, 47);

    //拖拽 "QWidget"
    await modelWin.getGeneric("QWidget").drag(195, 195);

    //释放 "QWidget"
    await modelWin.getGeneric("QWidget").drop(233, 293);

    //点击 "GraphicsView"
    await modelWin.getGeneric("GraphicsView").click(7, 258);

    //选中项目 "Draw_Circle"
    await modelWin.getRadioButton("Draw_Circle").check();

    //选中项目 "Draw_Combination"
    await modelWin.getRadioButton("Draw_Combination").check();

    //点击 "Draw_Combination"
    await modelWin.getRadioButton("Draw_Combination").click(116, 3);

    //释放 "positionpanel"
    await modelWin.getWindow("positionpanel").drop(382, 519);

    //点击 "positionpanel"
    await modelWin.getWindow("positionpanel").click(384, 518);

    //选中项目 "Draw_Icon"
    await modelWin.getRadioButton("Draw_Icon").check();

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(187, 410);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(186, 316);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(137, 335);

    //选中项目 "Draw_Combination"
    await modelWin.getRadioButton("Draw_Combination").check();

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(360, 319);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(328, 209);

    //点击 "positionpanel"
    await modelWin.getWindow("positionpanel").click(184, 515);

    //选中项目 "Draw_Circle"
    await modelWin.getRadioButton("Draw_Circle").check();

    //拖拽 "QWidget"
    await modelWin.getGeneric("QWidget").drag(90, 409);

    //释放 "QWidget"
    await modelWin.getGeneric("QWidget").drop(90, 405);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(140, 289);

    //点击 "QWidget"
    await modelWin.getGeneric("QWidget").click(251, 201);

    //设置选中状态为 true
    await modelWin.getCheckBox("Use_QGraphicsObject_replace_QG").toggleCheck(true);

    //点击 "关闭"
    await modelWin.getButton("关闭").click();

    //释放 "Group"
    await modelWin.getGeneric("Group").drop(667, 234);

    //按键 "\u0003"
    await modelWin.getEdit("终端_1，node_运行命令:_切换屏幕阅读器辅助功能模式以").pressKeys("\u0003");


})();