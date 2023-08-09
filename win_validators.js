const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_validators.tmodel");


    //启动应用 "validators.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\validators.exe");

    //点击 "LocaleSelector"
    await modelWin.getComboBox("LocaleSelector").click(129, 8);

    //选择列表项 "Breton/France"
    await modelWin.getList("QComboBoxListView").select("Breton/France");

    //点击 "QIntValidator1"
    await modelWin.getSpinner("QIntValidator1").click(263, 7);

    //按键 "{BS}10"
    await modelWin.getSpinner("QIntValidator1").pressKeys("{BS}10");

    //增加 Spinner "QIntValidator2"
    await modelWin.getSpinner("QIntValidator2").increment();

    //双击 "QIntValidator2"
    await modelWin.getSpinner("QIntValidator2").dblClick(320, 5);

    //双击 "QIntValidator2"
    await modelWin.getSpinner("QIntValidator2").dblClick(320, 5);

    //减少 Spinner "QIntValidator2"
    await modelWin.getSpinner("QIntValidator2").decrement();

    //点击 "QIntValidator3"
    await modelWin.getCustom("QIntValidator3").click(54, 33);

    //点击 "LEDWidget"
    await modelWin.getImage("LEDWidget").click(51, 11);

    //点击 "QIntValidator3"
    await modelWin.getCustom("QIntValidator3").click(35, 32);

    //点击 "editingFinished()"
    await modelWin.getText("editingFinished()").click();

    //点击 "QIntValidator"
    await modelWin.getGeneric("QIntValidator").click(169, 101);

    //点击 "QIntValidator"
    await modelWin.getGeneric("QIntValidator").click(176, 106);

    //点击 "QIntValidator4"
    await modelWin.getEdit("QIntValidator4").click(177, 8);

    //设置控件值为 "342"
    await modelWin.getEdit("QIntValidator4").set("342");

    //点击 "QDoubleValidator1"
    await modelWin.getSpinner("QDoubleValidator1").click(127, 10);

    //增加 Spinner "QDoubleValidator1"
    await modelWin.getSpinner("QDoubleValidator1").increment();

    //点击 "QDoubleValidator1"
    await modelWin.getSpinner("QDoubleValidator1").click(134, 9);

    //拖拽 "QDoubleValidator1"
    await modelWin.getSpinner("QDoubleValidator1").drag(134, 9);

    //释放 "Validators"
    await modelWin.getWindow("Validators").drop();

    //按键 "20-00"
    await modelWin.getSpinner("QDoubleValidator1").pressKeys("20-00");

    //点击 "QDoubleValidator2"
    await modelWin.getSpinner("QDoubleValidator2").click(71, 10);

    //增加 Spinner "QDoubleValidator2"
    await modelWin.getSpinner("QDoubleValidator2").increment();

    //点击 "QDoubleValidator"
    await modelWin.getGeneric("QDoubleValidator").click(37, 60);

    //按键 "10000"
    await modelWin.getSpinner("QDoubleValidator2").pressKeys("10000");

    //点击 "QDoubleValidator3"
    await modelWin.getSpinner("QDoubleValidator3").click(31, 14);

    //点击 "Quit"
    await modelWin.getButton("Quit").click();

    //按键 "\u0003"
    await modelWin.getEdit("终端_1，node_运行命令:_切换屏幕阅读器辅助功能模式以").pressKeys("\u0003");


})();