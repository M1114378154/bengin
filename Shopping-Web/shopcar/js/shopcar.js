
window.onload=function()//网页加载完后自己执行一个函数
{
    var Win=document.querySelector('.win');//获取删除框的弹出层。
    var WinBox=document.querySelector('.win-box');//获取删除框
    var deleteList=document.querySelectorAll('.deleteBox');//获取所有的删除按钮


    for(var i=0;i<deleteList.length;i++)
    {
        //鼠标点击删除按钮的函数
        deleteList[i].onclick=function()//onclick是绑定事件(告诉浏览器在鼠标点击的时候要做什么)
        {
            Win.style.display="block";//显示弹出层
            WinBox.classList.add('InDown');//classList属性是返回元素的类名,添加动画
        }
    }
    //点击取消按钮，关闭弹出层
    WinBox.querySelector('.cancel').onclick=function()
    {
        Win.style.display="none";//关闭弹出层
        WinBox.classList.remove('InDown');//移除动画
    }
}
