let title_=document.querySelector('.title');
title_.onclick=function(){
    window.Event? window.event.cancelBubble=true:event.stopPropagation;
    window.location.href='../index.html';
}