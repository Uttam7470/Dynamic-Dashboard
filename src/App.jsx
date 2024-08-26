
import React, { useState } from 'react';
import { WidgetProvider } from './context/WidgetContext';
import WidgetList from './components/WidgetList';
import Search from './components/Search';
import AddCategory from './components/AddCategory'; 
import './App.css';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    return (
        <WidgetProvider>
            <div className="app-container">
                <h1>Dashboard</h1>
                <Search onSearch={handleSearch} />
                <AddCategory /> 
                <WidgetList searchQuery={searchQuery} />
            </div>
        </WidgetProvider>
    );
};

export default App;
