function quickExit() {
    window.location.href = "https://www.google.com";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent. We will contact you shortly.');
});
