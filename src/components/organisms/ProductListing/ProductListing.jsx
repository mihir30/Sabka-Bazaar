import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropDown, SideBar } from "../../molecules";
import ProductCard from "../../molecules/Product/Product";
import { WithSpinner } from "../../atoms";
import { getData } from "../../utils/common.utils";
import "./ProductListing.scss";

const ProductListing = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCatergoryId, setSelectedCatergoryId] = useState();
  const [userSelectedProducts, setUserSelectedProducts] = useState([]);
  let navigate = useNavigate();
  const plpURL = window.location.href;
  let extractCategoryID = plpURL.split("/products/")[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getData("http://localhost:5000/categories");
        setCategoryData(categories);
        const productsData = await getData("http://localhost:5000/products");
        setProductData(productsData);
        if (!extractCategoryID) {
          setUserSelectedProducts(productsData);
        } else {
          const filterData = productsData.filter(
            (product) => product.category === extractCategoryID
          );
          setUserSelectedProducts(filterData);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchData();
  }, [plpURL]);

  const handleCategoryChange = (id) => {
    if (selectedCatergoryId === id) {
      setSelectedCatergoryId(null);
      navigate(`/products/`);
      return setUserSelectedProducts(productData);
    } else {
      const filterData = productData.filter(
        (product) => product.category === id
      );
      setUserSelectedProducts(filterData);
      setSelectedCatergoryId(id);
      navigate(`/products/${id}`);
    }
  };

  const handleDropDownChange = (e) => {
    const id = e.target.value;
    if (id === "Default") {
      navigate(`/products/`);
      return setUserSelectedProducts(productData);
    } else {
      const filterData = productData.filter(
        (product) => product.category === id
      );
      setUserSelectedProducts(filterData);
      navigate(`/products/${id}`);
    }
  };

  return (
    <div>
      {isLoading ? (
        <WithSpinner></WithSpinner>
      ) : (
        <div className="product-listing">
          <SideBar
            categoryData={categoryData}
            id={selectedCatergoryId}
            name="select"
            handleCategoryChange={handleCategoryChange}
          ></SideBar>
          <div className="category-dropdown">
            <DropDown
              categoryData={categoryData}
              handleDropDownChange={handleDropDownChange}
            ></DropDown>
          </div>
          <div className="category-description">
            {userSelectedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageURL}
                name={product.name}
                price={product.price}
                stock={product.stock}
                text={product.description}
              ></ProductCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;