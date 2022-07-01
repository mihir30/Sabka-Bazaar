import React from "react";
import "./Dropdown.scss";

const DropDown = ({ categoryData, ...props }) => {
  return (
    <select
      onChange={props.handleDropDownChange}
      className="category-dropdown-content"
    >
      <option value="Default">All Products</option>
      {categoryData?.map((category) =>
        category.enabled ? (
          <option
            key={category.id}
            value={category.id}
            className="option-dropdown"
          >
            {category.name}
          </option>
        ) : null
      )}
    </select>
  );
};

export default DropDown;
