// ==UserScript==
// @name         蓝奏云盘增强
// @namespace    https://github.com/1eb/UserScript
// @version      0.1
// @description  蓝奏云盘个人中心隐藏充值遮罩
// @author       1eb
// @match        *://pc.woozooo.com/mydisk.php?item=profile&action=mypower
// @match        *://www.lanzou.com/mydisk.php?item=profile&action=mypower
// @icon         https://www.lanzou.com/favicon.ico
// @grant        none
// @license      GPLv3
// @homepageURL  https://github.com/1eb/UserScript
// ==/UserScript==

(function() {
    'use strict';
    // $('#nopay').hide();
    var cover = document.getElementById('nopay');
    cover.style.display = 'none';
})();