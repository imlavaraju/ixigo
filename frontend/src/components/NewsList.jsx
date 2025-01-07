import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles, handleLike }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
                <NewsCard key={index} article={article} handleLike={handleLike} />
            ))}
        </div>
    );
};

export default NewsList;
