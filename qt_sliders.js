const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_sliders.tmodel");


    //启动Qt应用文件"sliders"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\sliders.exe");

    //等待Qt应用"sliders"
    await modelQt.getApplication("sliders").exists(10);

    //点击 "QSlider"
    await modelQt.getGeneric("QSlider").click(5, 18);

    //点击 "QSlider"
    await modelQt.getGeneric("QSlider").click(1, 16);

    //点击 "QScrollBar"
    await modelQt.getGeneric("QScrollBar").click(150, 3);

    //拖拽 "QScrollBar"
    await modelQt.getGeneric("QScrollBar").drag(128, 8);

    //释放 "QScrollBar"
    await modelQt.getGeneric("QScrollBar").drop(21, 4);

    //点击 "QDial"
    await modelQt.getGeneric("QDial").click(48, 45);

    //拖拽 "QDial"
    await modelQt.getGeneric("QDial").drag(55, 39);

    //释放 "QDial"
    await modelQt.getGeneric("QDial").drop(78, 87);

    //close Window "Sliders1"
    await modelQt.getWindow("Sliders1").close();

    //关闭Qt应用"sliders"
    await modelQt.getApplication("sliders").quit();


})();