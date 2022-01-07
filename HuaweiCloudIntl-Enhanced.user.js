// ==UserScript==
// @name         Huawei Cloud International - Enhanced
// @namespace    https://github.com/1eb/UserScript
// @version      0.1
// @description  实现华为云国际云解析控制台免实名使用
// @author       1eb
// @match        https://console-intl.huaweicloud.com/dns*
// @icon         https://res-static3.huaweicloud.com/content/dam/cloudbu-site/archive/commons/web_resoure/framework/favicon/favicon.ico
// @grant        none
// @license      GPLv3
// @homepageURL  https://greasyfork.org/zh-CN/users/859890
// ==/UserScript==

(function() {
    'use strict';

    var submit = function(){
        //当显示创建公网域名面板时进行处理
        if (document.getElementById('createPublicModal')) {
            //去除实名提示
            document.querySelector("#createPublicModal > div").style.display="none"
            //去除按钮遮罩
            $('.cti-btn-cover').remove();
            //var btn = document.querySelector(".ti-modal-footer.ng-scope span button")
            //去除按钮disabled属性
            $(document.querySelector(".ti-modal-footer.ng-scope span button")).removeAttr("disabled");
        }
    }
    //循环执行
    setInterval(submit, 1);
    // Your code here...
})();
