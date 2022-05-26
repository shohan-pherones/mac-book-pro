//total price calculation
function getTotalPrice(component, clickedPrice) {
  let increasingPrice = clickedPrice;
  const componentPrice = document.getElementById(component + "-price");
  const totalPriceDisplay = document.getElementById("total-price");
  let totalPrice = parseInt(document.getElementById("total-price").innerText);
  componentPrice.innerText = increasingPrice;
  totalPrice = totalPrice + increasingPrice;
  totalPriceDisplay.innerText = totalPrice;
}

//price calculation
function getPrice(componentSize) {
  if (componentSize == "8gb-memory") {
    getTotalPrice("memory", 0);
  } else if (componentSize == "16gb-memory") {
    getTotalPrice("memory", 50);
  } else if (componentSize == "32gb-memory") {
    getTotalPrice("memory", 100);
  } else if (componentSize == "256gb-ssd") {
    getTotalPrice("storage", 0);
  } else if (componentSize == "512gb-ssd") {
    getTotalPrice("storage", 100);
  } else if (componentSize == "1tb-ssd") {
    getTotalPrice("storage", 200);
  } else if (componentSize == "regular-shipment") {
    getTotalPrice("delivery", 0);
  } else if (componentSize == "urgent-shipment") {
    getTotalPrice("delivery", 10);
  }
}

//memory handler
document.getElementById("8gb-memory").addEventListener("click", function () {
  getPrice("8gb-memory");
});
document.getElementById("16gb-memory").addEventListener("click", function () {
  getPrice("16gb-memory");
});
document.getElementById("32gb-memory").addEventListener("click", function () {
  getPrice("32gb-memory");
});

//storage handler
document.getElementById("256gb-ssd").addEventListener("click", function () {
  getPrice("256gb-ssd");
});
document.getElementById("512gb-ssd").addEventListener("click", function () {
  getPrice("512gb-ssd");
});
document.getElementById("1tb-ssd").addEventListener("click", function () {
  getPrice("1tb-ssd");
});

//delivery handler
document
  .getElementById("regular-shipment")
  .addEventListener("click", function () {
    getPrice("regular-shipment");
  });
document
  .getElementById("urgent-shipment")
  .addEventListener("click", function () {
    getPrice("urgent-shipment");
  });
