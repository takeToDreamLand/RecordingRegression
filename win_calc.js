const { RunSettings } = require("leanpro.common");
const { Auto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 300, reportSteps: true});

    let modelWin = Auto.loadModel(__dirname + "/win_calc.tmodel");


    //Launch application "calc.exe"
    await Util.launchProcess("calc.exe");

    //Click "一"
    await modelWin.getButton("一").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "二"
    await modelWin.getButton("二").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "三"
    await modelWin.getButton("三").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "四"
    await modelWin.getButton("四").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "五"
    await modelWin.getButton("五").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "六"
    await modelWin.getButton("六").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "七"
    await modelWin.getButton("七").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "八"
    await modelWin.getButton("八").click();

    //Click "加"
    await modelWin.getButton("加").click();

    //Click "九"
    await modelWin.getButton("九").click();

    //Click "等于"
    await modelWin.getButton("等于").click();

    //Click "显示为_45"
    await modelWin.getText("显示为_45").click(308, 66);

    //Click "清除"
    await modelWin.getButton("清除").click();

    //Click "打开导航"
    await modelWin.getButton("打开导航").click();

    //Click "科学_计算器"
    await modelWin.getListItem("科学_计算器").click(57, 16);

    //Click "一"
    await modelWin.getButton("一").click();

    //Click "减"
    await modelWin.getButton("减").click();

    //Click "一"
    await modelWin.getButton("一").click();

    //Click "等于"
    await modelWin.getButton("等于").click();

    await Util.delay(10000)

    //Click "打开导航"
    await modelWin.getButton("打开导航").click();

    //Click "标准_计算器"
    await modelWin.getListItem("标准_计算器").click(53, 26);

    //Select the item "1 + 2= 3"
    await modelWin.getList("List").select("1 + 2= 3");

    //Select the item "3 + 3= 6"
    await modelWin.getList("List").select("3 + 3= 6");

    //Select the item "6 + 4= 10"
    await modelWin.getList("List").select("6 + 4= 10");

    //Select the item "10 + 5= 15"
    await modelWin.getList("List").select("10 + 5= 15");

    //Select the item "15 + 6= 21"
    await modelWin.getList("List").select("15 + 6= 21");

    //Select the item "21 + 7= 28"
    await modelWin.getList("List").select("21 + 7= 28");

    //Select the item "28 + 8= 36"
    await modelWin.getList("List").select("28 + 8= 36");

    //Select the item "36 + 9= 45"
    await modelWin.getList("List").select("36 + 9= 45");

    //Activate the tab "记忆"
    await modelWin.getTab("Tab").activate("记忆");

    //Activate the tab "历史记录"
    await modelWin.getTab("Tab").activate("历史记录");

    //Click "关闭_计算器"
    await modelWin.getButton("关闭_计算器").click();


})();