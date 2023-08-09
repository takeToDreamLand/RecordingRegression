const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_dirview.tmodel");


    //启动Qt应用文件"dirview"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\dirview.exe");

    //等待Qt应用"dirview"
    await modelQt.getApplication("dirview").exists(10);

    //展开 TreeItem "W_(C:)"
    await modelQt.getTreeItem("W_(C:)").expand();

    //折叠 TreeItem "W_(C:)"
    await modelQt.getTreeItem("W_(C:)").collapse();

    //双击 "W_(C:)"
    await modelQt.getTreeItem("W_(C:)").dblClick();

    //展开 TreeItem "W_(C:)"
    await modelQt.getTreeItem("W_(C:)").expand();

    //展开 TreeItem "Windows"
    await modelQt.getTreeItem("Windows").expand();

    //折叠 TreeItem "Windows"
    await modelQt.getTreeItem("Windows").collapse();

    //双击 "Windows"
    await modelQt.getTreeItem("Windows").dblClick();

    //展开 TreeItem "Windows"
    await modelQt.getTreeItem("Windows").expand();

    //拖拽 "Name"
    await modelQt.getHeaderItem("Name").drag(98, 9);

    //释放 "Name"
    await modelQt.getHeaderItem("Name").drop(148, 9);

    //点击 "notepad.exe"
    await modelQt.getTreeItem("notepad.exe").click();

    //拖拽 "QScrollBar"
    await modelQt.getGeneric("QScrollBar").drag(11, 79);

    //释放 "QScrollBar"
    await modelQt.getGeneric("QScrollBar").drop(3, 107);

    //close Window "Dir_View"
    await modelQt.getWindow("Dir_View").close();

    //关闭Qt应用"dirview"
    await modelQt.getApplication("dirview").quit();


})();