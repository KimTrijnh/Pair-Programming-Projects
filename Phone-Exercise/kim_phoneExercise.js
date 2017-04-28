/* At first, I had litte consfusion about the THRESHOLD ( why have to put THRESHOLD
when we already have the spending limitation which is the bankbalance; so I tried to solve it my way. 
I wanted to have the customer buy phones and then buy accessory after eachphone within his budget; the flow would be like this:

buying phone(1) ---checking-overbuy-or-not(2)---> buy accessory(3) ---checking-overbuy-or-not(2)--> back-to-step(1).
(at checking points, if overbuying --> stop buying and return to customer the amount he is able to buy)

Link: http://jsbin.com/lijomeg/1/edit?js,console,output; 
*/





const PHONE=100; 
const ACC=10;     
const TAX=0.1;
var phone=PHONE*(1+TAX);  // phone price with tax
var acc=ACC*(1+TAX)       // accessory price with tax

var balance=prompt("Your bank balance?");    //ask customer bank balance

if (phone>balance){console.log("you don't have enough money")}

else{
  
  var p =0;             //number of phone
  var a=0;              //number of accessory
  var amount =phone*p + a*acc;        
  

  for(p=1; amount<balance; p++){
    
    amount =phone*p+a*acc;                  //update amount after update p     
                                       
    if(amount<balance) {                    //check if it is possible to buy 1 accessory after each phone
      
      a++;amount=phone*p+acc*a;              //buying 1 more acc; update amount after each acc
      if (amount<balance) {amount=amount;}   //if buying acc is ok; remember this amount for the next buying loop
      else{ a =a-1; amount=phone*p+acc*a;     //if over budget; return this acc and inform amount to customer.
           
           console.log ("your cart: phone: "+ p+"; accessory: "+ a +". Amount: "
                  + "$"+ amount.toFixed(2).toString() );break;} }
    
    else {p=p-1;amount =phone*p+a*acc;        // if over budget; return this phone and inform amount to customer.
          console.log("your cart: phone: "+ p+"; accessory: "+ a +". Amount: "
                  + "$"+ amount.toFixed(2).toString() );break;}
    
   

    
  }
}
  
  
  
