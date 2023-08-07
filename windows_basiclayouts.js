const { RunSettings } = require("leanpro.common");
const { Auto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = Auto.loadModel(__dirname + "/windows_basiclayouts.tmodel");


    //Launch application "basiclayouts.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\basiclayouts.exe");

    //Click "Button_1"
    await modelWin.getButton("Button_1").click();

    //Click "Button_4"
    await modelWin.getButton("Button_4").click();

    //Click "Button_3"
    await modelWin.getButton("Button_3").click();

    //Click "Button_2"
    await modelWin.getButton("Button_2").click();

    //Click "Grid_layout2"
    await modelWin.getEdit("Grid_layout2").click();

    //Click "Grid_layout3"
    await modelWin.getEdit("Grid_layout3").click(42, 12);

    //Press keys "123"
    await modelWin.getWindow("Window").pressKeys("123");

    //Click "Grid_layout4"
    await modelWin.getEdit("Grid_layout4").click(55, 7);

    //Press keys "123"
    await modelWin.getWindow("Window").pressKeys("123");

    //Click "Grid_layout5"
    await modelWin.getEdit("Grid_layout5").click(88, 8);

    //Press keys "1151231231231231231"
    await modelWin.getWindow("Window").pressKeys("1151231231231231231");

    //Click "Grid_layout2"
    await modelWin.getEdit("Grid_layout2").click();

    //Press keys "12315a12312734asdasdz"
    await modelWin.getWindow("Window").pressKeys("12315a12312734asdasdz");

    //Click "Form_layout1"
    await modelWin.getEdit("Form_layout1").click(98, 11);

    //Press keys "123sdaszxa"
    await modelWin.getWindow("Window").pressKeys("123sdaszxa");

    //Click "Form_layout3"
    await modelWin.getEdit("Form_layout3").click(60, 1);

    //Press keys "asdasd"
    await modelWin.getWindow("Window").pressKeys("asdasd");

    //Increment Spinner "Form_layout2"
    await modelWin.getSpinner("Form_layout2").increment();

    //Double Click "Form_layout2"
    await modelWin.getSpinner("Form_layout2").dblClick(321, 6);

    //Double Click "Form_layout2"
    await modelWin.getSpinner("Form_layout2").dblClick(321, 6);

    //Increment Spinner "Form_layout2"
    await modelWin.getSpinner("Form_layout2").increment();

    //Double Click "Form_layout2"
    await modelWin.getSpinner("Form_layout2").dblClick(321, 6);

    //Press keys "asb"
    await modelWin.getWindow("Window").pressKeys("asb");

    //Click "Form_layout3"
    await modelWin.getEdit("Form_layout3").click(101, 16);

    //Drag "Form_layout3"
    await modelWin.getEdit("Form_layout3").drag(96, 16);

    //Drop "Form_layout"
    await modelWin.getGeneric("Form_layout").drop(86, 91);

    //Press keys "2"
    await modelWin.getWindow("Window").pressKeys("2");

    //Click "Edit1"
    await modelWin.getEdit("Edit1").click();

    //Click "Edit1"
    await modelWin.getEdit("Edit1").click();

    //Double Click "Edit1"
    await modelWin.getEdit("Edit1").dblClick(217, 8);

    //Click "Edit1"
    await modelWin.getEdit("Edit1").click(217, 8);

    //Press keys "ijoihiubiyb"
    await modelWin.getWindow("Window").pressKeys("ijoihiubiyb");

    //Click "OK"
    await modelWin.getButton("OK").click();


})();