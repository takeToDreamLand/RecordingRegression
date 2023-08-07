const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_basiclayouts.tmodel");


    //Launch application "basiclayouts.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\basiclayouts.exe");

    //Click "Grid_layout1"
    await modelWin.getEdit("Grid_layout1").click(45, 11);

    //Click "Grid_layout2"
    await modelWin.getEdit("Grid_layout2").click(52, 18);

    //Click "Grid_layout3"
    await modelWin.getEdit("Grid_layout3").click(61, 14);

    //Click "Grid_layout5"
    await modelWin.getEdit("Grid_layout5").click();

    //Click "Button_4"
    await modelWin.getButton("Button_4").click();

    //Click "Button_3"
    await modelWin.getButton("Button_3").click();

    //Click "Button_2"
    await modelWin.getButton("Button_2").click();

    //Click "Button_1"
    await modelWin.getButton("Button_1").click();

    //Click "Grid_layout3"
    await modelWin.getEdit("Grid_layout3").click(96, 8);

    //Press keys "123"
    await modelWin.getWindow("Window").pressKeys("123");

    //Click "Grid_layout2"
    await modelWin.getEdit("Grid_layout2").click(94, 5);

    //Press keys "654"
    await modelWin.getWindow("Window").pressKeys("654");

    //Click "Grid_layout1"
    await modelWin.getEdit("Grid_layout1").click(107, 10);

    //Press keys "789"
    await modelWin.getWindow("Window").pressKeys("789");

    //Click "Form_layout1"
    await modelWin.getEdit("Form_layout1").click(48, 10);

    //Press keys "2"
    await modelWin.getWindow("Window").pressKeys("2");

    //Click "Form_layout3"
    await modelWin.getEdit("Form_layout3").click(56, 19);

    //Increment Spinner "Form_layout2"
    await modelWin.getSpinner("Form_layout2").increment();

    //Double Click "Form_layout2"
    await modelWin.getSpinner("Form_layout2").dblClick(324, 8);

    //Click "Open"
    await modelWin.getButton("Open").click();

    //Click "Form_layout5"
    await modelWin.getText("Form_layout5").click(232, 9);

    //Click "Form_layout5"
    await modelWin.getText("Form_layout5").click(232, 9);

    //Click "Edit1"
    await modelWin.getEdit("Edit1").click();

    //Press keys "21323"
    await modelWin.getWindow("Window").pressKeys("21323");

    //Click "OK"
    await modelWin.getButton("OK").click();
})();