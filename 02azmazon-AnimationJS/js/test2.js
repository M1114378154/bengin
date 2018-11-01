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



//-----------获取相关元素---------
// 获取一组带图像的超链接
var imagesA = document.getElementById("images").children;
//获取一组li文本
var txtList = document.querySelector(".info").children;

//行内样式实现更换显示样式
// var img4=document.getElementById('images').children[4];
// imagesA[4].style.display="block";//显示第五张图片

// // var img0=document.getElementsByClassName('displayImg')[0];
// imagesA[0].style.display="none";//隐藏第1张图片

//通过更换CC类名来实现更换样式
// imagesA[0].className="hiddenImg";
// imagesA[4].className="displayImg";


//初始化当前显示的图片/文本编号
var currentNo = 0;
const nodeLength = 8;

//计时器换片函数，间隔1S被调用,显示1张图像，其余图像隐藏。文本轮流高亮
function changeImg() {
    // 获取图片/文本总数量

    // 排他原理1 ，将同类设置为统一状态，
    for (var i = 0; i < nodeLength; i++) {
        // 同类图片透明度0（.hiddenImg)
        imagesA[i].className = "hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className = "txtItem normalColor";
    }
    //排他原理2，突出自己，当前图片透明度1(.displayImg)3
    imagesA[currentNo].className = "displayImg";
    // 排他原理2，文本高亮
    txtList[currentNo].className = "txtItem heighlightColor";
    //    console.log(currentNo);
}

function leftImg() {     
    if (currentNo > 0) { currentNo--; }
    else {
        currentNo = 7;
    } 
}

function rightImg() {
    if (currentNo < 7) { currentNo++; }
    else {
        currentNo = 0;
    }  
}

 
//-------启动计时器--------------
//网页加载后启动定时器,每隔1秒调用changeImg（）换片
var timer = window.setInterval(rightImgGo, 1000);


//---------停止计时器-----------
//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange() {
    window.clearInterval(timer);
    // console.log('father');
}

//鼠标移入后重设定时器
function startChange() {
    timer = window.setInterval(rightImgGo, 1000);
}

//获取控件按钮(sliderDiv以注册移入移出事件)
var sliderDiv = document.querySelector(".slider");
//console.log(sliderDiv);

//-----------为各元素添加事件------------
//为sliderDiv添加鼠标移入移出事件(侦听器)
// sliderDiv.addEventListener('mouseover', stopChange);
//匿名函数
// sliderDiv.addEventListener('mouseover', function () {window.clearInterval(timer);});
//箭头函数
sliderDiv.addEventListener('mouseover',  ()=> {clearInterval(timer);});

//匿名函数
 sliderDiv.addEventListener('mouseout', function(){ timer = window.setInterval(rightImgGo, 1000);});

//为所有文本li注册鼠标移入事件，移入之后，当前li高亮，跳转到对应图片（移出事件由父亲管）
for (var i = 0; i < txtList.length; i++) {
    txtList[i].addEventListener('mouseover', function(){currentNo = this.no; changeImg();});
    //添加自定义属性no 记录当前li的编号
    txtList[i].no = i;
    // console.log(txt[i].no);
}

//移入之后，当前li高亮，跳转到对应图片
function gotoImg() {
    // console.log(txt[i]);
    // console.log('son');
    //获得当前显示图像的编号/文本编号 this 是当前事件发生的本体
    // console.log(this.no);
    currentNo = this.no; 
    changeImg();
}

var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');


//---------上下一张注册事件-------------
leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);

function leftImgGo(){
    leftImg();
    changeImg();
}

function rightImgGo(){
    rightImg();
    changeImg();
}