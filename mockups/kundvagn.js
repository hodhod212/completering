
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function klar() {
    alert("Du har slutfört ditt köp.");
   // $(".show-cart li").remove();
}
$(".add-to-cart").click(function(event) {
    event.preventDefault();
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));
    shoppingCart.addItemToCart(name,price,1);
    displayCart();
});       
$("#clear-cart").click(function(event){
    shoppingCart.ClearCart();
    displayCart();
});
function  displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    document.getElementById("show-cart").innerHTML = "";
    for (var i in cartArray) {
        var product = document.createElement("li")
        product.setAttribute('style','font-size:smaller;border-radius:5px; border:1px solid  #5596F5;display:inline-block;background-color:#F5F5F5;color:black;margin:4px;width:200px;')
        product.setAttribute('class','test');
        var myImage = document.createElement('img');
        myImage.setAttribute('src','assets/'+cartArray[i].price+'.png');
        product.appendChild(myImage);
        myImage.setAttribute('style',"display: block; margin-left: auto; margin-right: auto;")              
        var h4 = document.createElement('h4');
        h4.innerText = cartArray[i].name ;
        product.appendChild(h4);
        var Input = document.createElement('input');
        Input.setAttribute('class','item-count');
        Input.setAttribute('type','number');
        Input.setAttribute('style','width:33px;height:19px;border-radius:3px;display:inline;');
        Input.setAttribute('data-name',  cartArray[i].name );
        Input.setAttribute('value',  cartArray[i].count ); 
        product.appendChild(Input);
        var p2 = document.createElement('p');
        p2.setAttribute('type','number');
        p2.setAttribute('style','display:inline;');
        p2.setAttribute('data-name',  cartArray[i].name );
        p2.setAttribute('value',  cartArray[i].price );
        p2.innerHTML= " x " + cartArray[i].price+  " = " + cartArray[i].total.toFixed(2)+ " kr "+'<br>';
        product.appendChild(p2);
        var Button1 = document.createElement('button');
        Button1.setAttribute('data-name', cartArray[i].name);
        Button1.setAttribute('class', 'plus-item');
        Button1.innerHTML = '+';
        Button1.setAttribute('style','background-color: #E64E4E;color:white;border-radius:5px 0 0 5px;')
        product.appendChild(Button1);
        var Button2 = document.createElement('button');
        Button2.setAttribute('data-name', cartArray[i].name);
        Button2.setAttribute('class', 'subtract-item');  
        Button2.innerHTML = '-';
        Button2.setAttribute('style','background-color: #E64E4E;color:white;')
        product.appendChild(Button2); 
        var Button3 = document.createElement('button');
        Button3.setAttribute('class', 'delete-item');
        Button3.setAttribute('data-name',cartArray[i].name);
        Button3.innerHTML ="<i class='fa fa-trash-o' style='font-size:16px;color:white'> Ta bort</i>";
        Button3.setAttribute('style','background-color:#E64E4E;color:white;border-radius:0 5px 5px 0;')
        product.appendChild(Button3);
        document.getElementById("show-cart").appendChild(product); }
$("#show-cart").on("click", ".delete-item", function(event){ 
var name = $(this).attr("data-name");
shoppingCart.removeItemFromCartAll(name);
displayCart();
});
$("#clear-cart").click(function(event){
shoppingCart.ClearCart();
displayCart();
});
// $("#show-cart").html(output);
$("#count-cart").html(shoppingCart.countCart());
$("#total-cart").html(shoppingCart.totalCart());
}  
$("#show-cart").on("click", ".delete-item", function(event){
var name = $(this).attr("data-name");
shoppingCart.removeItemFromCart(name);
displayCart();
}); 
$("#show-cart").on("click", ".subtract-item", function(event){
var name = $(this).attr("data-name");
shoppingCart.removeItemFromCart(name);
displayCart();
});
$("#show-cart").on("click", ".plus-item", function(event){
var name = $(this).attr("data-name");
shoppingCart.addItemToCart(name,0,1);
displayCart();
});
$("#show-cart").on("change", ".item-count", function(event) {
    var name = $(this).attr("data-name");
    var count =Number($(this).val());
    shoppingCart.setCountForItem(name,count);
    displayCart();
})
displayCart();