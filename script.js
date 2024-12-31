// Get the form and error message elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Function to validate form input
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both fields are filled
    if (username === "" || password === "") {
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message
        alert('Login successful!');
        // You can handle further login logic here, like sending data to the server.
    }
});
