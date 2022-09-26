import React from "react";

const ProductSearch = (props) => { 
    const { searchQuery, setSearchQuery } = props; 
    return (
        <div className="ui search-container">
            <input type="text" placeholder="Enter Product Name" onChange={event => setSearchQuery.setQuery(event.target.value)} value={searchQuery.searchString} />    
        </div>
    );
};

export default ProductSearch;
