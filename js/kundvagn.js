
// kundvagn
function klar() {
    alert("Du har slutfört ditt köp.");
    $(".show-cart li").remove();
}
fetch("products.json")
.then(function(response) {
return response.json();
})
.then(function(products) {
function  displayCart() {
    var cartArray = shoppingCart.listCart();
    document.getElementById("show-cart").innerHTML = "";
    for (var i in cartArray) {
        var product = document.createElement("li")
        product.setAttribute('class','test');
        var myImage = document.createElement('img');
        myImage.setAttribute('class','delete-image')  
        myImage.setAttribute('src','Images/'+cartArray[i].name+'.png');
        product.appendChild(myImage);     
        var h4 = document.createElement('h4');
        h4.innerText = cartArray[i].name ;
        product.appendChild(h4);
        var Input = document.createElement('input');
        Input.setAttribute('class','item-count');
        Input.setAttribute('type','number');
        Input.setAttribute('data-name',  cartArray[i].name );
        Input.setAttribute('value',  cartArray[i].count ); 
        product.appendChild(Input);
        var p2 = document.createElement('p');
        p2.setAttribute('type','number');
        p2.setAttribute('data-name',  cartArray[i].name );
        p2.setAttribute('value',  cartArray[i].price );
        p2.innerHTML= " x " + cartArray[i].price+  " = " + cartArray[i].total.toFixed(2)+ " kr "+'<br>';
        product.appendChild(p2);
        var Button1 = document.createElement('button');
        Button1.setAttribute('data-name', cartArray[i].name);
        Button1.setAttribute('class', 'plus-item');
        Button1.innerHTML = '+';
        product.appendChild(Button1);
        var Button2 = document.createElement('button');
        Button2.setAttribute('data-name', cartArray[i].name);
        Button2.setAttribute('class', 'subtract-item');  
        Button2.innerHTML = '-';
        product.appendChild(Button2); 
        var Button3 = document.createElement('button');
        Button3.setAttribute('class', 'delete-item');
        Button3.setAttribute('data-name',cartArray[i].name);
        Button3.innerHTML ="<i class='fa fa-trash-o'> Ta bort</i>";
        product.appendChild(Button3);
        document.getElementById("show-cart").appendChild(product);
    };
    
$("#clear-cart").click(function(event){
shoppingCart.ClearCart();
displayCart();
});
$("#count-cart").html(shoppingCart.countCart());
$("#total-cart").html(shoppingCart.totalCart());
$("#show-cart").on("click", ".delete-item", function(event){ 
    var name = $(this).attr("data-name");
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
    });
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
displayCart();
});
