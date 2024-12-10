// editor.js


document.getElementById('blog-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    firebase.database().ref('blogposts').push({
        title,
        content,
        date: new Date().toISOString()
    }).then(() => {
        alert("Blog post published!");
    }).catch((error) => {
        console.error("Error:", error);
    });
});