var quantity = document.forms["product1Quantity"]["quantity"].value;
console.log(quantity);

var price = document.getElementById("product1price").innerText;
console.log(price);

var totalPrice = quantity * price;
console.log(totalPrice);

document.getElementById("product1total").innerText = totalPrice;

// define recalculate function for button so it reloads the totalPrice with the updated total using the updated quantity