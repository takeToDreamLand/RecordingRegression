const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_appchooser.tmodel");


    //启动Qt应用文件"appchooser"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\appchooser.exe");

    //等待Qt应用"appchooser"
    await modelQt.getApplication("appchooser").exists(10);

    //moveToScene GraphicsView "QGraphicsView"
    // await modelQt.getGraphicsView("QGraphicsView").moveToScene(252, 250);

    /* 点出去了 */
    /*  由于点击后图片大小和位置会变，导致最后脚本生成时的参考不正确 */
    //点击 "p3"
    await modelQt.getGraphicsItem("p3").click(83, 81);

    //close Window "QGraphicsView"
    await modelQt.getWindow("QGraphicsView").close();

    //关闭Qt应用"appchooser"
    await modelQt.getApplication("appchooser").quit();
})();