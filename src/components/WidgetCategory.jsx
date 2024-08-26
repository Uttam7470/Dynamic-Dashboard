

import React, { useContext, useState } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import AddWidgetModal from './AddWidgetModal';
import Widget from './Widget';


const WidgetCategory = ({ category, searchQuery }) => {
    const { removeWidget, addWidget } = useContext(WidgetContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const filteredWidgets = category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchQuery) || 
        widget.text.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="widget-category">
            <h2>{category.name}</h2>
            <button onClick={() => setIsModalOpen(true)}>+ Add Widget</button>
            <AddWidgetModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onAddWidget={addWidget} 
                categoryId={category.id} 
            />
            <div className="widget-list">
                {filteredWidgets.map(widget => (
                    <Widget key={widget.id} widget={widget} removeWidget={() => removeWidget(category.id, widget.id)} />
                ))}
            </div>
           
        </div>
    );
};

export default WidgetCategory;
