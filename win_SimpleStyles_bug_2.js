const { RunSettings } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_SimpleStyles.tmodel");


    //Launch application "SimpleStyles.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\SimpleStyles.exe");

    //Double Click "Edit1"
    await modelWin.getEdit("Edit1").dblClick(25, 11);

    //Set value to be null，密码框输入会生成set(null)
    await modelWin.getEdit("Edit1").set(null);

    //Click "关闭"
    await modelWin.getButton("关闭").click();
})();