localStorage.setItem("key","value");//存储变量名为key，值为value的变量 
localStorage.getItem("key");//获取存储的变量key的值
localStorage.removeItem("key")//删除变量名为key的存储变量

var btnList = document.querySelectorAll('.btn-group .btn');
var totalQty = document.getElementsByName('totalQty')[0];



for (const key in btnList) {
    if (btnList.hasOwnProperty(key)) {
        const element = btnList[key];
        switch (element.name) {
            case 'increase': element.addEventListener('click', increaseValue); break;
            case 'decrease': element.addEventListener('click', decreaseValue); break;
            case 'addToCart': element.addEventListener('click', addToCart); break;
        }
    }
}
function increaseValue(e) {
    var qtyObj = e.target.nextElementSibling;
    var qty = parseInt(qtyObj.innerText);
    qty++;
    qtyObj.innerText = qty;
    console.log(qty);
}
function decreaseValue(e) {
    var qtyObj = e.target.previousElementSibling;
    var qty = parseInt(qtyObj.innerText);
    if (qty > 1) qty--;
    else qty = 0;
    qtyObj.innerText = qty;
    console.log(qty);
}

function addToCart(e) {
    var qtyObj = e.target.previousElementSibling.previousElementSibling;
    var qty = parseInt(qtyObj.innerText);
    var total = parseInt(totalQty.innerText);
    total += qty;
    totalQty.innerText = total;
}

//商品类
class Product {
    constructor(id, Sname, imgSRC, price) {
        // 商品类成员
        this.id = id;
        this.Sname = Sname;
        this.imgSRC = imgSRC;
        this.price = price;
    }
}

var product1 = new Product('01', '鼠标', '../image/KTV.png', 5.00);

// 订单类成员
class Order {
    constructor(product, qty, selectStatus) {

        this.id = product.id;
        this.Sname = product.Sname;
        this.price = product.price;
        this.imgSRC = product.imgSRC;
        this.qty = qty;
        this.selectStatus = selectStatus;
    }
}
var order = new Order(product1, 2, true);
var Sname = order.Sname;

// 购物车数据类---确定格式
class Cartdata {
    // 数据成员 订单列表 总样本 总件数 总金额
    constructor() {
        this.orderList = new Array();
        this.units = 0;//总样本
        this.totalQty = 0;//总件数
        this.totalAmount = 0;//总金额
    }
}
var cartdata = new Cartdata();

//购物车操作类
class ShoppingCart {

    //   将购物车数据写入本地存储中
    setDataToLocalStorage(cartdata) {
        var cartdataString = JSON.stringify(cartdata);
        // 写入本地存储
        localStorage.setItem('test', cartdataString);
    }
    //   从本地存储中获取购物车数据
    getDataFromLocalStorage() {
        
        let test=localStorage.getItem('test');
        if(test==null||test ==''){
            return new Cartdata();
        }
        else{
            return JSON.parse(test);
        }
    }
    //  获取选中对象的订单列表
    getSelectedList() {
      
    }
    // 获取选中对象列表的总数量
    getSelectedQty() {

    }
    // 获取选中对象列表的总价格
    getSelectedAmount() {

    }
    // 设置购物车订单项选中状态
    setItemSelectStatus(id, selectStatus) {

    }

    addToCart(order){
        myCart=this.getDataFromLocalStorage(); 
            // 订单2进购物车进myCart
        
            var isNewProduct = false;//假设isOldProduct是假，代表当前状态是新商品
            for (const i in myCart.orderList) {//遍历数组
              if (order.id == myCart.orderList[i].id) {
                isNewProduct = true;//新近订单的ID与购物车中某个商品的id相等，是购物车中已经存在的商品，修改状态
                // 新增对应qty
                myCart.orderList[i].qty += order.qty;
                break;
              }
            }
            if (!isNewProduct) {
              //  order是购物车中的新商品，给样本数++
              myCart.orderList.push(order);
              myCart.units++;
            }
            myCart.totalQty += order.qty;
            myCart.totalAmount = order.price * order.qty;
        
          }
        

    
    clearCart(){

    }

}