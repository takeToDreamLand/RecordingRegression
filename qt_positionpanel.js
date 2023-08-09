const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_positionpanel.tmodel");


    //启动Qt应用文件"positionpanel"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\CukeTest\\bin\\positionpanel.exe");

    //等待Qt应用"positionpanel"
    await modelQt.getApplication("positionpanel").exists(10);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(107, 301);

    //点击 "GraphicsItem"
    await modelQt.getGraphicsItem("GraphicsItem").click(10, 10);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(112, 222);

    //点击 "GraphicsItem1"
    await modelQt.getGraphicsItem("GraphicsItem1").click(10, 10);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(109, 230);

    //拖拽 "GraphicsItem1"
    await modelQt.getGraphicsItem("GraphicsItem1").drag(7, 18);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(133, 190);

    //释放 "GraphicsItem1"
    await modelQt.getGraphicsItem("GraphicsItem1").drop(7, 18);

    //点击 "Draw_Circle"
    await modelQt.getRadioButton("Draw_Circle").click(8, 6);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(218, 241);

    //点击 "GraphicsItem2"
    await modelQt.getGraphicsItem("GraphicsItem2").click(10, 10);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(193, 290);

    //点击 "GraphicsItem3"
    await modelQt.getGraphicsItem("GraphicsItem3").click(10, 10);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(194, 289);

    //拖拽 "GraphicsItem3"
    await modelQt.getGraphicsItem("GraphicsItem3").drag(11, 9);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(269, 179);

    //释放 "GraphicsItem3"
    await modelQt.getGraphicsItem("GraphicsItem3").drop(11, 9);

    //点击 "Draw_Combination"
    await modelQt.getRadioButton("Draw_Combination").click(8, 9);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(127, 412);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(122, 407);

    //点击 "GraphicsItem4"
    await modelQt.getGraphicsItem("GraphicsItem4").click(5, 5);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(251, 409);

    //点击 "GraphicsItem5"
    await modelQt.getGraphicsItem("GraphicsItem5").click(10, 10);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(251, 413);

    //拖拽 "GraphicsItem5"
    await modelQt.getGraphicsItem("GraphicsItem5").drag(10, 14);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(331, 80);

    //释放 "GraphicsItem5"
    await modelQt.getGraphicsItem("GraphicsItem5").drop(10, 14);

    //点击 "Draw_Icon"
    await modelQt.getRadioButton("Draw_Icon").click(41, 11);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(220, 378);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(221, 378);

    //点击 "GraphicsItem6"
    await modelQt.getGraphicsItem("GraphicsItem6").click(11, 10);

    //clickScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").clickScene(296, 407);

    //点击 "GraphicsItem7"
    await modelQt.getGraphicsItem("GraphicsItem7").click(10, 10);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(296, 411);

    //拖拽 "GraphicsItem7"
    await modelQt.getGraphicsItem("GraphicsItem7").drag(10, 14);

    //moveToScene GraphicsView "QGraphicsView"
    await modelQt.getGraphicsView("QGraphicsView").moveToScene(323, 277);

    //释放 "GraphicsItem7"
    await modelQt.getGraphicsItem("GraphicsItem7").drop(10, 14);

    //close Window "MainWindow"
    await modelQt.getWindow("MainWindow").close();

    //关闭Qt应用"positionpanel"
    await modelQt.getApplication("positionpanel").quit();


})();