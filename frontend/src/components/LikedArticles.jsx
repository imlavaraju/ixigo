import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LikedArticles = () => {
    const [likedArticles, setLikedArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLikedArticles = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/articles/liked', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setLikedArticles(res.data);
            } catch (error) {
                console.error('Error fetching liked articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLikedArticles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (likedArticles.length === 0) {
        return <div>You have not liked any articles yet.</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Your Liked Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedArticles.map((article) => (
                    <div key={article._id} className="border rounded-lg shadow-md overflow-hidden bg-white">
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{article.description}</p>
                            <p className="text-sm text-gray-500 mt-4">
                                <strong>Author:</strong> {article.author || 'Unknown'}
                            </p>
                            <p className="text-sm text-gray-500">
                                <strong>Published:</strong>{' '}
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline text-sm"
                                >
                                    Read Full Article
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LikedArticles;
