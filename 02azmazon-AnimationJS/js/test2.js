// // CSS选择器--document.querySelector（）
// var img4=document.querySelector('#images>a:nth-child(4)');
// //ID--document.getElementById（）
// var img4=document.getElementById('images').children[4];
// //类名--document.getElementsByClassName（）
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名--document.getElementsByTagName（）
// var img4=document.getElementsByTagName('a')[4];

// console.log(img4);
// img4.style.display="block";


// 获取一组带超链接的图像
var imagesA = document.getElementById("images").children;
console.log(imagesA);

// 获取一组li文本
var txt = document.querySelectorAll('.info>li');
//或者： var txt=document.querySelector(".info").children;
console.log(txt);

//行内样式实现更换显示样式
// var img4=document.getElementById('images').children[4];
// imagesA[4].style.display="block";//显示第五张图片

// // var img0=document.getElementsByClassName('displayImg')[0];
// imagesA[0].style.display="none";//隐藏第1张图片

//通过更换CC类名来实现更换样式
// imagesA[0].className="hiddenImg";
// imagesA[4].className="displayImg";

//当前显示的图片/文本编号
var currentNo = 0;
const nodeLength=8;
// 利用计时器间隔1s，显示1张图像，其余图像隐藏
function changeImg() {
    //排他原理，1.先去掉同类，同类图片透明度为0（.hiddenImg）
    var nodeLength = txt.length
    for (var i = 0; i < nodeLength; i++) {
        imagesA[i].className = "hiddenImg";
        console.log(imagesA[i]);
        txt[i].className = 'txtItem normalColor';
    }
    // 或者
    // for(const item of imagesA){
    //     item.className="hiddenImg";
    // }

    //2. 再突出自己，当前图片透明度为1(.displayImg)
    imagesA[currentNo].className = "displayImg";
    txt[currentNo].className = 'txtItem heighlightColor';

 function leftButton(){
      if (currentNo >0) currentNo--;
    else {
        currentNo = 7;
    }
 }

 function rightButton(){
      if (currentNo < 7) currentNo++;
    else {
        currentNo = 0;
    }
 }


    //3.换个元素，为下一次计时器调用做准备
   
    //console.log(currentNo);

//网页加载后启动定时器,每隔1秒调用changeImg（）换片
var timer = window.setInterval(changeImg, 1000);

//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange() {
    window.clearInterval(timer);//鼠标移出后移除定时器
}
//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function startChange() {
    timer = window.setInterval(changeImg, 1000);//鼠标移入后重设定时器
}
//获取控件按钮(sliderDiv以注册移入移出事件)
var sliderDiv = document.querySelector(".slider");
//console.log(sliderDiv);
//为sliderDiv添加鼠标移入移出事件(侦听器)
sliderDiv.addEventListener('mouseover', stopChange);
sliderDiv.addEventListener('mouseout', startChange);

//为所有文本li注册鼠标移入事件，移入之后，当前li高亮，跳转到对应图片（移出事件由父亲管）
for (var i = 0; i < txt.length; i++) {
    txt[i].addEventListener('mouseover', gotoImg);
    //添加自定义属性no 记录当前li的编号
    txt[i].no = i;
    // console.log(txt[i].no);
}

//移入之后，当前li高亮，跳转到对应图片
function gotoImg() {
    // console.log(txt[i]);
    // console.log('son');
    //获得当前显示图像的编号/文本编号 this 是当前事件发生的本体
    console.log(this.no);
    //调用更换图片/文本函数
    currentNo = this.no;
    changeImg();
}

var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('rightButton');

leftButton.addEventListener('click', leftImg);
rightButton.addEventListener('click', rightImg);

function leftImg() {
    leftImg();
    changeImg();
}

function rightImg() {
    rightImg();
    changeImg();

}
}