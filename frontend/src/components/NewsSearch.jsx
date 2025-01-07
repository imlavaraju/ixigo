import { useState } from 'react';

const NewsSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSearch} className="mb-4 w-full items-center ">
            <input
                type="text"
                placeholder="Search for news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 mr-2 w-[55vw]"
            />
            <button type="submit" className="bg-blue-600 text-white p-2 w-[20vw] ">Search</button>
        </form>
    );
};

export default NewsSearch;
