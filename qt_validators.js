const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_validators.tmodel");


    //启动Qt应用文件"validators"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\validators.exe");

    //等待Qt应用"validators"
    await modelQt.getApplication("validators").exists(10);

    //选择列表项 "Arabic/Tunisia"
    await modelQt.getComboBox("localeSelector").select("Arabic/Tunisia");

    //点击 "qt_spinbox_lineedit"
    await modelQt.getEdit("qt_spinbox_lineedit").click(79, 8);

    //点击 "qt_spinbox_lineedit"
    await modelQt.getEdit("qt_spinbox_lineedit").click(75, 13);

    //设置控件值为"100"
    await modelQt.getSpinBox("minVal").pressKeys("100");

    //点击 "qt_spinbox_lineedit1"
    await modelQt.getEdit("qt_spinbox_lineedit1").click(158, 2);

    //设置控件值为"10000"
    await modelQt.getSpinBox("maxVal").pressKeys("10000");

    //增加 SpinBox "doubleMinVal"
    await modelQt.getSpinBox("doubleMinVal").increment();

    //增加 SpinBox "doubleMinVal"
    await modelQt.getSpinBox("doubleMinVal").increment();

    //增加 SpinBox "doubleMaxVal"
    await modelQt.getSpinBox("doubleMaxVal").increment();

    //增加 SpinBox "doubleMaxVal"
    await modelQt.getSpinBox("doubleMaxVal").increment();

    //增加 SpinBox "doubleMaxVal"
    await modelQt.getSpinBox("doubleMaxVal").increment();

    //增加 SpinBox "doubleDecimals"
    await modelQt.getSpinBox("doubleDecimals").increment();

    //选择列表项 "Scientific"
    await modelQt.getComboBox("doubleFormat").select("Scientific");

    //点击 "frame_2"
    await modelQt.getGeneric("frame_2").click(61, 59);

    //点击 "doubleEditor"
    await modelQt.getEdit("doubleEditor").click(393, 9);

    //设置控件值为"12000"
    await modelQt.getEdit("doubleEditor").pressKeys("12000");

    //点击 "pushButton"
    await modelQt.getButton("pushButton").click();

    //关闭Qt应用"validators"
    await modelQt.getApplication("validators").quit();


})();