import React, { useContext, useState } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const AddWidget = ({ categoryId }) => {
    const { addWidget } = useContext(WidgetContext);
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const handleAddWidget = () => {
        addWidget(categoryId, widgetName, widgetText);
        setWidgetName('');
        setWidgetText('');
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Widget Name" 
                value={widgetName} 
                onChange={(e) => setWidgetName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Widget Text" 
                value={widgetText} 
                onChange={(e) => setWidgetText(e.target.value)} 
            />
            <button onClick={handleAddWidget}>+ Add Widget</button>
        </div>
    );
};

export default AddWidget;