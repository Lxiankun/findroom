// 节流
var flag = true;
function setRem() {
    if (flag) {
        flag = false;
        var ui_w = 375;
        // 获取屏幕的宽度
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        // console.log(ui_w, clientWidth);
        clientWidth = clientWidth > 625 ? 625 : clientWidth;
        clientWidth = clientWidth < 300 ? 300 : clientWidth;
        // 通过js动态改变html根节点字体大小
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
        setTimeout(function () {
            flag = true;
        }, 300)
    }
}
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;
// 当页面加载完成调用
window.onload = setRem;