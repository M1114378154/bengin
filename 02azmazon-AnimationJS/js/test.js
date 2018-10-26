
var timer;//设计定时器变量

//启动定时器函数定义 --若在启动定时器时有很多附加操作可以一并写入该函数
//若启动定时器动作单一，可以直接调用wwindow定时器
function startTimer(speed) {
    timer = window.setInterval(changeNum, speed);
}
//调用定时器，使程序从一开始就执行变化
startTimer(1000);

//获取h2元素
var h2obj = document.querySelector('h2');
var imgObj=document.querySelector('h2>img');
//console.log(h2obj);
console.log(imgObj);

//设置当前变化的号码变量及初值
var currentNo = 1;
// var flag = true;

//定义变化数字函数，0--9，到达9后变化到0
function changeNum() {
    //h2obj.textContent = currentNo; //节点文本内容

    //if(flag)//正向顺序{
    if (currentNo < 8) currentNo++;//数值在10之内
    else currentNo = 1;//10后跳回0
    //h2obj.textContent = currentNo;
    h2obj.innerHTML='<img src="./images/0'+currentNo+'.jpg" alt=""></img>'
    //console.log(currentNo);
    //}
    //else flag=false;
    // else{
    //     if(currentNo>0) currentNo--;
    //     else flag=true;
    // }
}
//console.log(timer);

//获取控件按钮
var btnObj = document.getElementById('btnObj')
// console.log(btnObj);

// btnObj.addEventListener('click', stopChangeNum);
// function stopChangeNum() {
//     if (flag) {
//         // window.clearInterval(timer);//清除文本
//         // btnObj.textContent = "启动";
//         stopChange();
//         flag = false;

//     }
//     else {
//         //timer=window.setInterval(changeNum,1000);
//         // startTimer(500);
//         // btnObj.textContent = "停止";
//         startChange();
//         flag = true;
//     }
// }

//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function startChange() {
    startTimer(1000);
    btnObj.textContent = "停止";
}

//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function stopChange() {
    window.clearInterval(timer);//清除文本
    btnObj.textContent = "启动";
}

//为按钮添加鼠标移入移出事件
btnObj.addEventListener('mouseover', stopChange);
btnObj.addEventListener('mouseout', startChange);

