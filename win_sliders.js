const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_sliders.tmodel");


    //启动应用 "sliders.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\sliders.exe");

    //拖拽 "Controls1"
    await modelWin.getSpinner("Controls1").drag(27, 3);

    //释放 "Minimum_value:"
    await modelWin.getText("Minimum_value:").drop(69, 5);

    //按键 "100"
    await modelWin.getSpinner("Controls1").pressKeys("100");

    //设置选中状态为 true
    await modelWin.getCheckBox("Inverted_appearance").toggleCheck(true);

    //增加 Spinner "Controls2"
    await modelWin.getSpinner("Controls2").increment();

    //双击 "Controls2"
    await modelWin.getSpinner("Controls2").dblClick(36, 4);

    //增加 Spinner "Controls2"
    await modelWin.getSpinner("Controls2").increment();

    //增加 Spinner "Controls3"
    await modelWin.getSpinner("Controls3").increment();

    //双击 "Controls3"
    await modelWin.getSpinner("Controls3").dblClick(42, 2);

    //点击 "Controls4"
    await modelWin.getComboBox("Controls4").click(185, 3);

    //选择列表项 "Vertical slider-like widgets"
    await modelWin.getList("QComboBoxListView").select("Vertical slider-like widgets");

    //设置滑动条位置 22
    await modelWin.getSlider("Vertical1").setPosition(22);

    //拖拽 "Vertical2"
    await modelWin.getScrollBar("Vertical2").drag(6, 77);

    //释放 "Vertical2"
    await modelWin.getScrollBar("Vertical2").drop();

    //点击 "关闭"
    await modelWin.getButton("关闭").click();

    //释放 "Group"
    await modelWin.getGeneric("Group").drop(673, 229);

    //按键 "\u0003"
    await modelWin.getEdit("终端_1，node_运行命令:_切换屏幕阅读器辅助功能模式以").pressKeys("\u0003");


})();