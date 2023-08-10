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
    await modelQt.getGeneric("QSlider").click(152, 15);

    //点击 "QSlider"
    await modelQt.getGeneric("QSlider").click(156, 14);

    //点击 "QSlider"
    await modelQt.getGeneric("QSlider").click(156, 14);
    /* Qslider的拖拽操作没有录到 */

    //close Window "Sliders1"
    await modelQt.getWindow("Sliders1").close();

    //关闭Qt应用"sliders"
    await modelQt.getApplication("sliders").quit();


})();