function FangDaJin(ele){
    this.ele=ele//最大的盒子
    this.product_nr = document.querySelector('.product_nr')
    this.product_l_one=this.ele.querySelector('.product_l_one') //左边带边框大盒子
    this.mark=this.ele.querySelector('.mark') //阴影小盒子
    this.wrap = this.ele.querySelector('.wrap')//左边原图片盒子
    this.wrapImg = this.wrap.querySelector('img')

    this.rightBox=this.ele.querySelector('.rightBox')//右边大盒子
    this.rightImg=this.rightBox.querySelector('img') //右边大盒子里的图片

    this.product_tupian = this.ele.querySelector('.product_tupian')
    this.product_neirong = this.product_tupian.querySelector('.product_neirong')
    this.ul = this.product_neirong.querySelector('.product_mil')
    this.lis = this.ele.querySelectorAll('li')
    
    this.liImg = this.ele.querySelectorAll('img')
   
    // 初始化方法
    this.init()

}

FangDaJin.prototype.init = function(){
    this.bindClick()
    this.bindMouse()
}
// 给所有小图片绑定点击事件
FangDaJin.prototype.bindClick=function(){
    //给所有的小图片绑定点击事件
    var _this=this
    // 遍历所有小图片对象
    for(let i=0;i<_this.liImg.length;i++){
        _this.liImg[i].onclick=function(){
            // 把所有小图片的类名清空
            for(let j=0;j<_this.liImg.length;j++){
                _this.liImg[j].className=' '
               
            }
           
            //给当前选中的小图片添加class属性值
            this.className='active'
             //获取当前小图片的src属性值
            let src1=this.getAttribute('src')
            //使用选中的小图片路径替换原来盒子的图片
           
             //使用选中的小图片路径替换左右两个大盒子中的图片路径
             _this.wrapImg.setAttribute('src',src1)
             _this.rightImg.setAttribute('src',src1)
        }
    }
}
//绑定鼠标事件
FangDaJin.prototype.bindMouse=function(){
    var _this=this
    // 给左边大盒子绑定鼠标移入事件
    _this.product_l_one.onmouseover=function(e){
        var e = window.event || e
        _this.mark.style.display='block'
        _this.rightBox.style.display='block'
        _this.move(e)
    }

     //绑定鼠标移动事件
    _this.product_l_one.onmousemove = function(e){
         var e = window.event || e
         _this.move(e)
     }
     //绑定鼠标移出事件
    _this.product_l_one.onmouseout = function(){
        _this.mark.style.display='none'
        _this.rightBox.style.display='none'
     }

}

// 运动函数
FangDaJin.prototype.move=function(e){
    // 获取光标相对于当前product_l_one盒子对象的偏移位置
    var x=e.pageX - this.product_nr.offsetLeft - (this.mark.offsetWidth/2)
    var y=e.pageY - this.product_nr.offsetTop - (this.mark.offsetHeight/2)
    
    //设置边界条件
    let minX=0,minY=0
    let maxX=this.product_l_one.offsetWidth - this.mark.offsetWidth
    let maxY=this.product_l_one.offsetHeight - this.mark.offsetHeight

//判断边界条件
if(x<minX){
    x=minX
}else if(x>=maxX){
    x=maxX
}
  //给小盒子设置水平偏移量
    this.mark.style.left= x+'px'
    /* this.mark.style.top = y+'px' */
if(y<=minY){
    y=minY
}else if(y>=maxY){
    y=maxY
}





    //给小盒子设置水平偏移量
    this.mark.style.left=x+'px'
    this.mark.style.top=y+'px'
    //移动右边盒子中图片
    this.rightImg.style.left=-2*x+'px'
    this.rightImg.style.top=-2*y+'px'
}


