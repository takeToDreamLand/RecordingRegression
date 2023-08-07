const { RunSettings } = require("leanpro.common");
const { Auto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = Auto.loadModel(__dirname + "/win_appchooser.tmodel");


    //Launch application "appchooser.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\appchooser.exe");

    //Click "Custom"
    await modelWin.getCustom("Custom").click(41, 34);

    //Click "Custom"
    await modelWin.getCustom("Custom").click(287, 31);

    //Click "关闭"
    await modelWin.getButton("关闭").click();


})();