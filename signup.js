/*document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
  
    // Perform signup logic here
    // You can use AJAX or fetch to send a request to the server for signup
  
    // Clear form fields after signup
    document.getElementById("signup-name").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";
  })*/

const button = document.getElementById("mybutton");
console.log("hello")
button.addEventListener("click", () => {
    //console.log("hello");
    const name = document.getElementById("signupUsername").value;
    const useremail = document.getElementById("signupEmail").value;
    const userPassword = document.getElementById("signupPassword").value;
    console.log(name, userPassword, useremail);
    if (name.trim() === "" ||useremail.trim() === "" || userPassword.trim() === "") {
        alert("Please enter All the required Field");
        return;
    }
    fetch("http://localhost:5050/mydata", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: useremail,
            password: userPassword
        })
    }).then((res) => res.json())
    .then((data) => {
        console.log(data);
        window.location.href = './signin.html';
        alert("Your account has been created succesfully!");
    })
})
