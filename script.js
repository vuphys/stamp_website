document.getElementById('contactForm').addEventListener('submit', function () {
    const name = this.name.value;
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    this.reset();
});