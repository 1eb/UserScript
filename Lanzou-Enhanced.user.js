// ==UserScript==
// @name         蓝奏云盘增强
// @namespace    https://github.com/b1n23/UserScript/blob/main/Lanzou-Enhanced.user.js
// @version      0.1
// @description  蓝奏云盘个人中心隐藏充值遮罩
// @author       b1n23
// @match        *://pc.woozooo.com/mydisk.php?item=profile&action=mypower
// @match        *://www.lanzou.com/mydisk.php?item=profile&action=mypower
// @icon         https://www.lanzou.com/favicon.ico
// @grant        none
// @homepageURL  https://github.com/b1n23/UserScript
// @updateURL    https://github.com/b1n23/UserScript/raw/main/Lanzou-Enhanced.user.js
// @downloadURL  https://github.com/b1n23/UserScript/raw/main/Lanzou-Enhanced.user.js
// ==/UserScript==

(function() {
    'use strict';
    // $('#nopay').hide();
    var cover = document.getElementById('nopay');
    cover.style.display = 'none';
})();
