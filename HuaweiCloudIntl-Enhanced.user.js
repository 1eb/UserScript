// ==UserScript==
// @name         Huawei Cloud International - Enhanced
// @namespace    https://github.com/1eb/UserScript
// @version      0.2
// @description  实现华为云国际云解析控制台免实名使用
// @updateURL    https://github.com/1eb/UserScript/raw/main/HuaweiCloudIntl-Enhanced.user.js
// @downloadURL  https://github.com/1eb/UserScript/raw/main/HuaweiCloudIntl-Enhanced.user.js
// @author       1eb
// @match        https://console-intl.huaweicloud.com/dns*
// @icon         https://res-static3.huaweicloud.com/content/dam/cloudbu-site/archive/commons/web_resoure/framework/favicon/favicon.ico
// @require      https://cdn.staticfile.org/jquery/3.6.2/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==


var submit = function(){
    //当显示添加记录集按钮时执行
    if (document.getElementById('addRecordsetBtn')) {
        $(document.querySelectorAll("button")).removeAttr("disabled");
    }
    /*
    //当显示创建公网域名面板时执行
    if (document.getElementById('ti_auto_id_36')) {

        //去除按钮遮罩
        //$('.cti-btn-cover').remove();
        //var btn = document.querySelector(".ti-modal-footer.ng-scope span button")
        //去除确认按钮disabled属性
        document.querySelector("#recordsetConfirmBtn").removeAttr("disabled");
        console.log("wait 1s");
    }
    */
}
//每隔1s循环执行
setInterval(submit, 1000);
