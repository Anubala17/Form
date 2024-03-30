var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var date = document.getElementById('date').value;
var gender = document.getElementById('gender').value;


// Validate name (non-empty)
if (fullname.trim() === '') {
  alert('Please enter your name');
  return false;
}

// Validate email (format)
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  alert('Please enter a valid email address');
  return false;
}

// Validate password (length)
if (password.length < 6) {
  alert('Password must be at least 6 characters long');
  return false;
}

// If all validations pass, submit the form
alert('Form submitted successfully');


