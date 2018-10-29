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

//行内样式实现更换显示样式
// var img4=document.getElementById('images').children[4];
// imagesA[4].style.display="block";//显示第五张图片

// // var img0=document.getElementsByClassName('displayImg')[0];
// imagesA[0].style.display="none";//隐藏第1张图片

//通过更换CC类名来实现更换样式
// imagesA[0].className="hiddenImg";
// imagesA[4].className="displayImg";

// 利用计时器间隔1s，显示1张图像，其余图像隐藏
var currentNo = 0;
function changeImg() {
//排他原理，1.先去掉同类
for(var i=0;i<imagesA.length;i++){
    imagesA[i].className="hiddenImg";
    console.log(imagesA[i]);
}
// 或者
// for(const item of imagesA){
//     item.className="hiddenImg";
// }

//2. 再突出自己
    imagesA[currentNo].className = "displayImg";

    //3.换个元素，为下一次计时器调用做准备
    if (currentNo < 7) currentNo++;
    else {
        currentNo = 0;
    }
    //console.log(currentNo);
}

var timer=window.setInterval(changeImg,1000);

//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange(){
    window.clearInterval(timer);
}
//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function startChange(){
     timer=window.setInterval(changeImg,1000);
}
//获取控件按钮
var imagesDiv=document.getElementById("images");
console.log(imagesDiv);

//为按钮添加鼠标移入移出事件
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout', startChange);