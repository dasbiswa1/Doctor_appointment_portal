/*document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var email = document.getElementById("signin-email").value;
    var password = document.getElementById("signin-password").value;
  
    // Perform signin logic here
    // You can use AJAX or fetch to send a request to the server for signin
  
    // Clear form fields after signin
    document.getElementById("signin-email").value = "";
    document.getElementById("signin-password").value = "";
  });*/

//const token = JSON.parse(localStorage.getItem("token"));
const token=JSON.parse(localStorage.getItem("token"));        
const button = document.getElementById("mybutton")
button.addEventListener("click",()=>{
    const inputemail=document.getElementById("signinEmail").value;
    const inputpassword=document.getElementById("signinPassword").value;
    fetch("http://localhost:5050/mydata",{
        method:"GET",
        
    }).then((res)=>res.json())
    .then((data)=>{console.log(data);
        const user=data.find((e)=>e.email===inputemail && e.password===inputpassword);
        console.log(user);
        if(user){
            alert("LOGIN SUCCESSFULL");
            //console.log("LOGIN Successful");
            localStorage.setItem("token",JSON.stringify(Date.now()));
            window.location.href='./appointment.html';
        }
        else{
            alert("Entered Userid or Password is wrong ");
            console.log("Login Unsuccessful");
            
            window.location.href='./signup.html';
        }
    });
});