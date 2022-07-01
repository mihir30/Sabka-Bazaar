import React, { useEffect, useState } from "react";
import { Carousel, Section } from "../../organisms";
import { getData } from "../../utils/common.utils";
import { WithSpinner } from "../../atoms";
const HomePage = () => {
  const [category_data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await getData("http://localhost:5000/categories");
        categories.sort((category1, category2) => {
          return category1.order - category2.order;
        });
        setData(categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div aria-label="homepage-container">
      <div aria-label="homepage-carousel">
        <Carousel />
      </div>
      <div aria-label="homepage-categories">
        {
          category_data && category_data.length > 0 ?
            category_data.map((data, index) => {
              return (
                data.enabled && (
                  <Section
                    imgSrc={data.imageUrl}
                    imgAlt="image"
                    key={index}
                    id={data.id}
                    name={data.name}
                    value={data.key}
                    description={data.description}
                    order={data.order}
                  />
                )
              );
            }) : <WithSpinner />
        }
      </div>
    </div>
  );
};

export default HomePage;
