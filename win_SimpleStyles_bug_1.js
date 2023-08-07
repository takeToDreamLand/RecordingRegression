/**
 * 此基准脚本会在Windows录制中生成另一个Edit的set(null)
 */
const { RunSettings } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_SimpleStyles.tmodel");

    //Launch application "SimpleStyles.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\SimpleStyles.exe");


    //Click "ComboBox"
    await modelWin.getComboBox("ComboBox").click(77, 10);

    //Click "Third_Normal_Item"
    await modelWin.getListItem("Third_Normal_Item").click(64, 12);

    //Click "Edit2"
    await modelWin.getEdit("Edit2").click(43, 9);

    //Set value to be "editcombobox"
    await modelWin.getEdit("Edit2").clearAll();
    await modelWin.getEdit("Edit2").pressKeys("editcombobox");

    //Click "关闭"
    await modelWin.getButton("关闭").click();


})();