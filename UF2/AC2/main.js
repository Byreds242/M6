async function fetchPosts() {
    try {
        // Obtener la lista de usuarios
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();

        // Seleccionar la lista HTML donde se mostrarán los posts
        const userPostsList = document.getElementById('user-posts');
        userPostsList.innerHTML = '';  // Limpiar la lista

        // Obtener posts para cada usuario
        for (const user of users) {
            const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
            const posts = await postsResponse.json();

            // Crear un elemento de lista para cada usuario
            const userItem = document.createElement('li');
            userItem.textContent = `${user.name}:`;

            // Crear una lista de posts
            const postList = document.createElement('ul');

            posts.forEach(post => {
                const postItem = document.createElement('li');
                postItem.textContent = post.title;
                postList.appendChild(postItem);
            });

            // Añadir la lista de posts al usuario
            userItem.appendChild(postList);
            userPostsList.appendChild(userItem);
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
