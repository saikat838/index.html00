let price = 399;
let qty = 1;

function plus(){
qty++;
document.getElementById("qty").value=qty;
document.getElementById("total").innerHTML=qty*price;
}

function minus(){
if(qty>1){
qty--;
document.getElementById("qty").value=qty;
document.getElementById("total").innerHTML=qty*price;
}
}
