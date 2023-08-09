const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_standarddialogs.tmodel");


    //启动Qt应用文件"standarddialogs"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\standarddialogs.exe");

    //等待Qt应用"standarddialogs"
    await modelQt.getApplication("standarddialogs").exists(10);

    //点击 "QInputDialog::getInt()"
    await modelQt.getButton("QInputDialog::getInt()").click();

    //设置控件值为"100"
    await modelQt.getSpinBox("QSpinBox").pressKeys("100");

    //点击 "OK"
    await modelQt.getButton("OK").click();

    //点击 "QInputDialog::getDouble()"
    await modelQt.getButton("QInputDialog::getDouble()").click();

    //设置控件值为"100"
    await modelQt.getSpinBox("QDoubleSpinBox").pressKeys("100");

    //点击 "OK1"
    await modelQt.getButton("OK1").click();

    //点击 "QInputDialog::getItem()"
    await modelQt.getButton("QInputDialog::getItem()").click();

    //选择列表项 "Summer"
    await modelQt.getComboBox("QComboBox").select("Summer");

    //点击 "OK2"
    await modelQt.getButton("OK2").click();

    //点击 "QInputDialog::getText()"
    await modelQt.getButton("QInputDialog::getText()").click();

    //点击 "OK3"
    await modelQt.getButton("OK3").click();

    //点击 "QInputDialog::getMultiLineText"
    await modelQt.getButton("QInputDialog::getMultiLineText").click();

    //设置控件值为"Hello World"
    await modelQt.getEdit("QPlainTextEdit").pressKeys("Hello World");

    //点击 "OK4"
    await modelQt.getButton("OK4").click();

    //close Window "Standard_Dialogs"
    await modelQt.getWindow("Standard_Dialogs").close();

    //关闭Qt应用"standarddialogs"
    await modelQt.getApplication("standarddialogs").quit();


})();