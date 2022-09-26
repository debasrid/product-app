import React from "react";

const ProductListing = (products, searchQuery, setSearchQuery) => {  
  const renderList = products.productList.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductListing;
