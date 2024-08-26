import React, { createContext, useState, useEffect } from "react";
import data from "../data.json";

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data.categories);
  }, []);


  const addWidget = (categoryId, widgetName, widgetText) => {
    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
    };
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      )
    );
  };


  const removeWidget = (categoryId, widgetId) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };


  const addCategory = (categoryName) => {
    const newCategory = {
      id: Date.now().toString(),
      name: categoryName,
      widgets: [],
    };
    setCategories([...categories, newCategory]);
  };

  return (

    <WidgetContext.Provider
      value={{ categories, addWidget, removeWidget, addCategory }}
    >
      {children}
    </WidgetContext.Provider>
    
  );
};
