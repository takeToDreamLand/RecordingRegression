const { RunSettings } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_SimpleStyles.tmodel");


    //Launch application "SimpleStyles.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\SimpleStyles.exe");

    /**
     * 由于这里将Top_One1混淆成为MenuItem，导致菜单展开后的MenuItem和当前的合并
     * 会导致在菜单展开后，Top_One1内的控件（比如Text）会找不到
     */
    //Click "Top_One1"
    await modelWin.getMenuItem("Top_One1").click();

    //Click "Top_One2"
    await modelWin.getText("Top_One2").click(16, 11);

    //Drop "Top_One1"
    await modelWin.getMenuItem("Top_One1").drop(22, 14);

    //Click "Sub_Four1"
    await modelWin.getMenuItem("Sub_Four1").click(47, 8);

    //Click "Sub_Two1"
    await modelWin.getText("Sub_Two1").click(29, 7);

    //Click "关闭"
    await modelWin.getButton("关闭").click();


})();