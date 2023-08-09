const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_sliders.tmodel");


    //启动Qt应用文件"sliders"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\sliders.exe");

    //选择列表项 "Vertical slider-like widgets"
    // select选中之后应用右边没有变成 Vertical导致后面操作失败
    await modelQt.getComboBox("QComboBox").select("Vertical slider-like widgets");

    //close Window "Sliders1"
    await modelQt.getWindow("Sliders1").close();

    //关闭Qt应用"sliders"
    await modelQt.getApplication("sliders").quit();


})();