// 蒙版
let mb = document.getElementsByClassName('mb')[0];
// 区域分类部分
let area = document.getElementsByClassName('area')[0];
//区域 月租 房价 更多
let areatitleli = document.getElementsByClassName('areatitle')[0].children;
let hh2 = document.getElementsByClassName('hh2');
// console.log(areatitleli);
// 区域 月租 房价 更多详情模块
let items = document.getElementsByClassName('item');
// console.log(items);
let sp = document.getElementsByClassName('sp');
for (var i = 0; i < areatitleli.length; i++) {
    hh2[i].setAttribute('index', i);

    // console.log(areatitleli[i]);
    touch.on(hh2[i], 'tap', function () {
        var index_ = this.getAttribute('index');

        // console.log(this);
        // console.log(index_);
        area.className = 'area act';
        mb.style.display = 'block';

        for (var j = 0; j < items.length; j++) {
            hh2[j].className = 'hh2';
            hh2[index_].className = 'hh2 ac';
            sp[j].className = 'sp';
            sp[index_].className = 'sp spanac';
            items[j].style.display = 'none';
        }
        items[index_].style.display = 'block';

        touch.on(mb, 'tap', function () {
            area.className = 'area';
            items[index_].style.display = 'none';
            hh2[index_].className = 'hh2';
            sp[index_].className = 'sp';
            mb.style.display = 'none';


        });

    });


}

