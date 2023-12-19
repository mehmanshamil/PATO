let product = document.getElementById("product");

let page = 1;
let limit = 3;

let btn = document.getElementById("btn")
btn.addEventListener("click", getdata)

async function getdata() {
    let skip = (page - 1) * limit
    await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
        .then(res => {
            db = res.data;
            db.forEach((item) => {
                let div = document.createElement("div")
                div.className = "box"
                div.innerHTML = `
            <img src="${item.image}" alt="photo">
            <p>${item.title}</p>
            <h3>${item.price}$</h3>
            <button onclick="addtocart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>add to cart</button>   
            `
                product.appendChild(div)
            })
        })
        .catch((error) => console.log(error));
}

function addtocart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(db.find((item) => item.id == index));
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}

getdata()

let form1 = document.getElementById("form");
form1.addEventListener("submit", getpost)
function getpost(e) {
    e.preventDefault()
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let people = document.getElementById("people");
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");


    let data = {
        date: date.value,
        time: time.value,
        people: people.value,
        name: name.value,
        phone: phone.value,
        email: email.value
    }
    axios.post("https://655f2b37879575426b44b8f7.mockapi.io/basket", data);
    console.log(data);

}

// position head
window.onscroll = () => {
    let scroll = window.scrollY;
    if (scroll > 200) {
        document.getElementById("header").style.backgroundColor = "black"
    } else {
        document.getElementById("header").style.backgroundColor = ""
    }
}

