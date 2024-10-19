
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;

    console.log(userName, userEmail, userPassword);

    // Check if fields are empty
    if (!userName) {
        console.error("Username is required.");
    }
    if (!userEmail) {
        console.error("Email is required.");
    }
    if (!userPassword) {
        console.error("Password is required.");
    }

    if (userName && userEmail && userPassword) {
        let userDetails = {
            name: userName,
            email: userEmail,
            password: userPassword,
        };

        let stringifyObj = JSON.stringify(userDetails);

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("user", stringifyObj);
            window.location.href = "../index.html";
        } else {
            console.error("Local storage is not supported.");
        }
    }
});