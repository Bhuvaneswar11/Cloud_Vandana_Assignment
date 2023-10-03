function submitForm() {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        var popupContent = "First Name: " + firstName + "<br>";
        popupContent += "Last Name: " + lastName + "<br>";
        popupContent += "Date of Birth: " + dob + "<br>";
        popupContent += "Country: " + country + "<br>";
        popupContent += "Gender: " + gender.value + "<br>";
        popupContent += "Profession: " + profession + "<br>";
        popupContent += "Email: " + email + "<br>";
        popupContent += "Mobile Number: " + mobile + "<br>";

        document.getElementById("popupContent").innerHTML = popupContent;
        document.getElementById("popup").style.display = "block";
    } else {
        alert("Please fill in all the fields.");
    }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}