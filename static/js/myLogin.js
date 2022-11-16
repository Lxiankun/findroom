let myname = document.getElementsByClassName('myname')[0];
let tuichu = document.getElementsByClassName('tuichu')[0];

if (getCookie('rember_')) {
    myname.innerHTML = getCookie('phone');
} else {
    window.location.href = '../../public/my.html';
}

// 点击退出登录时跳转到未登录界面
touch.on(tuichu, 'tap', function () {
    claerCookie();
    window.location.href = '../../public/my.html';
});