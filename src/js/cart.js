/* 
思路分析
    1、全选框选中，单选框全部选中，选中状态为checked属性

    2、单选框全部选中，全选框也跟着选中，选中状态为checked属性

*/
/* 入口函数 */

$(function(){
    
    $(".gouwuche_pro").on("click",".gouwuche_pro",function(aa){
        var target = $(aa.target)
        if($(".input_checkbox").checked){
            var zj =  parseInt(target.find("option:selected").val())
            count+= parseInt($(ele).find("option:selected").val())
            money+=parseFloat($(ele).children("span").html());
            $("#total").html(money.toFixed(2))
            $("#num").html(count)
        }
        
        getNum()
    })
   
/* 
    1、全选框选中，单选框全部选中，选中状态为checked属性
    */
   $(".input_checkbox").change(function(){
    // console.log( $(this).prop("checked"));
    $(".input_checkbox2").prop("checked",$(this).prop("checked"));
   
})
 /* 
    2、单选框全部选中，全选框也跟着选中，
    选中状态为checked属性
    */
$(".input_checkbox2").change(function(){
    $("")
    if($(".input_checkbox2:checked").length === $(".input_checkbox2").length){
        $(".input_checkbox").prop("checked", true);
    }else{
        $(".input_checkbox").prop("checked",false);
    }
    getNum()
})


   /* 3、增加商品数量，只增加当增加商品,
    获取商品小计，只计算当前商品的小计，单价*当前商品的数量，得当前该商品的小计 ,.toFixed(2)保留两位小数
    */
$('.gouwuche_pro').on("click",".input_select",function(event){
    var target=$(event.target)
    var n =  parseInt(target.find("option:selected").val())
    var p = target.parent().next().children("span").html();
    var price = target.parent().next().next().children("span").html((p*n).toFixed(2))
    
    getNum()
})
    /* 
    4、计算总件数和所有勾选商品总计
    */
    getNum();
    function getNum(){
        var count = 0;//商品总件数
        $(".input_select").each(function(i ,ele){
            count+= parseInt($(ele).find("option:selected").val())
        }); 
        var money = 0;//商品总计
       
        $(".one_text7").each(function(i,ele){
            money+=parseFloat($(ele).children("span").html());
         })
         $("#total").html(money.toFixed(2))
     
       $("#num").html(count)
         
    }
 
    /* 
    5删除当前商品
    */
   $(".deleteItem").click(function(){
        // 删除当前商品
        $(this).parents(".gw_pro_c_one").remove()
    getNum()
   })
//    7 清空购物车
   $("#clearCart").click(function(){
       $(".gw_pro_c_one").remove();
       getNum()
   })


   /* 
   8、增加商品购物车背景颜色和特效
   
   */
    $("#cartItem li").mouseover(function(){
        $("#cartItem li").toggleClass("active ")
        $(".one_text4").toggleClass("one_text4_active")
       
      
    })

    $("#cartItem li").mouseout(function(){
        $("#cartItem li").removeClass("active ") 
        $(".one_text4_active").toggleClass("one_text4_active")
        
    })

    /* 
    10：结算跳转，删除当前页面的商品
    */
  
    $("#jieshuang").click(function(){
    //   获取总价
    var totalPrice = 0
    $(".one_text7").each(function(i,ele){
        totalPrice +=parseFloat($(ele).children("span").html());
       
        getNum()
     })
        alert("你确定购买这些商品，一共支付："+totalPrice +"元")
        $(".gw_pro_c_one").remove();
        getNum()
    })



})



