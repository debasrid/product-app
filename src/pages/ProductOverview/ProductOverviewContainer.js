import {React, useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setSearchQuery, setFilterQuery } from "../../redux/products/actions/productsActions";
import ProductListing from "./components/ProductComponent";
import ProductSearch from "./components/SearchComponent";
import ProductFilter from "./components/FilterComponent";

const ProductPage = () => {

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  const products = useSelector((state) => state.allProducts.products);
  const value = useSelector((state) => state.query.searchQuery);
  const filter = useSelector((state) => state.filter.filterQuery);

  const filterList = (filter && filter !== "" && filter !== "All") ? products.filter(function (el) {
    return el.category.toLowerCase() === filter.toLowerCase()
  }) : products;

  const searchedList = (value && value !== "") ? filterList.filter(function (el) {
    return el.title.toLowerCase().includes(value.toLowerCase())
  }) : filterList;
  
  const setQuery = (query) => {
    dispatch(setSearchQuery(query));
  };

  const setCategoryFilterQuery = (query) => {
    dispatch(setFilterQuery(query));
  };
  
  const searchString = useSelector((state) => state.query.searchQuery);
  const productCategories = products.map(product => product.category);

  const uniqueCategories = productCategories.filter((element, index) => {
    return productCategories.indexOf(element) === index;
  });

  const productSearchProps = {
    searchQuery: {searchString},
    setSearchQuery: {setQuery},
  }
  const productfilterProps = {
    categories: {uniqueCategories},
    setFilterQuery: {setCategoryFilterQuery},
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductSearch {...productSearchProps} />
      <ProductFilter {...productfilterProps} />
      <ProductListing productList={searchedList}/>
    </div>
  );
};

export default ProductPage;
