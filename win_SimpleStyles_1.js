const { RunSettings } = require("leanpro.common");
const { Auto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = Auto.loadModel(__dirname + "/win_SimpleStyles_1.tmodel");


    //Launch application "SimpleStyles.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\SimpleStyles.exe");
    
    await modelWin.getPane("Pane").vScroll(80)
    //Click "First_Item1"
    await modelWin.getText("First_Item1").click(48, 13);

    //Click "Second_Item1"
    await modelWin.getText("Second_Item1").click(46, 10);

    //Drag "Thumb"
    await modelWin.getGeneric("Thumb").drag(7, 25);

    //Drop "Thumb"
    await modelWin.getGeneric("Thumb").drop(7, 100);

    //Click "80%1"
    await modelWin.getText("80%1").click(33, 6);

    //Click "Ln_181,_Col_201"
    await modelWin.getText("Ln_181,_Col_201").click(18, 6);

    //Click "Edit"
    await modelWin.getEdit("Edit").click(36, 14);

    //Set value to be "20"
    await modelWin.getEdit("Edit").clearAll();
    await modelWin.getEdit("Edit").pressKeys("20");

    //Click "Button1"
    await modelWin.getText("Button1").click(20, 10);

    //Set the check state to be true
    await modelWin.getCheckBox("CheckBox").click();

    //Drag "Thumb1"
    await modelWin.getGeneric("Thumb1").drag(5, 16);

    //Drop "Pane"
    await modelWin.getPane("Pane").drop(990, 206);

    //Click "Thumb1"
    await modelWin.getGeneric("Thumb1").click(3, 14);

    //Click "Pane"
    await modelWin.getPane("Pane").click(1186, 136);

    //Click "关闭"
    await modelWin.getButton("关闭").click();

    //Drop "Pane"
    await modelWin.getPane("Pane").drop(287, 10);

    //Click "Pane"
    await modelWin.getPane("Pane").click(134, 422);

    //Click "Page2"
    await modelWin.getHyperlink("Page2").click(28, 10);

    //Click "关闭1"
    await modelWin.getButton("关闭1").click();

    //Drop "Pane"
    await modelWin.getPane("Pane").drop(318, 34);

    //Click "(Click_Me)"
    await modelWin.getText("(Click_Me)").click();

    //Click "Page2"
    await modelWin.getHyperlink("Page2").click(28, 6);

    //Click "Page1"
    await modelWin.getHyperlink("Page1").click(27, 10);

    //Click "关闭1"
    await modelWin.getButton("关闭1").click();

    //Drop "Pane"
    await modelWin.getPane("Pane").drop(335, 72);

    //Click "Bishop1"
    await modelWin.getText("Bishop1").click(35, 4);

    //Click "Zoom_In1"
    await modelWin.getText("Zoom_In1").click(27, 13);

    //Click "Zoom_Out1"
    await modelWin.getText("Zoom_Out1").click(24, 9);

    //Click "关闭"
    await modelWin.getButton("关闭").click();


})();