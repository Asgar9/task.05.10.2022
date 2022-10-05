let balance = 500;
function sum(a){
  return balance+a;
}
function sub(a){
    return balance-a;
}
function calculation (operator,a){
    switch (operator) {
     case "+":
      console.log("Artim... Mebleg",sum(a));  
      break;
     case "-":
       console.log("Hesabdan Cixarish... Mebleg",sub(a));  
       break;
     default:
       console.log(balance);
       break;
    }
}

 let operator=prompt("Emeliyyati secin:");
 let amount=Number(prompt("Meblegi daxil edin "));
 calculation(operator,amount);
