// ==UserScript==
// @name         七星彩赔率变动方法
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @require     https://raw.github.com/borisCai/javascripSourse/master/qxc2.js
//@updateURL   https://raw.github.com/borisCai/javascripSourse/master/qxc2.js
//@installURL   https://raw.github.com/borisCai/javascripSourse/master/qxc2.js
//@downloadURL   https://raw.github.com/borisCai/javascripSourse/master/qxc2.js

// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   var user_name="aa1";
    var tj_pv=0.04;
    var qt_pv=0.04;
    var d = new Date(redate(user_name));
    //求自然月日期
    function getMonthBeforeFormatAndDay(num, format, day) {
        var date =  d;
        date.setMonth(date.getMonth() + (num*1), 1);
        //读取日期自动会减一，所以要加一
        var mo = date.getMonth() + 1;
        //小月
        if (mo == 4 || mo == 6 || mo == 9 || mo == 11) {
            if (day > 30) {
                day = 30
            }
        }
        //2月
        else if (mo == 2) {
            if (isLeapYear(date.getFullYear())) {
                if (day > 29) {
                    day = 29
                } else {
                    day = 28
                }
            }
            if (day > 28) {
                day = 28
            }
        }
        //大月
        else {
            if (day > 31) {
                day = 31
            }
        }
        var   retureValue = date.format('yyyy' + format + 'MM' + format + day);
        return retureValue;
    }

    //JS判断闰年代码
    function isLeapYear(Year) {
        if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
            return (true);
        } else { return (false); }
    }

    //日期格式化
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1, // month
            "d+": this.getDate(), // day
            "h+": this.getHours(), // hour
            "m+": this.getMinutes(), // minute
            "s+": this.getSeconds(), // second
            "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
            "S": this.getMilliseconds()
            // millisecond
        }

        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    } ;
    var d2= getMonthBeforeFormatAndDay(6, "/", d.getDate());

        //获取当前时间
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        var nowDate = year + "/" + month + "/" + day;
        if(new Date(nowDate)> new Date(d2)){
            alert('该功能已经于'+d2+'失效，请联系开发商!');
        } else{
    setTimeout(funcName,500);
        }

   function funcName() {
      var tb = document.getElementById("tbody2");
    if(tb !=null){
     $.each(tb.children,function(e){
           var hs=0.04;//四定位，头奖赔率
    var that=this;
         if(that.cells.length>1){
        var pv= that.cells[1].innerText.split(':')[1];
           var last_pv=pv*(1-hs);

         if(pv>1000){//头奖，个位数归0
              last_pv=String(last_pv).substring(0,3)+'0';
         }

         else {
             hs=0.04;//其他金额赔率
              last_pv=parseInt(pv*(1-hs));
          }

         that.cells[1].innerText="1:"+last_pv;
         }
     })
    }
   }


})();

