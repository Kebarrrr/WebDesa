(function() {
    emailjs.init("YOUR_USER_ID");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Error: ' + JSON.stringify(error));
        });
});