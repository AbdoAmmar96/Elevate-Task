import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate()

    const POSTS_PER_PAGE = 10;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    // Search filter
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = filteredPosts.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE
    );

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    return (
        <div className="max-w-6xl mx-auto p-6  bg-[#8496a7] rounded-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Post List</h1>
                <button
                    onClick={() => navigate('/create-post')}
                    className="px-4 py-2 rounded-md bg-gray-900 text-white"
                >
                    + Create a new post
                </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 bg-gray-200 p-4 rounded-xl mb-6">
                <input
                    type="text"
                    placeholder="Search for a post..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-full outline-none"
                />

                <select className="px-4 py-2 rounded-full outline-none">
                    <option>All</option>
                </select>
            </div>

            {/* Posts */}
            <div className="bg-white rounded-xl overflow-hidden">
                {paginatedPosts.map((post) => (
                    <div
                        key={post.id}
                        onClick={() => navigate(`/posts/${post.id}`)}
                        className="px-6 py-4 border-b last:border-none hover:bg-gray-50"
                    >
                        {post.title}
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-9 h-9 rounded-full ${currentPage === index + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
