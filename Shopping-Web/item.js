var imagesA=document.getElementById("images").children;

var currentNo=0;
function changeImg()
{
//排他原理，先去掉同类，再突出自己

  for(var i=0;i<imagesA.length;i++)
  {
      imagesA[i].className="hiddenImg";
    //   console.log(imagesA[i]);
  }
    //再突出自己
    imagesA[currentNo].className="displayImg"

    //换个元素，为下一个计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{currentNo=0;}

    // console.log(currentNo);

}
var timer=window.setInterval(changeImg,2000)