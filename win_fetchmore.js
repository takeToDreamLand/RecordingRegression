const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_fetchmore.tmodel");


    //启动应用 "fetchmore.exe"
    await Util.launchProcess("C:\\Users\\Will\\Desktop\\CukeTest\\bin\\fetchmore.exe");

    //选择列表项 "."
    await modelWin.getList("List").select(".");

    //点击 ".."
    await modelWin.getListItem("..").click(75, 8);

    //选择列表项 "freetype.dll"
    await modelWin.getList("List").select("freetype.dll");

    //拖拽 "Page_up"
    await modelWin.getButton("Page_up").drag();

    //释放 "Page_down"
    await modelWin.getButton("Page_down").drop();

    //拖拽 "Page_down"
    await modelWin.getButton("Page_down").drag();

    //释放 "Line_up"
    await modelWin.getButton("Line_up").drop();

    //点击 "Directory:"
    await modelWin.getEdit("Directory:").click(90, 12);

    //按键 "C:/Windows"
    await modelWin.getWindow("Fetch_More_Example").pressKeys("C:/Windows");

    //选择列表项 "notepad.exe"
    await modelWin.getList("List").select("notepad.exe");

    //选择列表项 "notepad.exe"
    await modelWin.getList("List").select("notepad.exe");

    //双击 "notepad.exe"
    await modelWin.getListItem("notepad.exe").dblClick(82, 8);

    //点击 "关闭"
    await modelWin.getButton("关闭").click();


})();