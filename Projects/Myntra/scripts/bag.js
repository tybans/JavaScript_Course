const CONVENIENCE_FEE = 99;

let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemsObjects();
  displayBagItems();
  displayBagSummary()
}


function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag-summary")

  let totalItems = bagItemObjects.length;
  let totalMRP = 0
  let totalDiscount = 0
  // let finalPayment = 0;

  bagItemObjects.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += (item.original_price - item.current_price);
    // finalPayment += item.current_price +  CONVENIENCE_FEE;
  });

let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;

  bagSummaryElement.innerHTML = `
   <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">Rs ${totalMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">Rs 99</span>
      </div>
       <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">Rs ${finalPayment}</span>
      </div>
    </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>
  `
}

// map() :- It converts array to another array of different type
function loadBagItemsObjects() {
  console.log(bagItems);
  // bagItems.map((itemId) => {
  //   let item = items.find((item) => item.id === itemId);
  //   if (item) {
  //     return item;
  //   } else {
  //     console.error(`Item with ID ${itemId} not found.`);
  //     return null;
  //   }
  // })
  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == itemId) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector(".bag-items-container");
  let innerHTML = "";
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateBagItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}


function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItgemId) => {
    return bagItgemId != itemId
  })
    localStorage.setItem("bagItems", JSON.stringify(bagItems))
  loadBagItemsObjects();
  updateBagItemCount()
  displayBagItems();
  displayBagSummary();
}



/*
We have only ID in a bag item. 
We need to fetch Item based on the ID, and then generate the HTML for the bag item.
And Assign that HTML here
*/
function generateBagItemHTML(item) {
  return `
    <div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="../${item.image}">
      </div>
      <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>

      <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
    </div>
  `;
}
