import React from 'react';

const NewsCard = ({ article, handleLike }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden bg-white mb-6">
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
                <p className="text-sm text-gray-500">
                    <strong>Platform:  </strong>{article.source.name || 'Unknown'}
                    
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
                    <button
                        onClick={() => handleLike(article)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                    >
                        Like Article
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
