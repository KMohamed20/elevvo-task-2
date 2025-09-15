document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you! Your message has been sent.');
  this.reset();
});
