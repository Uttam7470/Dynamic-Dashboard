import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); 
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search Widgets..."
                value={query}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;