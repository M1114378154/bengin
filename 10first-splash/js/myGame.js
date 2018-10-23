var randomNumber=Math.floor(Math.random()*101); /*取0-100之间的随机数*/
//console.log(randomNumber);

var guessField/*与class或ID保持一致*/=document.querySelector(".guessField");
console.log(guessField);
//console.log(guessField.value);/*找出值*/
//console.log(guessField.type);

var guesses=document.querySelector('.guesses');
console.log(guesses);
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.loworHi');
var guessSubmit =document.querySelector('.guessSubmit');

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess(){
   // document.write('结论');
   guesses.innerHTML +=guessField.value+"  ";
   guesses.style.backgroundColor="skyblue";
}

//checkGuess();
//checkGuess("avc","sss");
//checkGuess(1,"2");