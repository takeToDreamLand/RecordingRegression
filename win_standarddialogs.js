const { RunSettings, Util } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_standarddialogs.tmodel");


    //Launch application "standarddialogs.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\standarddialogs.exe");

    //Click "QInputDialog::getInt()"
    await modelWin.getButton("QInputDialog::getInt()").click();

    //Click "Percentage:"
    await modelWin.getSpinner("Percentage:").click(54, 8);

    //Decrement Spinner "Percentage:"
    await modelWin.getSpinner("Percentage:").decrement();

    //Decrement Spinner "Percentage:"
    await modelWin.getSpinner("Percentage:").decrement();

    //Click "OK"
    await modelWin.getButton("OK").click();

    //Click "QInputDialog::getDouble()"
    await modelWin.getButton("QInputDialog::getDouble()").click();

    //Click "Amount:"
    await modelWin.getSpinner("Amount:").click(16, 5);

    //Press keys "2"
    await modelWin.getSpinner("Amount:").pressKeys("\b2");

    //Click "OK1"
    await modelWin.getButton("OK1").click();

    //Click "QInputDialog::getItem()"
    await modelWin.getButton("QInputDialog::getItem()").click();

    //Click "Season:"
    await modelWin.getComboBox("Season:").click(91, 9);

    //Select the item "Fall"
    await modelWin.getList("List").select("Fall");

    //Click "OK2"
    await modelWin.getButton("OK2").click();

    //Click "QInputDialog::getText()"
    await modelWin.getButton("QInputDialog::getText()").click();

    //Double Click "User_name:"
    await modelWin.getEdit("User_name:").dblClick(101, 14);

    //Set value to be "123123"
    await modelWin.getEdit("User_name:").set("123123");

    //Click "OK3"
    await modelWin.getButton("OK3").click();

    //Click "QInputDialog::getMultiLineText"
    await modelWin.getButton("QInputDialog::getMultiLineText").click();

    //Click "Edit"
    await modelWin.getEdit("Edit").click(46, 19);

    //Set value to be "New\nLine"
    await modelWin.getEdit("Edit").set("New\nLine");

    //Click "OK4"
    await modelWin.getButton("OK4").click();

    //Click "Color_Dialog"
    await modelWin.getButton("Color_Dialog").click();

    //Click "QColorDialog::getColor()"
    await modelWin.getButton("QColorDialog::getColor()").click();

    //Click "Basic_colors"
    await modelWin.getGeneric("Basic_colors").click(68, 35);

    //Click "Add_to_Custom_Colors"
    await modelWin.getButton("Add_to_Custom_Colors").click();

    //Click "OK5"
    await modelWin.getButton("OK5").click();

    //Click "Font_Dialog"
    await modelWin.getButton("Font_Dialog").click();

    //Click "File_Dialogs"
    await modelWin.getButton("File_Dialogs").click();

    //Click "QFileDialog::getExistingDirect"
    await modelWin.getButton("QFileDialog::getExistingDirect").click();

    //Click "选择文件夹"
    await modelWin.getButton("选择文件夹").click();

    //Click "QFileDialog::getOpenFileName()"
    await modelWin.getButton("QFileDialog::getOpenFileName()").click();

    //Click "打开(O)"
    await modelWin.getButton("打开(O)").click();

    //Click "取消"
    await modelWin.getButton("取消").click();

    //Set the check state to be true
    await modelWin.getCheckBox("Do_not_use_native_dialog").toggleCheck(true);

    //Set the check state to be true
    await modelWin.getCheckBox("Readonly").toggleCheck(true);

    //Click "QFileDialog::getOpenFileName()"
    await modelWin.getButton("QFileDialog::getOpenFileName()").click();

    //Set value to be "C:/temp/RecordAll/model.tmodel"
    await modelWin.getEdit("File_name:").set("C:/temp/RecordAll/model.tmodel");

    //Press keys ""
    await modelWin.getWindow("Window9").pressKeys("\r");

    //Press keys ""
    await modelWin.getButton("QFileDialog::getOpenFileName()").pressKeys("\r");

    //Set the check state to be false
    await modelWin.getCheckBox("Do_not_use_native_dialog").toggleCheck(false);

    //Click "QFileDialog::getOpenFileNames("
    await modelWin.getButton("QFileDialog::getOpenFileNames(").click();

    //Click "文件名(N):1"
    await modelWin.getEdit("文件名(N):1").click(102, 4);

    //Set value to be "C:\\temp\\RecordAll\\model.tmodel"
    await modelWin.getEdit("文件名(N):1").set("C:\\temp\\RecordAll\\model.tmodel");

    //Select the item "C:\\temp\\RecordAll\\model.tmodel"
    await modelWin.getList("List1").select("C:\\temp\\RecordAll\\model.tmodel");

    //Click "打开(O)1"
    await modelWin.getButton("打开(O)1").click();

    //Click "关闭"
    await modelWin.getButton("关闭").click();

    //Drop "Document"
    await modelWin.getDocument("Document").drop(1259, 195);

    //Press keys ""
    await modelWin.getEdit("Terminal_1,_node_Run_the_comma").pressKeys("\u0003");


})();