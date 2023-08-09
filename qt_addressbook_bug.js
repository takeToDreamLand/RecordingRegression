const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_addressbook.tmodel");


    //启动Qt应用文件"addressbook"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\addressbook.exe");

    //等待Qt应用"addressbook"
    await modelQt.getApplication("addressbook").exists(10);

    //切换到标签页"MNO"

    // 实际点了多个标签页只录到了最后一个标签页activate操作
    await modelQt.getTabBar("qt_tabwidget_tabbar").activate("MNO");

    //close Window "Address_Book"
    await modelQt.getWindow("Address_Book").close();

    //关闭Qt应用"addressbook"
    await modelQt.getApplication("addressbook").quit();


})();