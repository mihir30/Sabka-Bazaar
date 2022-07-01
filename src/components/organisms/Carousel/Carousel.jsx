import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import ImageSource from "../../../ImageSource";
import { getData } from "../../utils/common.utils";
import { WithSpinner } from "../../atoms";

const Carousel = () => {
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const banners_data = await getData("http://localhost:5000/banners");
        setBanners(banners_data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleImage = (order) => {
    setCurrent(order);
  };
  const handleTouchMove = (event) => {
    if (event.targetTouches[0].clientX > 150)
      handleImage(current === length ? 1 : current + 1)
    else
      handleImage(current === 1 ? length : current - 1);
  }
  const length = banners.length;
  return (
    <>
      <section className="carousel-section">
        {banners && banners.length > 0 ? banners.map((banner, index) => {
          return (
            <div className={current === banner.order ? "banner-image-div-active" : "banner-image-div"} key={index}
              onTouchMove={handleTouchMove}>
              {banner.order === current && (
                <ImageSource
                  alt={banner.bannerImageAlt}
                  source={banner.bannerImageUrl}
                  className="banner-image"
                />
              )}
            </div>
          );
        }) : <WithSpinner />}
        <button
          type="button"
          className="carousel-prev-button carousel-button"
          onClick={() => handleImage(current === 1 ? length : current - 1)}
        >
          PREV
        </button>
        <button
          type="button"
          className="carousel-next-button carousel-button"
          onClick={() => handleImage(current === length ? 1 : current + 1)}
        >
          NEXT
        </button>
        <div className="banner-dots-container desktop">
          {
            banners.map((banner) => {
              return <button className={banner.order === current ? "banner-dots active" : "banner-dots"} type="button" onClick={() => handleImage(banner.order)}></button>
            })
          }

        </div>
      </section>
      <div className="banner-dots-container mobile">
        {
          banners.map((banner) => {
            return <button className={banner.order === current ? "banner-dots active" : "banner-dots"} type="button" onClick={() => handleImage(banner.order)}></button>
          })
        }

      </div>
    </>
  );
};

export default Carousel;
