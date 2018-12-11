var listOfProducts;
function loadProducts() {
    fetch("products.json")
    .then(function(response) {
    return response.json();
    })
    .then(function(products) {
    listOfProducts = products;
    addProductsToWebpage();
});
};
function initSite() {
    $("#count-cart").html(shoppingCart.countCart());
loadProducts();}
function addProductsToWebpage() {
    var ul = document.createElement('ul');
    for ( i in listOfProducts) {
        var li = document.createElement('li');
        li.setAttribute('class','styles');
        var h3 = document.createElement('h3');
        h3.innerText = listOfProducts[i].title;
        var p = document.createElement('p');
        p.innerText = listOfProducts[i].description;
        var myImage = document.createElement('img');
        myImage.setAttribute('src','assets/'+listOfProducts[i].image);
        var h6 = document.createElement('h6');
        h6.innerText = listOfProducts[i].price+' kr';
        var Button = document.createElement('button');
        Button.setAttribute('data-name', listOfProducts[i].title);
        Button.setAttribute('data-price', listOfProducts[i].price);
        Button.setAttribute('src','assets/'+listOfProducts[i].image);
        Button.setAttribute('class', 'add-to-cart');
        Button.innerHTML = '<i class="fa fa-cart-arrow-down" ></i>lägg till kundvägnen';
        h6.appendChild(Button);
        p.appendChild(myImage);
        p.appendChild(h6)
        li.appendChild(h3);
        li.appendChild(p);
        document.body.appendChild(li); }      
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
        $("#show-cart").html(output);
        $("#count-cart").html(shoppingCart.countCart());
        $("#total-cart").html(shoppingCart.totalCart());
    }
        $("#show-cart").on("click", ".delete-item", function(event){
        var name = $(this).attr("data-name");
        shoppingCart.removeItemFromCartAll(name);
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
} 
  
   

   
