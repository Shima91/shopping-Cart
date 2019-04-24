var restaurantName = "Indian Heaven";
var order = [];

window.addEventListener("DOMContentLoaded",function(){
    //Listening for the Cancel link event
    UpdateCart();
    var lnkCancel = document.querySelector("#lnkStartOver")
    lnkCancel.addEventListener("click",function(){
        var areYouSure = confirm("Are you sure to cancel the order?");
        if(areYouSure){
            order = [];
            UpdateCart();
        }   
    });
    //Listening for the meals click
    var meals = document.querySelectorAll(".meal");
    for(var meal of meals){
        meal.addEventListener("click", function(){
            var title = this.dataset.title;
            order.push(title);
            UpdateCart();
        });
    }
});

function UpdateCart(){
    var html="";
    for(var meal of order){
        html += "<li>" + meal + "</li>";
    }
    var ul =  document.querySelector("#cart ul");
    ul.innerHTML = html;

    var cart = document.querySelector("#cart");
    if(order.length==0){
        cart.style.backgroundColor ="grey";
    } else{
        cart.style.backgroundColor ="#006";
    }
    
}