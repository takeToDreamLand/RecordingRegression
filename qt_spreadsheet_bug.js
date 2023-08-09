const { RunSettings } = require("leanpro.common");
const { QtAuto } = require("leanpro.qt");
(async () => {
    await RunSettings.set({slowMo: 1000, reportSteps: true});

    let modelQt = QtAuto.loadModel(__dirname + "/qt_spreadsheet.tmodel");


    //启动Qt应用文件"spreadsheet"
    await QtAuto.launchQtProcessAsync("C:\\Program Files\\LeanPro\\LeanRunner\\bin\\spreadsheet.exe");

    //等待Qt应用"spreadsheet"
    await modelQt.getApplication("spreadsheet").exists(10);
    // 录制修改tableitem的值会报错
    //
    /* Error: failed recording set action on object QLineEdit (TypeError: Cannot read property 'data' of undefined)  */

    //
    /* Error: failed recording set action on object QLineEdit (TypeError: Cannot read property 'data' of undefined)  */

    //
    /* Error: failed recording set action on object QLineEdit (TypeError: Cannot read property 'data' of undefined)  */

    //双击 "NOK"
    await modelQt.getTableItem("NOK").dblClick(52, 14);

    //
    /* Error: failed recording set action on object QLineEdit (TypeError: Cannot read property 'data' of undefined)  */

    //双击 "1"
    await modelQt.getTableItem("1").dblClick(47, 19);

    //
    /* Error: failed recording set action on object QLineEdit (TypeError: Cannot read property 'data' of undefined)  */

    //close Window "Spreadsheet1"
    await modelQt.getWindow("Spreadsheet1").close();

    //关闭Qt应用"spreadsheet"
    await modelQt.getApplication("spreadsheet").quit();


})();