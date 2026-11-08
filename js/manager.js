let popup = document.querySelector("#product-popup")
let addprod = document.querySelector("#add-product")
let close = document.querySelector("#close")

let productname = document.querySelector("#product-name")
let productprice = document.querySelector("#product-price")
let addproductbtn = document.querySelector("#addpd-btn")

addprod.addEventListener("click", function()
{
    popup.classList.remove("hidden")
})

close.addEventListener("click", function()
{
    popup.classList.add("hidden")
})

addproductbtn.addEventListener("click", function()
{
    let name = productname.value
    let price = Number(productprice.value)

    if (name.trim() === "" || productprice.value.trim() === "")
    {
        alert("pleasxe fill both field")
        return;
    }
    let card = document.createElement("div")
    card.classList.add("card", "border", "rounded-lg", "m-8", "overflow-hidden")

    let title = document.createElement("h2")
    let img = document.createElement("img")
    let pricetext = document.createElement("p")
    let deletebtn = document.createElement("button")

    pricetext.textContent = price  + "DH"
    deletebtn.textContent = "Delete"

    title.textContent = name

    
    img.src = "images/Logo_panier_stylisé_Ymarket-removebg-preview.png"

    card.appendChild(title)
    card.appendChild(img)
    card.appendChild(pricetext)
    card.appendChild(deletebtn)

    deletebtn.addEventListener("click", function()
    {
        card.remove()
    })

    document.querySelector("#products-container").appendChild(card)
})