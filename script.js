    var products=[];
    var prices=[];
    
$("#button1").click(function(){
    var q1 = $("#in1").val(); 
    var q2 = $("#in2").val(); 
    var q3 = parseInt($("#in3").val());
   
    $(".item").append(
        "<div class='rows'>" +
        "<img src=" + q1 + ">" +
         "<p class='p'>" + q2 + "</p>" +
         "<p class='p' id='p'>$" + q3 + "</p>" +
         "</div>"
        );
        
    products.push(q2);    
    prices.push(q3);   
    
    if(products.length > 1)
     {
        $("em").text(" " + products.length + " items in cart");
     
     }
   else if(products.length === 1){
        $("em").text(" " + products.length + " item in cart");
       }
    
    
    });
   
   
   
   
   
   
   $("#button2").click(function(){
    
    var total=0;
        prices.forEach(function(price){
        total= total + price;
        });
    
    if(products.length > 1)
     {
         var items = products.length -1;
     alert("Sorry your payment of $" + total + " had failed. In order for you to purchase " + products[0] + ", and another "+ items + " items please add your credit card information.");
     }
   else if(products.length === 1){
       alert("Sorry your payment of $" + total + " had failed. In order for you to purchase " + products[0] + ", please add your credit card information.");
       }
   });
