console.log("Shop.js")
let containerProducter = document.querySelector(".card-row")
let addToCart = document.getElementsByClassName(".add-to-cart")



let product = [
    {
        name: "Sko",
        img: "background",
        price: 6,
        id: 1,

    },
    {
        name: "Rolex",
        img: "background",
        price: 100,
        id: 2,

    },
    {
        name: "T-shirt",
        img: "background",
        price: 11,
        id: 3,

    },
    {
        name: "Keps",
        img: "background",
        price: 12,
        id: 4,
    },
]


function addObject(product){
    product.forEach(function(cards){
        const card = document.createElement("div");
        card.classList.add("card-wrapper");
        card.setAttribute("data-id", cards.id);
        card.innerHTML = `
          
        <img src="img/${cards.img}.jpg" alt="" />
        <div class="info-wrapper">
          <div class="price-info">
            <p>${cards.name}</p>
            <p>${cards.price}$</p>
          </div>
          <a href="#" class="add-to-cart">Add to cart</a>
        </div>
          
      
  `

    card.addEventListener("click", function(event){
        console.log("hej")
        const id = event.target.parentElement.getAttribute("data-id");
        getApiMovieDetails(id);
        
    })

    containerProducter.appendChild(card);
    })
}


function getApiMovieDetails(id){
    console.log(product.id)
}



addObject(product)
