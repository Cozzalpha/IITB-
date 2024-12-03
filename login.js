// JavaScript for handling the login form submission
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login successful!");
    window.location.href = "HP_Buy.html"; // Redirect after login
});
