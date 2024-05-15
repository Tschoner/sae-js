document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('posts');

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:3000/api/posts');
        const posts = await response.json();
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('border', 'p-4', 'mb-4', 'bg-white', 'rounded-md', 'shadow-md', 'hover:shadow-lg', 'transition-shadow', 'duration-300');
            postElement.innerHTML = `
                <h2 class="text-xl font-bold text-gray-800">${post.title}</h2>
                <p class="text-gray-600 mb-4">${post.content}</p>
                <button data-id="${post._id}" class="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete</button>
            `;
            postsContainer.appendChild(postElement);
        });
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const id = e.target.dataset.id;
                await fetch(`http://localhost:3000/api/posts/${id}`, { method: 'DELETE' });
                fetchPosts();
            });
        });
    };

    postForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title.trim() && content.trim()) {
            await fetch('http://localhost:3000/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content })
            });
            postForm.reset();
            fetchPosts();
        }
    });

    fetchPosts();
});
