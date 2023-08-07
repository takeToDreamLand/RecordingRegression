const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_addressbook.tmodel");


    //启动应用 "addressbook.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\addressbook.exe");

    //按键 "c"
    await modelWin.getTabItem("Address_Book2").pressKeys("c");


})();