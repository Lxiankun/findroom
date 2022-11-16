// 发送验证码
let sendnum = document.getElementsByClassName('sendnum')[0];
// 获取手机号码
let phonenumber = document.getElementsByClassName('phonenumber')[0].value;
// 获取验证码
let yzm = document.getElementsByClassName('yzm')[0].value + 0;
// 获取新密码
let newpassword = document.getElementsByClassName('newpassword')[0].value;
let pwdonce = document.getElementsByClassName('pwdonce')[0].value;
// 提交
let btnup = document.getElementsByClassName('btnup')[0];
let num = 0;
// 点击发送验证码 弹出四位随机数
// console.log(yzm);
touch.on(sendnum, 'tap', function () {
    suiji();
    let i = 30;
    let timer = null;
    clearInterval(timer);
    timer = setInterval(function () {
        i--;
        sendnum.innerHTML = i + '秒后再试';
        if (i <= 0) {
            sendnum.innerHTML = '发送验证码'
            i = 30;
            clearInterval(timer);
        }
    }, 1000);
});

// 提交
touch.on(btnup, 'tap', function () {
    //    匹配输入的验证码是否一致
    let yzm = document.getElementsByClassName('yzm')[0].value;
    let newpassword = document.getElementsByClassName('newpassword')[0].value;
    let pwdonce = document.getElementsByClassName('pwdonce')[0].value;
    let phonenumber = document.getElementsByClassName('phonenumber')[0].value;
    // console.log(parseInt(yzm));
    yzm = parseInt(yzm);
    let a = 0;
    let b = 0;
    // console.log('yzm=' + parseInt(yzm.value));
    // console.log('num=' + num);
    if (yzm == num) {
        a = 1;
        // alert('成功');
    } else {

        alert('验证码错误');
    }

    // 两次密码是否一致
    if (newpassword == pwdonce) {
        b = 1;
    } else {
        alert('两次密码不一致');
    }

    if (a == 1 && b == 1) {
        if (parseInt(phonenumber) == getCookie('phone')) {
            setCookie('password', newpassword);
            alert('修改成功');
            window.location.href = '../../public/login.html';
        } else {
            alert('修改失败');
        }
    } else {
        alert('修改失败');
    }
});

// 四位随机数

function suiji() {
    num = Math.round(Math.random() * 10000);
    if (num < 1000) {
        num = num + 1000;
    }
    // console.log(num);
    alert('验证码：' + num);
    return num;


}