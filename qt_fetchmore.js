const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_fetchmore.tmodel");


    //启动Qt应用文件"fetchmore"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\fetchmore.exe");

    //等待Qt应用"fetchmore"
    await modelQt.getApplication("fetchmore").exists(10);

    //选择列表项 "."
    await modelQt.getList("QListView").select(".");

    //选择列表项 ".."
    await modelQt.getList("QListView").select("..");

    //点击 "QLineEdit"
    await modelQt.getEdit("QLineEdit").click(40, 14);

    //设置控件值为"C:/Windows"
    await modelQt.getEdit("QLineEdit").set("C:/Windows");

    //点击 "QScrollBar"
    await modelQt.getGeneric("QScrollBar").click(4, 28);

    //选择列表项 "notepad.exe"
    await modelQt.getList("QListView").select("notepad.exe");

    //close Window "Fetch_More_Example"
    await modelQt.getWindow("Fetch_More_Example").close();

    //关闭Qt应用"fetchmore"
    await modelQt.getApplication("fetchmore").quit();


})();