import React from 'react';

const Widget = ({ widget, removeWidget }) => {
    return (
        <div className="widget-card">
            <h4>{widget.name}</h4>
            <p>{widget.text}</p>
            <button onClick={removeWidget}>×</button>
        </div>
    );
};

export default Widget;