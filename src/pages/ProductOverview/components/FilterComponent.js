import React from "react";

const ProductFilter = (props) => { 
    const { categories, setFilterQuery } = props; 
    const onCategorySelect = event => {
        setFilterQuery.setCategoryFilterQuery(event.target.value)
    }
    return (
        <div className="ui filter-container">
            <select onChange={event => onCategorySelect(event)}>
                <option value="All" key="0">All</option>
                {categories.uniqueCategories.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </select>  
        </div>
    );
};

export default ProductFilter;
