const { RunSettings } = require("leanpro.common");
const { Auto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = Auto.loadModel(__dirname + "/windows_appchooser.tmodel");


    //Launch application "appchooser.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\appchooser.exe");

    //Click "Custom"
    await modelWin.getCustom("Custom").click(36, 30);

    //Click "Custom"
    await modelWin.getCustom("Custom").click(265, 27);

    //Click "Custom"
    await modelWin.getCustom("Custom").click(267, 262);

    //Click "Custom"
    await modelWin.getCustom("Custom").click(21, 265);

    //Click "关闭"
    await modelWin.getButton("关闭").click();


})();