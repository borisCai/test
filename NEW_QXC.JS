// ==UserScript==
// @name         NEW QXC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var temp_num=0;
  $(document.body).append('<div id="gototop"> <input type=button value="重新加载" name="gototop" id="gototop" > </div>');

  $('#gototop').click(function () {

      if(temp_num==0){
    var tb = document.getElementById("orderlist");
    if(tb !=null){
     $.each(tb.children,function(e){
           var hs=0.04;//四定位，头奖赔率
    var that=this;
        var pv= that.cells[1].innerText.split(':')[1];
           var last_pv=pv*(1-hs);

         if(pv>1000){//头奖，个位数归0
              last_pv=String(last_pv).substring(0,3)+'0';
         }
//          else if(700<pv && pv<1000){
//              hs=0.04;//三定位赔率
//               last_pv=parseInt(pv*(1-hs));
//          }else if(79<pv && pv<100){
//              hs=0.04;//二定位赔率
//               last_pv=parseInt(pv*(1-hs));
//         }else if(299<pv && pv<400){
//              hs=0.04;//四字现赔率
//               last_pv=parseInt(pv*(1-hs));
//           }else if(39<pv && pv<50){
//              hs=0.04;//三字现赔率
//               last_pv=parseInt(pv*(1-hs));
//           }else if(7<pv && pv<10){
//              hs=0.04;//二字现赔率
//               last_pv=parseInt(pv*(1-hs));
//           }
         else {
             hs=0.04;//其他金额赔率
              last_pv=parseInt(pv*(1-hs));
          }
           temp_num+=1;
         that.cells[1].innerText="1:"+last_pv;
     })
    }
    }

  });

})();

