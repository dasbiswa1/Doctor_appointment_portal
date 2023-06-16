/*document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById("patient-name").value;
    const email = document.getElementById("patient-email").value;
    const doctor = document.getElementById("doctor-name").value;
    const date = document.getElementById("appointment-date").value;
  
    // Perform appointment booking logic here
    // You can use AJAX or fetch to send a request to the server for booking an appointment
  
    // Clear form fields after booking appointment
    document.getElementById("patient-name").value = "";
    document.getElementById("patient-email").value = "";
    document.getElementById("doctor-name").value = "";
    document.getElementById("appointment-date").value = "";
  
    // Update appointments table
    const table = document.getElementById("appointments-table");
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const emailCell = row.insertCell(1);
    const doctorCell = row.insertCell(2);
    const dateCell = row.insertCell(3);
    nameCell.textContent = name;
    emailCell.textContent = email;
    doctorCell.textContent = doctor;
    dateCell.textContent = date;
});*/


const token = JSON.parse(localStorage.getItem("token"));
const login = document.getElementById("signinForm");
if(token){
    login.innerText="Logout";
    login.addEventListener("click",()=>{
        localStorage.removeItem("token");
        window.location.href='./signin.html';
    });
}
else{
    login.addEventListener("click",()=>{
        window.location.href='./signin.html';
    });
}
if(token){
    window.location.href='./signin.html';
}

function logout(){
    window.location.href = "signin.html";
}
function toggleRegistrationForm() {
    var registrationForm = document.querySelector(".registration-form");
    registrationForm.style.display = registrationForm.style.display === "none" ? "block" : "none";
}

function registerAppointment(event) {
    event.preventDefault();

    var selectedDoctor = document.querySelector('input[name="doctors"]:checked');
    var selectedDepartments = document.querySelectorAll('input[name="departments"]:checked');
    var selectedDate = document.getElementById("date").value;
    var selectedTime = document.getElementById("time").value;

    var tableBody = document.querySelector("#previousAppointments tbody");

    var newRow = tableBody.insertRow();
    var dateCell = newRow.insertCell();
    var timeCell = newRow.insertCell();
    var doctorCell = newRow.insertCell();
    var departmentCell = newRow.insertCell();

    dateCell.textContent = selectedDate;
    timeCell.textContent = selectedTime;
    doctorCell.textContent = selectedDoctor.value;
    departmentCell.textContent = Array.from(selectedDepartments).map(function (department) {
        return department.value;
    }).join(", ");

    // Clear the form fields
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";

    toggleRegistrationForm();
}
