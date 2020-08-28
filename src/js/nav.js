var dropNav = document.querySelector('.drop_nav');
var dropNavContent = document.querySelector('.drop_nav_content')
dropNav.onmouseenter=function(){
    dropNavContent.style.display="block"
}
dropNav.onmouseleave = function(){
    dropNavContent.style.display="none"
}