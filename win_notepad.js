const { RunSettings } = require("leanpro.common");
const { Auto } = require("leanpro.win");
const { Util } = require("leanpro.common");
(async () => {
    await RunSettings.set({slowMo: 100, reportSteps: true});

    let modelWin = Auto.loadModel(__dirname + "/win_notepad.tmodel");


    //Launch application "notepad.exe"
    await Util.launchProcess("notepad.exe");

    //Click "文本编辑器"
    await modelWin.getDocument("文本编辑器").click(481, 313);

    //Set value to be "abc"
    await modelWin.getDocument("文本编辑器").set("abc");

    //Click "文件(F)"
    await modelWin.getMenuItem("文件(F)").click(32, 14);

    //Click "页面设置(U)..."
    await modelWin.getMenuItem("页面设置(U)...").click(38, 19);

    //Click "大小(Z):"
    await modelWin.getComboBox("大小(Z):").click(218, 8);

    //Select the item "B5 (JIS)"
    await modelWin.getList("大小(Z):1").select("B5 (JIS)");

    //Click "页眉(H):"
    await modelWin.getEdit("页眉(H):").click(231, 8);

    //Set value to be "123"
    await modelWin.getEdit("页眉(H):").set("123");

    //Check the item "横向(A)"
    await modelWin.getRadioButton("横向(A)").check();

    //Check the item "纵向(O)"
    await modelWin.getRadioButton("纵向(O)").check();

    //Click "输入值1"
    await modelWin.getHyperlink("输入值1").click(19, 12);

    //Press keys "	"
    await modelWin.getHyperlink("输入值1").pressKeys("\t");

    await modelWin.getWindow("Window").activate();
    //Click "预览"
    await modelWin.getImage("预览").click(67, 138);

    //Click "确定"
    await modelWin.getButton("确定").click();

    //Click "查看(V)"
    await modelWin.getMenuItem("查看(V)").click(31, 2);
    
    await modelWin.getMenuItem("缩放(Z)1").click()
   
    //Click "放大(I)"
    await modelWin.getMenuItem("放大(I)").click(46, 10);

    //Click "编辑(E)"
    await modelWin.getMenuItem("编辑(E)").click(43, 12);

    //Click "全选(A)"
    await modelWin.getMenuItem("全选(A)").click(64, 5);

    //Set value to be "123"
    await modelWin.getDocument("文本编辑器").set("123");

    //Click "格式(O)"
    await modelWin.getMenuItem("格式(O)").click(35, 8);

    //Click "字体(F)..."
    await modelWin.getMenuItem("字体(F)...").click(38, 6);

    //Select the item "楷体"
    await modelWin.getList("字体(F):1").select("楷体");

    //Select the item "粗体"
    await modelWin.getList("字形(Y):1").select("粗体");

    //Select the item "五号"
    await modelWin.getList("大小(S):1").select("五号");

    //Click "脚本(R):"
    await modelWin.getComboBox("脚本(R):").click(123, 12);

    //Select the item "中文 GB2312"
    await modelWin.getList("脚本(R):1").select("中文 GB2312");

    //Click "确定1"
    await modelWin.getButton("确定1").click();

    //Click "格式(O)"
    await modelWin.getMenuItem("格式(O)").click(19, 2);

    //Click "字体(F)..."
    await modelWin.getMenuItem("字体(F)...").click(41, 13);

    //Select the item "微软雅黑"
    await modelWin.getList("字体(F):1").select("微软雅黑");

    //Select the item "倾斜"
    await modelWin.getList("字形(Y):1").select("倾斜");

    //Select the item "三号"
    await modelWin.getList("大小(S):1").select("三号");

    //Click "确定1"
    await modelWin.getButton("确定1").click();

    //Click "帮助(H)"
    await modelWin.getMenuItem("帮助(H)").click(30, 15);

    //Click "关于记事本(A)"
    await modelWin.getMenuItem("关于记事本(A)").click(58, 11);

    //Click "确定2"
    await modelWin.getButton("确定2").click();

    //Click "关闭"
    await modelWin.getButton("关闭").click();

    //Click "不保存(N)"
    await modelWin.getButton("不保存(N)").click();


})();