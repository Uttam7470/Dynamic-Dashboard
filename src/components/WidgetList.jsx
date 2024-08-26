import React, { useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import WidgetCategory from "./WidgetCategory";

const WidgetList = ({ searchQuery }) => {
  const { categories } = useContext(WidgetContext);

  return (
    <div>
      {categories.map((category) => (
        <WidgetCategory
          key={category.id}
          category={category}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
};

export default WidgetList;
