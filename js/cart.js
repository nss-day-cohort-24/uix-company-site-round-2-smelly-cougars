var quantity = document.forms["product1Quantity"]["quantity"].value;
console.log(quantity);

var price = document.getElementById("product1price").innerText;
console.log(price);

var totalPrice = quantity * price;
console.log(totalPrice);

document.getElementById("product1total").innerText = totalPrice.toFixed(2);

// define recalculate function for button so it reloads the totalPrice with the updated total using the updated quantity

function recalculate () {
    location.reload();
}

document.getElementById("grandTotal").innerText = totalPrice.toFixed(2);