const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_sleepdialog.tmodel");


    //启动Qt应用文件"sleepdialog"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\sleepdialog.exe");

    //等待Qt应用"sleepdialog"
    await modelQt.getApplication("sleepdialog").exists(10);

    //增加 SpinBox "QSpinBox"
    await modelQt.getSpinBox("QSpinBox").increment();

    //点击 "Sleep"
    await modelQt.getButton("Sleep").click();

    //点击 "should_sleep?"
    await modelQt.getCheckBox("should_sleep?").click(7, 5);

    //点击 "Yes"
    await modelQt.getButton("Yes").click();

    //close Window "SleepBox"
    await modelQt.getWindow("SleepBox").close();

    //关闭Qt应用"sleepdialog"
    await modelQt.getApplication("sleepdialog").quit();


})();