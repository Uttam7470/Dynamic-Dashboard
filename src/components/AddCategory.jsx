


import React, { useState, useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const { addCategory } = useContext(WidgetContext);

    const handleAddCategory = () => {
        if (categoryName) {
            addCategory(categoryName);
            setCategoryName(''); // input field clear
        }
    };

    return (
        <div className="add-category-container">
            <input 
                type="text" 
                placeholder="New Category Name" 
                value={categoryName} 
                onChange={(e) => setCategoryName(e.target.value)} 
            />
            <button onClick={handleAddCategory}>Add Category</button>
        </div>
    );
};

export default AddCategory;