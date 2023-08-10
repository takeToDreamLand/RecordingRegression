const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_addressbook.tmodel");


    //启动Qt应用文件"addressbook"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\addressbook.exe");

    //等待Qt应用"addressbook"
    await modelQt.getApplication("addressbook").exists(10);


    /* 实际点了多个标签页只录到了最后一个标签页activate操作 */
    /*  预期内行为：如果连续切换标签页而不在标签页内操作，只会生成最后一个切换操作*/
    //切换到标签页"MNO"
    await modelQt.getTabBar("qt_tabwidget_tabbar").activate("MNO");

    //close Window "Address_Book"
    await modelQt.getWindow("Address_Book").close();

    //关闭Qt应用"addressbook"
    await modelQt.getApplication("addressbook").quit();


})();