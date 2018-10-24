//var randomNumber = Math.floor(Math.random() * 101); /*取0-100之间的随机数*/
var randomNumber=30;
//console.log(randomNumber);
//console.log(guessField.value);/*找出值*/
//console.log(guessField.type);

var guesses = document.querySelector('.guesses');
console.log(guesses);
var lastResult = document.querySelector('.lastResult');
console.log(lastResult);
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField/*与class或ID保持一致*/ = document.querySelector(".guessField");
console.log(guessField);

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
    // document.write('结论');
    var userGuess = Number(guessField.value); //设置变量
    console.log(typeof userGuess);
    console.log(userGuess);
     guesses.textContent +=userGuess+"  ";
    //guesses.style.backgroundColor="red";

    //checkGuess();
    //checkGuess("avc","sss");
    //checkGuess(1,"2");


    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜你猜对了！';
        lastResult.style.backgroundColor = 'skyblue';
        lowOrHi.textContent = ' ';
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = '游戏结束';
        lowOrHi.textContent = ' ';
        setGameOver();
    }
    else {
        lastResult.textContent = '你猜错了！';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = '你猜小了！';
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = '你猜大了！';
        }
    }
    //猜数自增
    guessCount++;
    //清空文字区  
    guessField.value = '';
    //文字输入区获得焦点
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    var resetButtonP =document.querySelector("div.resultParas p:last-child");
    console.log(resetButtonP);
    resetButtonP.style.display="block";
}
//设置游戏结束状态
function setGameOver(){
    //禁用文本输入框
    guessField.disabled=true;
    //禁用确定按钮
    guessSubmit.disabled=true;
    //创建button元素 button为HTML按钮的标签名
    resetButton=document.createElement('button');
    //为新生成的元素resetButton设置文本内容
    resetButton.textContent='开始新游戏';
    //将resetButton作为body的小孩加入页面
    document.body.appendChild(resetButton);
    //为resetButton设置单击事件侦听器
    resetButton.addEventListener('click',resetGame);
}

//重置游戏 在单击重新开始按钮时被调用
function resetGame() {
    //重置游戏次数
    guessCount = 1;
    //获取结论区所有的p元素
    var resetParas = document.querySelectorAll('.resultParas p');
    //使用循坏将所有结论区的p元素文本内容置空串
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    //通过resetButton的父元素移除resetButton（重新开始游戏按钮）
    resetButton.parentNode.removeChild(resetButton);
    //设置文本输入框状态为可用
    guessField.disabled = false;
    //设置确定按钮状态为可用
    guessSubmit.disabled = false;
    //清空文本输入框内容
    guessField.value = '';
    //使文本框获得焦点
    guessField.focus();
    //设置结论区背景色为白色
    lastResult.style.backgroundColor = 'white';
    //重置猜数值
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  