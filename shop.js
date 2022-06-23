console.log("Shop.js");
let containerProducter = document.querySelector(".card-row");
let addToCart = document.getElementsByClassName(".add-to-cart");

let product = [
  {
    name: "Sko",
    img: "background",
    price: 6,
    id: 1,
    info: "här är lite text om producten",
  },
  {
    name: "Rolex",
    img: "background",
    price: 100,
    id: 2,
    info: "här är lite text om producten",
  },
  {
    name: "T-shirt",
    img: "background",
    price: 11,
    id: 3,
    info: "här är lite text om producten",
  },
  {
    name: "Keps",
    img: "background",
    price: 12,
    id: 4,
    info: "här är lite text om producten",
  },
];

console.log(product);

function addObject(product) {
  product.forEach(function (cards) {
    const card = document.createElement("div");
    card.classList.add("card-wrapper");
    card.setAttribute("data-id", cards.id);
    card.innerHTML = `
          
        <img src="img/${cards.img}.jpg" alt="${cards.name}" />
        <div class="info-wrapper">
          <div class="price-info">
            <p>${cards.name}</p>
            <p>${cards.price}$</p>
          </div>
          
        </div>
          
      
  `;

    card.addEventListener("click", function (event) {
      let id = event.target.parentElement.getAttribute("data-id");
      getApiMovieDetails(cards.id);
    });

    containerProducter.appendChild(card);
  });
}

function getApiMovieDetails(id) {
  console.log(id);
  let newId = id - 1;
  console.log(product[newId].name);

  const infoCard = document.createElement("div");
  infoCard.classList.add("info-card");
  infoCard.innerHTML = `
   <div>
    <p class ="close"><i class="cross fa-solid fa-x"></i></p>
    <img  class ="info-img" src ="img/${product[newId].img}.jpg" alt ="${product[newId].name}" />
    <div class="info-product">
        <p>${product[newId].name}</p>
        <p>$${product[newId].price}</p>
    </div>
    <a href ="#">Add to cart</a>
    <p class ="info-text">${product[newId].info}</p>
  </div>


  
  
  
  `;
  infoCard.addEventListener("click", function (event) {
    if (event.target.classList.contains("cross")) {
      event.target.closest(".info-card").style.display = "none";
    }
  });

  document.body.appendChild(infoCard);
}

addObject(product);
