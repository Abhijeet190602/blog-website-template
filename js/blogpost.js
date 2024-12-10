const blogContainer = document.querySelector('.articles');
    firebase.database().ref('blogposts').on('value', (snapshot) => {
        blogContainer.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const blog = childSnapshot.val();
            const article = `
                <div class="article">
                    <h3>${blog.title}</h3>
                    <p>${blog.content}</p>
                    <span>${new Date(blog.date).toLocaleString()}</span>
                </div>
            `;
            blogContainer.innerHTML += article;
        });
    });