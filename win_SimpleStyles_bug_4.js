const { RunSettings } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_SimpleStyles.tmodel");


    //Launch application "SimpleStyles.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\SimpleStyles.exe");

    //Click "Menu_with_Many_Items1"
    await modelWin.getText("Menu_with_Many_Items1").click(86, 4);

    //Drop "Menu_with_Many_Items"
    await modelWin.getMenuItem("Menu_with_Many_Items").drop(92, 7);

    //Click "Item_471"，当菜单项需要滚动后才可见时，回放会出错
    await modelWin.getText("Item_471").click(27, 7);

    //Click "关闭"
    await modelWin.getButton("关闭").click();


})();