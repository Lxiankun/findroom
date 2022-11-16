/**
 * 设置cookie
 * @param {string} name 名称
 * @param {string} value 值
 * @param {number} time  时间
 */
function setCookie(name,value,time){
    let date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie=`${name}=${value};expires=${date}`;
}
/**
 * 获取cookie
 * @param {string} key 名称
 * @returns 
 */
function getCookie(key) {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1];
        }
    }
}

/**
 * 删除cookie
 * @param {String} key 名称
 */
function removeCookie(key){
    this.setCookie(key, '', -1);
}
// 清空cookie 
function claerCookie(){
        var arry = document.cookie.split('; ');
        for (var item of arry) {
            var newArry = item.split('=');
            console.log(newArry);
            this.setCookie(newArry[0], '', -1);
        }
    
}