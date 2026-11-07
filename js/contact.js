let fullname = document.querySelector("#full-name")
let email = document.querySelector("#email")
let phonnumber = document.querySelector("#phone-number")
let message = document.querySelector("#message")
let autobtn = document.querySelector("#auto-fil")

autobtn.addEventListener("click", function()
{
    fetch("https://randomuser.me/api/")
    .then(function(response)
    {
        return response.json()
    })
    .then(function(data)
    {
        console.log(data.results[0])
        console.log(data.results[0].name)
        fullname.value = data.results[0].name.first + " " + data.results[0].name.last
        email.value = data.results[0].email
        phonnumber.value = data.results[0].phone
    })
})