window.onload=function(){
   
    function fn1(){
         //  获取当前时间
     // 计算时间差:计算现在到活动的时间差
        var date1 = new Date();
         var date2 = new Date(2020,8,27,23);
    //    var date2 = new.setDate(2020,8,27,24)
     // 1 先获取两个时间距离格林威治时间的毫秒数
     date2 = date2.getTime();
     date1 = date1.getTime();

      // 2 两个时间差相减,就可以得到两个时间之间相差的毫秒数
     var diff = date2 - date1;
    // 3 把毫秒换算成:天,小时,分钟,秒

    // 天数
    // 一天的毫秒数是:1000*60*60*24
    var day = diff/(1000*60*60*24)
    // 向下取整,不足一天的小数部分变成小时
    day = Math.floor(day)

     //小时
    // 把天数剩下毫秒数来计算
    diff = diff - day*1000*60*60*24;
    // 一小时的毫秒数:1000*60*60
    var hour = diff/(1000*60*60);
    // 向下取整,不足一小时的部分变成分钟
    hour = parseInt(hour)

    //分钟
    // 把小时剩下的毫秒数来计算
    diff = diff - 1000*60*60*hour
    // 一分钟的毫秒数:60*1000
    var minute = diff/(60*1000)
    // 向下取整,不足一分钟的部分变成秒
    minute = Math.floor(minute)

    //秒
    // 把分钟剩下的毫秒来计算
    diff = diff - 60*1000*minute;
    // 一秒的毫秒数:1000
    var second = Math.floor(diff/1000);

    //把倒计时显示在span标签里面
    var countdown = document.querySelector('.countdown')
    countdown.innerHTML=` <span>${hour}</span><i>:</i><span>${minute}</span><i>:</i><span>${second}</span></div>`
        
    }
    setInterval(fn1,1000) 
    fn1();
   }