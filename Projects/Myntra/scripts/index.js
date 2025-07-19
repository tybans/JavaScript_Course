// let itemsContainerElement = document.querySelector(".items-container");

// let item = {
//   item_image: "images/1.jpg",
//   rating: {
//     stars: 4.5,
//     reviews: "1.4k"
//   },
//   company_name: "Carlton London",
//   item_name: "Rhodium-Plated CZ Floral Studs",
//   price: {
//     current_price: "Rs 606",
//     original_price: "Rs 1045",
//     discount: "42"
//   },
// }

// itemsContainerElement.innerHTML = `
//         <div class="item-container">
//           <img class="item-image" src="${item.item_image}" alt="item-image">
//           <div class="rating">
//             ${item.rating.stars} ⭐ | ${item.rating.reviews}

//           </div>
//           <div class="company-name">${item.company_name}</div>
//           <div class="item-name">${item.item_name}</div>
//           <div class="price">
//             <span class="current-price">${item.price.current_price}</span>
//             <span class="original-price">${item.price.original_price}</span>
//             <span class="discount">(${item.price.discount}% OFF)</span>
//           </div>
//           <button class="btn-add-bag">Add to Bag</button>
//         </div>

// `;

// let innerHTML = "";

// items.forEach(item => {
//   innerHTML = innerHTML +  `
//         <div class="item-container">
//           <img class="item-image" src="${item.image}" alt="item-image">
//           <div class="rating">
//             ${item.rating.stars} ⭐ | ${item.rating.count}

//           </div>
//           <div class="company-name">${item.company}</div>
//           <div class="item-name">${item.item_name}</div>
//           <div class="price">
//             <span class="current-price">${item.current_price}</span>
//             <span class="original-price">${item.original_price}</span>
//             <span class="discount">(${item.discount_percentage}% OFF)</span>
//           </div>
//           <button class="btn-add-bag" onClick="addToBag()">Add to Bag</button>
//         </div>
// `;

// });
// itemsContainerElement.innerHTML = innerHTML;

let bagItems;
onLoad();


function onLoad() {
  let bagItemsString = localStorage.getItem("bagItems");
  bagItems = bagItemsString ? JSON.parse(bagItemsString) : [];
  displayItemsOnHomePage();
  updateBagItemCount();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems))
  updateBagItemCount();
}

function updateBagItemCount() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    // bagItemCountElement.style.display = "inline-block";
    bagItemCountElement.style.visibility = "visible";

    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
    // bagItemCountElement.style.display = "none";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");

  if (!itemsContainerElement) {
    // console.error("Items container element not found."); 
    return;
  }

  let innerHTML = "";

  items.forEach((item) => {
    innerHTML =
      innerHTML +
      `
        <div class="item-container">
          <img class="item-image" src="${item.image}" alt="item-image">
          <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}

          </div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
        </div>
`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}
