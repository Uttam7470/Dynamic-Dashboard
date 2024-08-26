import React, { useState } from 'react';
import './AddWidgetModal.css'; 

const AddWidgetModal = ({ isOpen, onClose, onAddWidget, categoryId }) => {
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');

    const handleAddWidget = () => {
        if (widgetName && widgetText) {
            onAddWidget(categoryId, widgetName, widgetText);
            setWidgetName('');
            setWidgetText('');
            onClose(); 
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Widget</h2>
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
                <div className='modal-btn'>
                <button onClick={handleAddWidget}>Add Widget</button>
                <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddWidgetModal;