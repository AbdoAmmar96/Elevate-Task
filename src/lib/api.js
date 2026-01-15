const API_URL = 'https://jsonplaceholder.typicode.com';

export async function createPost(data) {
    const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to create post');
    }

    return response.json();
}

export async function fetchPosts() {
    const response = await fetch(`${API_URL}/posts`);

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}

export async function fetchPostById(id) {
    const response = await fetch(`${API_URL}/posts/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }

    return response.json();
}

export async function fetchUsers() {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json();
}
