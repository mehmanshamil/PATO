let product = document.getElementById("product");

function getdata() {
    product.innerHTML = ""
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    data.forEach((item, index) => {
        let div = document.createElement("div")
        div.className = "box"
        div.innerHTML = `
    <img src="${item.image}" alt="photo">
    <p>${item.title}</p>
    <h3>${item.price}$</h3>
    <button onclick="removetocart(${index})"><i class="fa-solid fa-trash"></i>remove to cart</button>   
    `
        product.appendChild(div)
    })
}
getdata()

function removetocart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart));
    getdata();
}
document.getElementById("form").addEventListener("submit", search)
function search(e) {
    let inp = document.getElementById("inp");
    let val = inp.value;
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
    display(data)
}
let max = document.getElementById("max");
max.addEventListener("click", maxFind)
function maxFind() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => (b.price - a.price));
    display(data)
}
let min = document.getElementById("min");
min.addEventListener("click", minFind)
function minFind() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => (a.price - b.price));
    display(data)
}
let abc = document.getElementById("abc");
abc.addEventListener("click", abcFilter)
function abcFilter() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => a.title.localeCompare(b.title));
    display(data)
    console.log("data");

}

function display(data) {
    product.innerHTML = ""
    data.forEach((item) => {
        let div = document.createElement("div")
        div.className = "box"
        div.innerHTML = `
    <img src="${item.image}" alt="photo">
    <p>${item.title}</p>
    <h3>${item.price}$</h3>
    <button onclick="addtocart("${item.id}")><i class="fa-solid fa-cart-shopping"></i>add to cart</button>   
    `
        product.appendChild(div)
    })
}
