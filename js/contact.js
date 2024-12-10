document.querySelector('.contact-form .btn').addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    firebase.database().ref('contacts').push({
        name,
        email,
        message
    }).then(() => {
        alert("Message sent successfully!");
    }).catch((error) => {
        console.error("Error:", error);
    });
});