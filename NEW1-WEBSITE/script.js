let cart=[];
let total=0;

/* ADD TO CART */
function addToCart(name,price){
cart.push({name,price});
total+=price;
updateCart();
}

/* UPDATE CART UI */
function updateCart(){
document.getElementById("cartItems").innerHTML=
cart.map(item=>`<p>${item.name} - ₹${item.price}</p>`).join("");
document.getElementById("totalPrice").innerText=total;
document.getElementById("cartCount").innerText=cart.length;
}

/* TOGGLE CART */
function toggleCart(){
document.getElementById("cartPanel").classList.toggle("active");
}

/* WHATSAPP ORDER */
function placeOrder(){
let text="Order from Swad Maharashtracha:%0A";
cart.forEach(i=>{text+=`${i.name} - ₹${i.price}%0A`;});
text+=`Total: ₹${total}`;
window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`);
}

/* FILTER SYSTEM */
function filterMenu(type){
let cards=document.querySelectorAll('.card');
cards.forEach(c=>{
if(type==="all") c.style.display="block";
else if(c.classList.contains(type)) c.style.display="block";
else c.style.display="none";
});
}

/* SEARCH SYSTEM */
document.getElementById("searchBox").addEventListener("input",function(){
let val=this.value.toLowerCase();
document.querySelectorAll('.card').forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(val)?"block":"none";
});
});