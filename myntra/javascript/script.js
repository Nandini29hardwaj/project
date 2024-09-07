
let bagItems;
onLoad();

// on load function
function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems= bagItemsStr ? JSON.parse(bagItemsStr): [];
  displayItems();
  displayBagIcon();
}


// add to bag function
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems))
  displayBagIcon();
}

// display element count added to bag icon
function displayBagIcon(){
  let bagItemCountEle= document.querySelector(".bag-item-count");
  if (bagItems.length >0){
    bagItemCountEle.style.visibility = 'visible';
    bagItemCountEle.innerText = bagItems.length;
  }else{
    bagItemCountEle.style.visibility = 'hidden';
  }
  

}


// display items function
function displayItems() {
  let itemsContainerElement = document.querySelector('.items-container');
  if(!itemsContainerElement){
    return;
  }
let innerHTML ='';

   // FOR EACH LOOP ON ITEMS
items.forEach(item => {
  innerHTML+= `
  <div class="item-container">
  <img class="item-image" src="${item.image}" alt="item image"> 
  <div class="rating">
      ${item.rating.stars} ⭐ | ${item.rating.count}
  </div>
  <div class="company-name">
     ${item.company}
  </div>
  <div class="item-name">
      ${item.item_name}
  </div>
  <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`;

});

itemsContainerElement.innerHTML= innerHTML;

}




// let item ={
//   item_image:'images/1.jpg',
//   rating:{
//     stars:4.5,
//     noOfReviews:1400,
//   },
//   companyName:'Style Symphony',
//   itemName:'Rhodium plated floral studs earrings ',
//   current_price:606,
//   original_price:1045,
//   discount:42,

// }


