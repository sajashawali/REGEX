function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const birthDate = document.getElementById("birth-date").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const mobile = document.getElementById("mobile").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = '';

    // 1. Check if the name contains only letters
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        errorMessage.textContent = "First and Last Name should contain only letters.";
        return false;
    }

    // 2. Check birth date (simple check if entered)
    if (!birthDate) {
        errorMessage.textContent = "Please enter a valid birth date.";
        return false;
    }

    // 3. Validate email structure using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    // 4. Check if the two emails are the same
    if (email !== confirmEmail) {
        errorMessage.textContent = "Emails do not match.";
        return false;
    }

    // 5. Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = "Password must start with a capital letter, contain at least two numbers, one special character, and be between 8 and 32 characters long.";
        return false;
    }

    // 5d. Check if password and confirmation match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    // 6. Mobile number should be 10 digits
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        errorMessage.textContent = "Mobile number must be 10 digits long.";
        return false;
    }

    return true;  
}
