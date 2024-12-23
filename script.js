var cartCards = document.querySelectorAll(".cart-card");
console.log(cartCards);
cartCards.forEach((cartCard)=>{
    var priceElement = cartCard.querySelector(".unit-price");
    var quantityElement = cartCard.querySelector(".quantity");
    var incrementBtn = cartCard.querySelector(".fa-plus-circle");
    var decrementBtn = cartCard.querySelector(".fa-minus-circle");
    var likeBtn = cartCard.querySelector(".fa-heart");
    var removeBtn = cartCard.querySelector(".fa-trash-alt");

    let price = parseInt(priceElement.textContent.replace(" $", ""));
    let quantity = parseInt(quantityElement.textContent);

    const incrementTotal = () => {
        const totalAmount = document.querySelector(".total-amount")
        const total = parseInt(totalAmount.textContent)
        totalAmount.textContent = total + price
    }

    const decrementTotal = () => {
        const totalAmount = document.querySelector(".total-amount")
        const total = parseInt(totalAmount.textContent)
        totalAmount.textContent = total - price
    }

    incrementBtn.addEventListener('click', () => {
       
        quantity += 1;
        quantityElement.textContent = quantity;
        incrementTotal()
}) 


    decrementBtn.addEventListener('click', () => {
        if (quantity > 0)
        quantity -=  1;
        QuantityElement.textContent = quantity;
        decrementTotal()
}) 

   removeBtn.addEventListener('click', ()=> {
    const totalItem = price * quantity;
    const totalAmount = document.querySelector(".total-amount")
    const total = parseInt(totalAmount.textContent)
    totalAmount.textContent = total - totalItem;
    cartCard.remove();

   })

   likeBtn.addEventListener('click', () => {
    const likeClassList = likeBtn.getAttribute("class")
    console.log(likeClassList)
    if(likeClassList.includes("fas")){
        likeBtn.setAttribute("class", "fa-regular fa-heart heart-icon")
    } else {
        likeBtn.setAttribute("class", "fas fa-heart heart-icon")
    }
})
       
    
})

    

































/*var deleteButton = document.getElementsByClassName("fas fa-trash-alt")
for(var i = 0; i < deleteButton.length; i++) {
    var dbutton = deleteButton[i]
    dbutton.addEventListener('click', function(event){
        var buttonDel = event.target
        buttonDel.parentElement.parentElement.parentElement.remove();
        updateCartTotal()
    })
}*/

  

 
