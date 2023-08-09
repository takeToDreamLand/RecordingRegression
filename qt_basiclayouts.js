const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_basiclayouts.tmodel");


    //启动Qt应用文件"basiclayouts"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\basiclayouts.exe");

    //等待Qt应用"basiclayouts"
    await modelQt.getApplication("basiclayouts").exists(10);

    //点击 "Button_1"
    await modelQt.getButton("Button_1").click();

    //点击 "Button_2"
    await modelQt.getButton("Button_2").click();

    //点击 "Button_3"
    await modelQt.getButton("Button_3").click();

    //点击 "Button_4"
    await modelQt.getButton("Button_4").click();

    //点击 "QLineEdit"
    await modelQt.getEdit("QLineEdit").click(78, 8);

    //设置控件值为"line1"
    await modelQt.getEdit("QLineEdit").pressKeys("line1");

    //点击 "QTextEdit"
    await modelQt.getEdit("QTextEdit").click(131, 37);

    //点击 "QTextEdit"
    await modelQt.getEdit("QTextEdit").click(133, 39);

    //设置控件值为"Hello World"
    await modelQt.getEdit("QTextEdit").pressKeys("Hello World");

    //增加 SpinBox "QSpinBox"
    await modelQt.getSpinBox("QSpinBox").increment();

    //点击 "QTextEdit1"
    await modelQt.getEdit("QTextEdit1").click(407, 23);

    //点击 "QTextEdit1"
    await modelQt.getEdit("QTextEdit1").click(430, 17);

    //设置控件值为"This is a test string"
    await modelQt.getEdit("QTextEdit1").pressKeys("This is a test string");

    //点击 "OK"
    await modelQt.getButton("OK").click();

    //关闭Qt应用"basiclayouts"
    await modelQt.getApplication("basiclayouts").quit();


})();