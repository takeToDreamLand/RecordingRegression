const { RunSettings } = require("leanpro.common");
const { WinAuto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelWin = WinAuto.loadModel(__dirname + "/win_SimpleStyles.tmodel");


    //Launch application "SimpleStyles.exe"
    await Util.launchProcess("C:\\Program Files\\LeanPro\\CukeTest\\bin\\SimpleStyles.exe");

    //Click "Default"
    await modelWin.getButton("Default").click();

    //Set the check state to be true
    await modelWin.getCheckBox("Normal").click(5,5);

    //Set the check state to be false
    await modelWin.getCheckBox("Checked").click(5,5);

    //Set the check state to be false
    await modelWin.getCheckBox("Indeterminate").click(5,5);

    //Set the check state to be true
    await modelWin.getCheckBox("Indeterminate").click(5,5);

    //Check the item "Normal1"
    await modelWin.getRadioButton("Normal1").check();

    //Check the item "Normal2"
    await modelWin.getRadioButton("Normal2").check();

    //Click "Edit"
    await modelWin.getEdit("Edit").click(75, 12);

    //Set value to be "abc"
    await modelWin.getEdit("Edit").clearAll();
    await modelWin.getEdit("Edit").pressKeys("abc");

    //Double Click "Edit1"
    await modelWin.getEdit("Edit1").dblClick(25, 11);

    /**
     * 密码框set问题，见 win_SimpleStyles_bug_2.js
     */

    //Click "ComboBox"
    await modelWin.getComboBox("ComboBox").click(77, 10);

    /**
     * 可编辑ComboBox的重复录制问题，见win_SimpleStyles_bug_1.js
     */

    //Click "Third_Normal_Item"
    await modelWin.getListItem("Third_Normal_Item").click(64, 12);

    //Select the item "First Normal Item"
    await modelWin.getList("List").select("First Normal Item");

    //Select the item "Eighth Normal Item"
    await modelWin.getList("List").select("Eighth Normal Item");

    //Select the item "Eighth Normal Item"
    await modelWin.getList("List1").select("Eighth Normal Item");

    //Set position for slider 2
    await modelWin.getSlider("Slider").setPosition(2);
    await modelWin.getSlider("Slider").getGeneric({type: "Thumb"}).drop(1, 0)

    //Set position for slider 7.222222222222221
    await modelWin.getSlider("Slider1").setPosition(7.222222222222221);
    await modelWin.getSlider("Slider1").getGeneric({type: "Thumb"}).drop(1, 0)

    //Set position for slider 6.888888888888891
    await modelWin.getSlider("Slider2").setPosition(6.888888888888891);
    await modelWin.getSlider("Slider2").getGeneric({type: "Thumb"}).drop(1, 0)

    //Set position for slider 4.777777777777776
    await modelWin.getSlider("Slider3").setPosition(4.777777777777776);
    await modelWin.getSlider("Slider3").getGeneric({type: "Thumb"}).drop(1, 0)

    //Click "Button"
    await modelWin.getButton("Button").click();

    //Click "Button1"
    await modelWin.getButton("Button1").click();

    //Click "Button2"
    await modelWin.getButton("Button2").click();

    await modelWin.getTreeItem("Top_Three").scrollIntoView()
    //Click "Button3"
    await modelWin.getButton("Button3").click();

    /**
     * 菜单栏控件和菜单混淆问题，见win_SimpleStyles_bug_3.js
     */
    /**
     * 长菜单的滚动问题，见win_SimpleStyles_bug_4.js
     */

    //Click "(Hover_Over_Me)"
    await modelWin.getText("(Hover_Over_Me)").click(56, 9);

    //Click "(Right-Click_Me)"
    await modelWin.getText("(Right-Click_Me)").click();

    //Right click "Pane"
    await modelWin.getPane("Pane").click(285, 512, 2);

    //Click "Sub_Four3"
    await modelWin.getText("Sub_Four3").click(78, 9);

    //Drop "Sub_Four2"
    await modelWin.getMenuItem("Sub_Four2").drop(106, 9);

    //Click "Sub_Two3"
    await modelWin.getText("Sub_Two3").click(21, 6);

    //Activate the tab "Two"
    await modelWin.getTab("Tab").activate("Two");

    //Activate the tab "Three"
    await modelWin.getTab("Tab").activate("Three");

    //Activate the tab "Four"
    await modelWin.getTab("Tab").activate("Four");

    //Activate the tab "Two"
    await modelWin.getTab("Tab").activate("Two");

    //Activate the tab "Three"
    await modelWin.getTab("Tab").activate("Three");

    //Activate the tab "One"
    await modelWin.getTab("Tab").activate("One");

    //Click "Button4"
    await modelWin.getButton("Button4").click();

    //Click "This_is_the_Header1"
    await modelWin.getText("This_is_the_Header1").click(47, 11);

    //Click "Button4"
    await modelWin.getButton("Button4").click();

    //Click "关闭"
    await modelWin.getButton("关闭").click();


})();