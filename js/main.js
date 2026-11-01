let previous = document.querySelector("#prev")
let current = document.querySelector("#current")
let next = document.querySelector("#next")

let productsperpage = 8
let currentpage = 1
let cards;
let totalpages;

let productscontainer = document.querySelector("#products-container")

function showpage()
{
    for (let card of cards)
    {
        card.classList.add("hidden")
    }

    let start = (currentpage - 1) * productsperpage 
    let end = start + productsperpage

    for (let counter = start; counter < end; counter++)
    {
        cards[counter].classList.remove("hidden")
    }
    current.textContent = currentpage
}

fetch("https://dummyjson.com/products/category/groceries?limit=24")
.then(function(response)
{
    return response.json()
})

.then(function(data)
{
    for (let product of data.products)
    {
        let card = document.createElement("div")
        card.classList.add("card", "border", "rounded-lg", "m-8")
        let name = document.createElement("div")
        name.textContent = product.title
        name.classList.add("product", "text-2xl", "font-mono")
        card.appendChild(name)

        let image = document.createElement("img")
        image.src = product.thumbnail
        image.classList.add("w-36", "h-36")
        card.appendChild(image)

        let price = document.createElement("p")
        price.textContent = "Prix : " + product.price + "DH"
        price.classList.add("price", "font-mono")
        card.appendChild(price)

        productscontainer.appendChild(card)
    }
    cards = document.querySelectorAll(".card")
    totalpages = Math.ceil(cards.length / productsperpage)
    showpage()
})

next.addEventListener("click", function ()
{
    console.log("next clicked")
    
    if (currentpage < totalpages)
    {
        currentpage++;
        showpage()
    }
});

previous.addEventListener("click", function ()
{
    console.log("previous clicked")
    {
        if (currentpage > 1)
        {
            currentpage--
            showpage()
        }
    }
})
