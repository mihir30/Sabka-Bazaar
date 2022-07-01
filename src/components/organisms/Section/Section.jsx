import React from "react";
import "./Section.scss";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";
import ImageSource from "../../../ImageSource";
const Section = ({
  imgSrc,
  imgAlt,
  index,
  id,
  name,
  value,
  description,
  order,
}) => {
  const navigate = useNavigate();
  return (
    <section className="homepage-section" key={index}>
      {order % 2 !== 0 ? (
        <>
          <ImageSource
            source={imgSrc}
            alt={imgAlt}
            className="category-image"
          />
          <div className="text-container">
            <h2 className="category-name">{name}</h2>
            <p className="category-description">{description}</p>
            <Button
              buttonType="category-button"
              method={() => navigate(`/products/${id}`)}
            >
              {"Explore " + value}
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="text-container">
            <h2 className="category-name">{name}</h2>
            <p className="category-description">{description}</p>
            <Button
              buttonType="category-button"
              method={() => navigate(`/products/${id}`)}
            >
              {"Explore " + value}
            </Button>
          </div>
          <ImageSource
            source={imgSrc}
            alt={imgAlt}
            className="category-image"
          />
        </>
      )}
    </section>
  );
};

export default Section;
