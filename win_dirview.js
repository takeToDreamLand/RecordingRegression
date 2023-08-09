const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_dirview.tmodel");


    //启动应用 "dirview.exe"
    await Util.launchProcess("C:\\Users\\Will\\Desktop\\CukeTest\\bin\\dirview.exe");

    //点击 "Tree"
    await modelWin.getTree("Tree").click(14, 34);

    //点击 "Tree"
    await modelWin.getTree("Tree").click(14, 34);

    //点击 "Tree"
    await modelWin.getTree("Tree").click(14, 34);

    //点击 "Tree"
    await modelWin.getTree("Tree").click(29, 169);

    //拖拽 "Position"
    await modelWin.getGeneric("Position").drag(2, 27);

    //释放 "Position"
    await modelWin.getGeneric("Position").drop(5, 48);

    //拖拽 "write.exe1"
    await modelWin.getTreeItem("write.exe1").drag(42, 4);

    //点击 "notepad.exe1"
    await modelWin.getTreeItem("notepad.exe1").click(42, 8);

    //点击 "关闭"
    await modelWin.getButton("关闭").click();


})();