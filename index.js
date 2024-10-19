document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let userName = document.getElementById('userName').value;
        let userEmail = document.getElementById('userEmail').value;

        console.log(userName, userEmail);

        if(userName && userEmail){
           let userDetails = {
            name: userName,
            email: userEmail,
           };

           let stringifyObj = JSON.stringify(userDetails);
          
           localStorage.setItem("user", stringifyObj);
           
           
            window.location.href = "../.index.html"
        }

    });






let cart = [];

function addToCart(name, price, imgSrc, description) {

    let item = cart.find(i => i.name === name);
    if (item) {
  
        item.quantity += 1;
    } else {

        cart.push({ name, price, imgSrc, description, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; 

    cart.forEach(item => {
        cartContainer.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <img src="${item.imgSrc}" alt="${item.name}" style="width: 50px; height: 50px;">
                <div class="ms-2">
                    <div>${item.name}</div>
                    <div>$${item.price} x ${item.quantity}</div>
                </div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    });
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
}