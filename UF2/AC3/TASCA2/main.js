// funcion para obtener datos desde una url
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

// funcion para mostrar posts de un usuario
function createUserPostsElement(user, posts) {
    const userItem = document.createElement('li');
    userItem.textContent = `${user.name}:`;

    const postList = document.createElement('ul');
    posts.forEach(post => {
        const postItem = document.createElement('li');
        postItem.textContent = post.title;
        postList.appendChild(postItem);
    });

    userItem.appendChild(postList);
    return userItem;
}

// funcion principal para obtener y mostrar los posts
async function fetchPosts() {
    try {
        const users = await fetchData('https://jsonplaceholder.typicode.com/users');
        const userPostsList = document.getElementById('user-posts');
        userPostsList.innerHTML = ''; // limpiar la lista

        for (const user of users) {
            const posts = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            const userItem = createUserPostsElement(user, posts);
            userPostsList.appendChild(userItem);
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
